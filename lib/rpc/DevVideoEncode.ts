import { RPCBase } from "../rpcBase";

export function DevVideoEncode(this: RPCBase) {
  const instance = this.sendSetup("devVideoEncode.factory.instance");
  return {
    instance,
    getCaps: (stream?: string, channel?: number, group?: number) => {
      return instance({
        channel: channel || 0,
        group: group || 0,
        stream: stream || "Main",
      }).then((a) => {
        return this.send<{ caps: unknown }>("devVideoEncode.getCaps", void 0, {
          object: a.result,
        }).then(function (a) {
          return a.params.caps;
        });
      });
    },
    setIFrame: (stream?: string, channel?: number, group?: number) => {
      return instance({
        channel: channel || 0,
        group: group || 0,
        stream: stream || "Main",
      }).then((a) => {
        return this.send("devVideoEncode.setIFrame", void 0, {
          object: a.result,
        });
      });
    },
  };
}
