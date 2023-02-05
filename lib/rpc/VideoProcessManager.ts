import { RPCBase } from "../rpcBase";

export function VideoProcessManager(this: RPCBase) {
  return {
    getCaps: (name?: unknown, channel?: number) => {
      return this.send<{ caps: unknown }>("VideoProcessManager.getCaps", {
        name: name,
        channel: channel || 0,
      }).then(function (a) {
        return a.params.caps;
      });
    },
  };
}
