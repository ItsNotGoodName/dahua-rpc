import { RPCBase } from "../rpcBase";

export function DevFlashLampManager(this: RPCBase) {
  const instance = this.sendSetup("devFlashLampManager.instance");
  return {
    instance,
    getCaps: () => {
      return instance().then((a) => {
        return this.send<{ caps: unknown }>(
          "devFlashLampManager.getCaps",
          null,
          { object: a.result }
        ).then(function (a) {
          return a.params.caps;
        });
      });
    },
  };
}
