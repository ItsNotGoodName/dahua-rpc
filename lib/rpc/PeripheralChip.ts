import { RPCBase } from "../rpcBase";

export type Type = string;

export function PeripheralChip(this: RPCBase) {
  return {
    getCaps: () => {
      return this.send<{
        caps: Array<{
          chipType?: string;
          count: number;
          model?: string;
          type: Type;
        }>;
      }>("PeripheralChip.getCaps").then(function (a) {
        return a.params.caps;
      });
    },
    getVersion: (type: Type) => {
      return this.send<{
        versions: Array<{
          hardwareVersion: string;
          isMatching: number;
          softwareVersion: string;
        }>;
      }>("PeripheralChip.getVersion", { type: type }).then(function (a) {
        return a.params.versions;
      });
    },
  };
}
