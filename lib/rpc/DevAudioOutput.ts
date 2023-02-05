import { RPCBase } from "../rpcBase";

export function DevAudioOutput(this: RPCBase) {
  const instance = this.sendSetup("devAudioOutput.factory.instance");
  return {
    instance,
    getCollect: () => {
      return this.send<{ channels: number[] }>(
        "devAudioOutput.factory.getCollect"
      ).then(function (a) {
        return a.params.channels || 0;
      });
    },
    getCaps: (channel?: number) => {
      return this.send<{ caps: unknown }>("devAudioOutput.getCaps", {
        channel: channel || 0,
      }).then(function (a) {
        return a.params.caps;
      });
    },
  };
}
