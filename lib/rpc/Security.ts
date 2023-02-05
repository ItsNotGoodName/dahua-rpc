import { RPCBase } from "../rpcBase";

export function Security(this: RPCBase) {
  return {
    getEncryptInfo: () => {
      return this.send("Security.getEncryptInfo").then(function (a) {
        return a.params;
      });
    },
    getEncryptDog: () => {
      return this.send<{ info: unknown }>("Security.getEncryptDog").then(
        function (a) {
          return a.params.info;
        }
      );
    },
    addUser: (salt: unknown, cipher: unknown, content: unknown) => {
      return this.send("Security.addUser", {
        salt: salt,
        cipher: cipher,
        content: content,
      });
    },
    addUserPlain: (salt: unknown, cipher: unknown, content: unknown) => {
      return this.send("Security.addUserPlain", {
        salt: salt,
        cipher: cipher,
        content: content,
      });
    },
    modifyPasswordByType: (
      salt: unknown,
      cipher: unknown,
      content: unknown
    ) => {
      return this.send("Security.modifyPasswordByType", {
        salt: salt,
        cipher: cipher,
        content: content,
      });
    },
    modifyPasswordPlain: (a: unknown, b: unknown, c: unknown) => {
      return this.send("Security.modifyPasswordPlain", {
        salt: a,
        cipher: b,
        content: c,
      });
    },
    ModifyPwdOutSession: (salt: unknown, cipher: unknown, content: unknown) => {
      return this.sendRPC(
        this.rpc("Security.modifyPwdOutSession", {
          salt: salt,
          cipher: cipher,
          content: content,
        }),
        "/OutsideCmd"
      ).then(function (a) {
        return a.params;
      });
    },
    getConfig: (salt: unknown, cipher: unknown, content: unknown) => {
      return this.send<{ content: unknown }>("Security.getConfig", {
        salt: salt,
        cipher: cipher,
        content: content,
      }).then(function (a) {
        return a.params.content;
      });
    },
    setConfig: (salt: unknown, cipher: unknown, content: unknown) => {
      return this.send<{ content: unknown } | null>("Security.setConfig", {
        salt: salt,
        cipher: cipher,
        content: content,
      }).then(function (a) {
        return a.params && a.params.content;
      });
    },
  };
}
