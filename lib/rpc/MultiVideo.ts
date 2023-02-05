import { RPCBase } from "../rpcBase";

export function MultiVideo(this: RPCBase) {
  return {
    getSpliceCaps: (channel?: number) => {
      return this.send<{ Caps: unknown }>("MultiVideo.getSpliceCaps", {
        channel: channel || 0,
      }).then(function (a) {
        return a.params.Caps;
      });
    },
  };
}
