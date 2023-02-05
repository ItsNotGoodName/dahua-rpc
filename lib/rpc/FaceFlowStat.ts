import { RPCBase } from "../rpcBase";

export function FaceFlowStat(this: RPCBase) {
  return {
    getCaps: () => {
      return this.send<{
        Caps: {
          Support: number;
        };
      }>("FaceFlowStat.getCaps").then(function (a) {
        return a.params.Caps;
      });
    },
    clearOSD: (channel?: number) => {
      return this.send("FaceFlowStat.clearOSD", { channel: channel || 0 });
    },
  };
}
