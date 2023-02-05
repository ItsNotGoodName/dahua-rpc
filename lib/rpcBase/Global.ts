import { RPCBase } from ".";

export function Global(this: RPCBase) {
  return {
    firstLogin: (username: string, params?: object, clientType?: string) => {
      const data = {
        method: "global.login",
        params: {
          userName: username,
          password: "",
          clientType: clientType ? clientType : "Web3.0",
          ...params,
        },
        id: this._nextID(),
      };

      return this.sendRPCRaw<{
        authorization: string;
        encryption: string;
        random: string;
        realm: string;
      }>(data, "/RPC2_Login").then((a) => {
        this._setSession(a.data.session);
        return a.data;
      });
    },
    secondLogin: (
      username: string,
      password: string,
      params?: object,
      clientType?: string
    ) => {
      return this.sendRPC<
        { remainLockSecond: number; remainLoginTimes: number } | unknown
      >(
        this.rpc("global.login", {
          userName: username,
          password: password,
          clientType: clientType ? clientType : "Web3.0",
          ...params,
        }),
        "/RPC2_Login"
      );
      // .then(() => {
      // this._jar.setCookieSync("DWebClientSessionID=" + this.getSession(), "/")
      // this._jar.setCookieSync("username=" + username, "/")
      // this._jar.setCookieSync("DhWebClientSessionID=", "/")
      // });
    },
    logout: () => {
      return this.sendRPC(this.rpc("global.logout"), null);
    },
    keepAlive: (timeout?: number) => {
      return this.sendRPC<{ timeout: number }>(
        this.rpc("global.keepAlive", { timeout: timeout || 300, active: true })
      ).then(function (a) {
        return a.params.timeout;
      });
    },
    getCurrentTime: () => {
      return this.sendRPC<{ time: string }, string | boolean>(
        this.rpc("global.getCurrentTime")
      ).then(function (b) {
        return "string" === typeof b.result ? b.result : b.params.time;
      });
    },
    setCurrentTime: (time: string, tolerance: unknown) => {
      return this.sendRPC(
        this.rpc("global.setCurrentTime", { time: time, tolerance: tolerance })
      );
    },
  };
}
