import { RPCBase } from "../rpcBase";

export function DevInit(this: RPCBase) {
  return {
    getStatus: () => {
      return this.sendRPC(
        this.rpc("DevInit.getStatus", null),
        "/OutsideCmd"
      ).then(function (a) {
        return a;
      });
    },
    account: (salt: unknown, cipher: unknown, content: unknown) => {
      return this.sendRPC(
        this.rpc("DevInit.account", {
          salt: salt,
          cipher: cipher,
          content: content,
        }),
        "/OutsideCmd"
      ).then(function (a) {
        return a;
      });
    },
    access: (salt: unknown, cipher: unknown, content: unknown) => {
      return this.sendRPC(
        this.rpc("DevInit.access", {
          salt: salt,
          cipher: cipher,
          content: content,
        }),
        "/OutsideCmd"
      ).then(function (a) {
        return a;
      });
    },
    getCurrentTime: () => {
      return this.sendRPC(
        this.rpc("DevInit.getCurrentTime", {}),
        "/OutsideCmd"
      ).then(function (a) {
        return a;
      });
    },
    setCurrentTime: (time: unknown, tolerance: unknown) => {
      return this.sendRPC(
        this.rpc("DevInit.setCurrentTime", {
          time: time,
          tolerance: tolerance,
        }),
        "/OutsideCmd"
      ).then(function (a) {
        return a;
      });
    },
    setLocalityConfig: (salt: unknown, cipher: unknown, content: unknown) => {
      return this.sendRPC(
        this.rpc("DevInit.setLocalityConfig", {
          salt: salt,
          cipher: cipher,
          content: content,
        }),
        "/OutsideCmd"
      ).then(function (a) {
        return a;
      });
    },
    getDevCaps: () => {
      return this.sendRPC(this.rpc("DevInit.getDevCaps"), "/OutsideCmd").then(
        function (a) {
          return a && a.params;
        }
      );
    },
  };
}
