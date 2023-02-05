import { RPCBase } from "../rpcBase";

export function DevVideoDetect(this: RPCBase) {
  const instance = this.sendSetup("devVideoDetect.factory.instance");
  return {
    instance,
    getCaps: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send<{
          caps: {
            DetectVersion: Array<string>;
            MotionColumns: number;
            MotionDetectWindow: number;
            MotionLinkPtzPattern: boolean;
            MotionLinkPtzPreset: boolean;
            MotionLinkPtzTour: boolean;
            MotionResult: boolean;
            MotionRows: number;
            SmartMotion: {
              SmartType: Array<string>;
              Support: boolean;
            };
            SupportBlind: boolean;
            SupportLoss: boolean;
            SupportMotion: boolean;
            SupportMovedDetect: boolean;
            UnFocusDetect: boolean;
          };
        }>("devVideoDetect.getCaps", void 0, { object: a.result }).then(
          function (a) {
            return a.params.caps;
          }
        );
      });
    },
    attachMotionData: (proc: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send(
          "devVideoDetect.attachMotionData",
          { proc: proc },
          { object: b.result }
        );
      });
    },
    detachMotionData: (proc: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send(
          "devVideoDetect.detachMotionData",
          { proc: proc },
          { object: b.result }
        );
      });
    },
  };
}
