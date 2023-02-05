import { RPCBase } from "../rpcBase";

export function wire802File(this: RPCBase) {
  return {
    importCACert: (Interface: unknown, content: unknown) => {
      return this.send("Wire802_1X.importCACert", {
        interface: Interface,
        content: content,
      }).then(function (a) {
        return a;
      });
    },
    importClientCert: (Interface: unknown, content: unknown) => {
      return this.send("Wire802_1X.importClientCert", {
        interface: Interface,
        content: content,
      }).then(function (a) {
        return a;
      });
    },
    importClientKey: (Interface: unknown, content: unknown) => {
      return this.send("Wire802_1X.importClientKey", {
        interface: Interface,
        content: content,
      }).then(function (a) {
        return a;
      });
    },
  };
}
