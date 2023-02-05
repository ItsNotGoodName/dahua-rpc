import { RPCBase } from "../rpcBase";

export function GB35114Encrypt(this: RPCBase) {
  return {
    getCurrentVKEKInfo: (Channel?: unknown) => {
      return this.send("GB35114Encrypt.getCurrentVKEKInfo", {
        Channel: Channel || 0,
      }).then(function (a) {
        return a.params;
      });
    },
    getPastVKEKInfo: (StartTime: unknown, StopTime: unknown) => {
      return this.send("GB35114Encrypt.getPastVKEKInfo", {
        StartTime: StartTime,
        StopTime: StopTime,
      }).then(function (a) {
        return a.params;
      });
    },
    attachVKEKUpdate: () => {
      return this.send<{ SID: unknown }>(
        "GB35114Encrypt.attachVKEKUpdate"
      ).then(function (a) {
        return a.params.SID;
      });
    },
    detachVKEKUpdate: (SID: unknown) => {
      return this.send("GB35114Encrypt.detachVKEKUpdate", { SID: SID }).then(
        function (a) {
          return a;
        }
      );
    },
  };
}
