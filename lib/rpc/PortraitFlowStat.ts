import { RPCBase } from "../rpcBase";

export function PortraitFlowStat(this: RPCBase) {
  return {
    getCaps: () => {
      return this.send<{ Caps: unknown }>("PortraitFlowStat.getCaps").then(
        function (a) {
          return a.params.Caps;
        }
      );
    },
    clearOSD: (channel?: number) => {
      return this.send("PortraitFlowStat.clearOSD", { channel: channel || 0 });
    },
  };
}
