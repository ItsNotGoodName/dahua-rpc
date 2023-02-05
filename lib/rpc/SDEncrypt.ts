import { RPCBase } from "../rpcBase";

export function SDEncrypt(this: RPCBase) {
  return {
    encrypt: (name: unknown, password: unknown) => {
      return this.send("SDEncrypt.encrypt", { name: name, password: password });
    },
    decrypt: (name: unknown, password: unknown) => {
      return this.send("SDEncrypt.decrypt", { name: name, password: password });
    },
    modifyPassword: (
      name: unknown,
      password: unknown,
      oldPassword: unknown
    ) => {
      return this.send("SDEncrypt.modifyPassword", {
        name: name,
        password: password,
        oldPassword: oldPassword,
      });
    },
    clearPassword: (name: unknown, password: unknown) => {
      return this.send("SDEncrypt.clearPassword", {
        name: name,
        password: password,
      });
    },
    getOperateErrorPolicy: (name: unknown, operate: unknown) => {
      return this.send("SDEncrypt.getOperateErrorPolicy", {
        name: name,
        operate: operate,
      });
    },
  };
}
