import { RPCBase } from "../rpcBase";

export function WlanManager(this: RPCBase) {
  return {
    getCaps: () => {
      return this.send("WlanManager.getCaps").then(function (a) {
        return a.params;
      });
    },
    getWlanBandType: (Name: unknown) => {
      return this.send("WlanManager.getWlanBandType", { Name: Name }).then(
        function (a) {
          return a.params;
        }
      );
    },
    getSTAInfo: (EthName: unknown, StaNum: unknown) => {
      return this.send("WlanManager.getSTAInfo", {
        EthName: EthName,
        StaNum: StaNum,
      }).then(function (a) {
        return a.params;
      });
    },
  };
}
