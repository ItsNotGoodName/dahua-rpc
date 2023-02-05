import { RPCBase } from "../rpcBase";

export function DevVideoOutput(this: RPCBase) {
  const instance = this.sendSetup("devVideoOutput.factory.instance");
  return {
    instance,
    getCollect: () => {
      return this.send<{ channels: unknown }>(
        "devVideoOutput.factory.getCollect"
      ).then(function (a) {
        return a.params.channels;
      });
    },
    getCaps: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send<{ caps: unknown }>("devVideoOutput.getCaps", void 0, {
          object: a.result,
        }).then(function (a) {
          return a.params.caps;
        });
      });
    },
    enumModes: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send<{ modeTable: unknown }>(
          "devVideoOutput.enumModes",
          void 0,
          { object: a.result }
        ).then(function (a) {
          return a.params.modeTable;
        });
      });
    },
  };
}
