import { RPCBase } from "../rpcBase";

export function DevAudioInput(this: RPCBase) {
  const instance = this.sendSetup("devAudioInput.factory.instance");
  return {
    instance,
    getCollect: () => {
      return this.send<{ channels: number[] }>(
        "devAudioInput.factory.getCollect"
      ).then(function (a) {
        return a.params.channels || 0;
      });
    },
    getCaps: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send<{
          caps: {
            BTInput?: number;
            DigitalAudio?: number;
            LineIn?: number;
            Mic?: number;
            realMic?: number;
          };
        }>("devAudioInput.getCaps", void 0, { object: a.result }).then(
          function (a) {
            return a.params.caps;
          }
        );
      });
    },
  };
}
