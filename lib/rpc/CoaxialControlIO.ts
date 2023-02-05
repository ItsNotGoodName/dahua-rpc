import { RPCBase } from "../rpcBase";

export function CoaxialControlIO(this: RPCBase) {
  return {
    getStatus: (channel?: number) => {
      return this.send<{
        WhiteLight: string;
        Speaker: string;
      }>("CoaxialControlIO.getStatus", { channel: channel || 0 }).then(
        function (a) {
          return a.params;
        }
      );
    },
    getCaps: (channel?: number) => {
      return this.send<{
        SupportControlFullcolorLight?: number;
        SupportControlLight?: number;
        SupportControlSpeaker?: number;
      }>("CoaxialControlIO.getCaps", { channel: channel || 0 }).then(function (
        a
      ) {
        return a.params;
      });
    },
    control: (info: unknown, channel?: number) => {
      return this.send("CoaxialControlIO.control", {
        channel: channel || 0,
        info: info,
      }).then(function (a) {
        return a.params;
      });
    },
  };
}
