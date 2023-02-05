import { RPCBase } from "../rpcBase";

export function PasswdFind(this: RPCBase) {
  return {
    getPub: () => {
      return this.sendRPC(
        this.rpc("Security.getEncryptInfo", null),
        "/OutsideCmd"
      ).then(function (a) {
        return a; // webApp.EncryptInfo || (webApp.EncryptInfo = a.params), a;
      });
    },
    getDescript: () => {
      return this.sendRPC(
        this.rpc("PasswdFind.getDescript", { name: "admin" }),
        "/OutsideCmd"
      ).then(function (a) {
        return a.params;
      });
    },
    resetPassword: (salt: unknown, cipher: unknown, content: unknown) => {
      return this.sendRPC(
        this.rpc("PasswdFind.resetPassword", {
          salt: salt,
          cipher: cipher,
          content: content,
        }),
        "/OutsideCmd"
      ).then(function (a) {
        return a;
      });
    },
    setContact: (salt: unknown, cipher: unknown, content: unknown) => {
      return this.send("PasswdFind.setContact", {
        salt: salt,
        cipher: cipher,
        content: content,
      });
    },
    getContact: (mode?: number) => {
      return this.send("PasswdFind.getContact", { mode: mode || 0 }).then(
        function (a) {
          return a.params;
        }
      );
    },
    checkAuthCode: (salt: unknown, cipher: unknown, content: unknown) => {
      return this.sendRPC(
        this.rpc("PasswdFind.checkAuthCode", {
          salt: salt,
          cipher: cipher,
          content: content,
        }),
        "/OutsideCmd"
      ).then(function (a) {
        return a;
      });
    },
  };
}
