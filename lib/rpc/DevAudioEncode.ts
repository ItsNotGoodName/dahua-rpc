import { RPCBase } from "../rpcBase";

export function DevAudioEncode(this: RPCBase) {
  const instance = this.sendSetup("devAudioEncode.factory.instance");
  return {
    instance,
    getFormatCaps: (stream?: string, channel?: number) => {
      return instance({ channel: channel || 0, stream: stream || "Main" }).then(
        (a) => {
          return this.send<{
            formats: Array<{
              Compression: string;
              Depth: number;
              Frequency: number;
            }>;
          }>("devAudioEncode.getFormatCaps", void 0, {
            object: a.result,
          }).then(function (a) {
            return a.params.formats;
          });
        }
      );
    },
    getDigitalFormatCaps: (stream?: string, channel?: number) => {
      return instance({ channel: channel || 0, stream: stream || "Main" }).then(
        (a) => {
          return this.send<{
            formats: Array<{
              Compression: string;
              Depth: number;
              Frequency: number;
            } | null>;
          }>("devAudioEncode.getDigitalFormatCaps", void 0, {
            object: a.result,
          }).then(function (a) {
            return a.params.formats;
          });
        }
      );
    },
    getCaps: (stream?: string, channel?: number) => {
      return instance({ channel: channel || 0, stream: stream || "Main" }).then(
        (a) => {
          return this.send<{
            caps: {
              SupportLevel: boolean;
            };
          }>("devAudioEncode.getCaps", void 0, { object: a.result }).then(
            function (a) {
              return a.params.caps;
            }
          );
        }
      );
    },
  };
}
