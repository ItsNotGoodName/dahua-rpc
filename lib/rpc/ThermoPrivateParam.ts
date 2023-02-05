import { RPCBase } from "../rpcBase";

export function ThermoPrivateParam(this: RPCBase) {
  return {
    getCaps: (Channel: unknown) => {
      return this.send<{ Caps: unknown }>("ThermoPrivateParam.getCaps", {
        Channel: Channel,
      }).then(function (a) {
        return a.params.Caps;
      });
    },
  };
}
