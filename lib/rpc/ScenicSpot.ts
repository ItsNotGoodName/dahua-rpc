import { RPCBase } from "../rpcBase";

export function ScenicSpot(this: RPCBase) {
  return {
    getCaps: (channel?: unknown) => {
      return this.send<{ caps: unknown }>("ScenicSpot.getCaps", {
        channel: channel || 0,
      }).then(function (a) {
        return a.params.caps;
      });
    },
  };
}
