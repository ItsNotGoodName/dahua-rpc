import { RPCBase } from "../rpcBase";

export function DevAudioDetect(this: RPCBase) {
  const instance = this.sendSetup("devAudioDetect.factory.instance");
  return {
    instance,
    getCaps: (channel?: string) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send<{
          caps: {
            VolumeDetect: boolean;
            AnomalyDetect: boolean;
            MutationDetect: boolean;
            InfantCryDetect?: boolean;
            AnomalySensitiveRange: [number, number];
            MutationThreoldRange: [number, number];
          };
        }>("devAudioDetect.getCaps", void 0, { object: a.result }).then((a) => {
          return a.params.caps;
        });
      });
    },
    detachDetectData: (channel?: number, proc?: string) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send(
          "devAudioDetect.detachDetectData",
          { proc: proc },
          { object: a.result }
        );
      });
    },
    attachDetectData: (channel?: number, proc?: string) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send(
          "devAudioDetect.attachDetectData",
          { proc: proc },
          { object: a.result }
        );
      });
    },
  };
}
