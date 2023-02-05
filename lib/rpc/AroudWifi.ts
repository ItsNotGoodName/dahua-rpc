import { RPCBase } from "../rpcBase";

export function AroudWifi(this: RPCBase) {
  return {
    getCaps: () => {
      return this.send("AroudWifi.getCaps").then(function (a) {
        return a.params;
      });
    },
    getApsInfoState: () => {
      return this.send("AroudWifi.getApsInfoState").then(function (a) {
        return a.params;
      });
    },
  };
}
