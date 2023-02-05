import { RPCBase } from "../rpcBase";

export function CloudUpgrader(this: RPCBase) {
  return {
    getAutoCheck: () => {
      return this.send("CloudUpgrader.getAutoCheck").then(function (a) {
        return a.params ? a.params : a;
      });
    },
    setAutoCheck: (flag: unknown) => {
      return this.send("CloudUpgrader.setAutoCheck", { flag: flag }).then(
        function (a) {
          return a.params ? a.params : a;
        }
      );
    },
    check: (way: unknown) => {
      return this.send("CloudUpgrader.check", { way: way }).then(function (a) {
        return a.params ? a.params : a;
      });
    },
    execute: (NewVersion: unknown, way: unknown) => {
      return this.send("CloudUpgrader.execute", {
        NewVersion: NewVersion,
        way: way,
      }).then(function (a) {
        return a.params ? a.params : a;
      });
    },
    getState: () => {
      return this.send<{
        Progress: number;
        State: string;
      }>("CloudUpgrader.getState").then(function (a) {
        return a.params;
      });
    },
    cancel: () => {
      return this.send("CloudUpgrader.cancel").then(function (a) {
        return a.params;
      });
    },
  };
}
