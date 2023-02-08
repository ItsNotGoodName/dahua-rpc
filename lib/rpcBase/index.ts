import axios from "axios";
import http from "http";
import https from "https";
import { Global } from "./Global";

export enum Code {
  ERROR_CODE_NOT_SET = 268959743,
  INTERFACE_NOT_FOUND = 268632064,
  METHOD_NOT_FOUND = 268894210,
  REQUEST_INVALID = 268894209,
  REQUEST_INVALID_PARAM = 268894211,
  SESSION_INVALID = 28763750,

  USER_NOT_VALID = 268632070,
  PASSWORD_NOT_VALID = 268632071,
  IN_BLACK_LIST = 268632073,
  HAS_BEEN_USED = 268632074,
  HAS_BEEN_LOCKED = 268632081,

  BUSY = 268632075,
}

export type TRPC = object;

export type TResponse<T = unknown, R = boolean> = {
  id: number;
  error?: { code: number; message: string };
  params: T;
  result: R;
  session: string;
};

export type TOptions = {
  protocol?: "http" | "https";
  rpcURI?: string;
  rpcLoadfileURI?: string;
};

const axiosInstance = axios.create({
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
});

/**
 * Base RPC class that can send RPC and has the Global module.
 */
export class RPCBase {
  readonly baseURL;
  readonly rpcURI;
  readonly rpcLoadfileURL;
  _id = 0;
  _session = "";
  _cookies = "";

  Global = Global.bind(this)();

  /**
   * @param address ip or ip:port
   */
  constructor(address: string, options: TOptions = {}) {
    this.baseURL = `${options.protocol ?? "http"}://${address}`;
    this.rpcURI = options.rpcURI ?? "/RPC2";
    this.rpcLoadfileURL =
      this.baseURL + (options.rpcLoadfileURI ?? "/RPC_Loadfile");
  }

  _nextID(): number {
    return this._id++;
  }

  _setSession(username: string, session: string) {
    this._cookies = `username=${username}; WebClientSessionID=${session}; DWebClientSessionID=${session}; DhWebClientSessionID=${session}`;
    this._session = session;
  }

  getSession(): string {
    return this._session;
  }

  getCookies(): string {
    return this._cookies;
  }

  getRPCLoadfileURL(filePath: string): string {
    return `${this.rpcLoadfileURL}${filePath}`;
  }

  /**
   * Generate a RPC.
   * @param method The method to call on the remote device.
   * @param params The arguments to pass to the method.
   * @param options Extra options for the RPC.
   * @returns
   */
  rpc(method: string, params?: object | null, options?: object): TRPC {
    return {
      method: method,
      params: params || null,
      id: this._nextID(),
      session: this.getSession(),
      ...options,
    };
  }

  /**
   * Send RPC without inspecting response for errors.
   */
  sendRPCRaw<T, R = boolean>(rpc: TRPC, uri?: string | null) {
    return axiosInstance.post<TResponse<T, R>>(
      this.baseURL + (uri || this.rpcURI),
      JSON.stringify(rpc)
    );
  }

  /**
   * Send RPC.
   */
  sendRPC<T, R = boolean>(rpc: TRPC, uri?: string | null) {
    return new Promise<TResponse<T, R>>((resolve, reject) => {
      this.sendRPCRaw<T, R>(rpc, uri)
        .then((b) => {
          if (b.data.result) {
            return resolve(b.data);
          }

          if (
            b.data.error &&
            b.data.error.code &&
            Code.SESSION_INVALID === b.data.error.code
          ) {
            // TODO: publish SessionInvalid event
          }

          reject(b.data);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }

  /**
   * Generate and send a single or multiple RPC.
   * @param methodOrArray Method or an array of methods.
   * @param paramsOrArray Parameter or an array of parameters.
   */
  send<T, R = boolean>(
    methodOrArray: string[] | string,
    paramsOrArray?: object[] | object | null,
    options?: object,
    uri?: string
  ) {
    const multicalls: TRPC[] = [];

    if (Array.isArray(methodOrArray) && Array.isArray(paramsOrArray)) {
      methodOrArray.forEach((method, index) => {
        multicalls.push(this.rpc(method, paramsOrArray[index], options));
      });
      return this.sendRPC<T, R>(this.rpc("system.multicall", multicalls), uri);
    }

    if (typeof methodOrArray == "string" && Array.isArray(paramsOrArray)) {
      paramsOrArray.forEach((params) => {
        multicalls.push(this.rpc(methodOrArray, params, options));
      });
      return this.sendRPC<T, R>(this.rpc("system.multicall", multicalls), uri);
    }

    if (Array.isArray(methodOrArray)) {
      methodOrArray.forEach((method) => {
        multicalls.push(this.rpc(method, paramsOrArray, options));
      });
      return this.sendRPC<T, R>(this.rpc("system.multicall", multicalls), uri);
    }

    return this.sendRPC<T, R>(
      this.rpc(methodOrArray, paramsOrArray, options),
      uri
    );
  }

  /**
   * Create instance that is used for other send calls.
   * @param method setup method.
   * @param useCache Use cached response if available.
   */
  sendSetup<T, R = boolean>(method: string, useCache = true) {
    let data: Record<string, Record<string, Promise<TResponse<T, R>>>> = {};
    return (params?: object, options?: object) => {
      const session = this.getSession();
      const json = JSON.stringify({ ...params, ...options });

      if (session in data && json in data[session] && useCache) {
        return new Promise<TResponse<T, R>>((resolve) => {
          data[session][json]
            .then(() => resolve(data[session][json]))
            .catch(() => {
              resolve(
                (data[session][json] = this.send<T, R>(method, params, options))
              );
            });
        });
      }

      return data[session]
        ? (data[session][json] = this.send<T, R>(method, params, options))
        : ((data = {}),
          (data[session] = {}),
          (data[session][json] = this.send<T, R>(method, params, options)));
    };
  }
}
