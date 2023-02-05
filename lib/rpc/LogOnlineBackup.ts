import { RPCBase } from "../rpcBase";

export function LogOnlineBackup(this: RPCBase) {
  return {
    getCaps: () => {
      return this.send("LogOnlineBackup.getCaps").then(function (a) {
        return a.params;
      });
    },
  };
}
