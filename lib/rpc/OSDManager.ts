import { RPCBase } from "../rpcBase";

export function OSDManager(this: RPCBase) {
  return {
    getCaps: () => {
      return this.send<{ caps: unknown }>("OSDManager.getCaps").then(function (
        a
      ) {
        return a.params.caps;
      });
    },
    getCustomCaps: () => {
      return this.send<{ caps: unknown }>("OSDManager.getCustomCaps").then(
        function (a) {
          return a.params.caps;
        }
      );
    },
  };
}
