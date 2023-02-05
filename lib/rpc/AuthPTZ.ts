import { RPCBase } from "../rpcBase";

export function AuthPTZ(this: RPCBase) {
  return {
    getMoveStatus: (channel: number) => {
      return this.send("ptzBase.getMoveStatus", { channel: channel }).then(
        function (a) {
          return a.params;
        }
      );
    },
  };
}
