import { RPCBase } from "../rpcBase";

export function RemoteUpgrader(this: RPCBase) {
  return {
    selectDevList: (list: unknown) => {
      return this.send("RemoteUpgrader.selectDevList", { list: list }).then(
        function (a) {
          return a.params ? a.params : a;
        }
      );
    },
    getAllStates: () => {
      return this.send("RemoteUpgrader.getAllStates").then(function (a) {
        return a.params ? a.params : a;
      });
    },
    cancel: () => {
      return this.send("RemoteUpgrader.cancel", { list: ["All"] }).then(
        function (a) {
          return a.params ? a.params : a;
        }
      );
    },
  };
}
