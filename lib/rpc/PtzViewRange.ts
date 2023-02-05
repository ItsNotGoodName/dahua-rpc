import { RPCBase } from "../rpcBase";

export function PtzViewRange(this: RPCBase) {
  const instance = this.sendSetup("ptzViewRange.factory.instance");
  return {
    instance,
    measureDistance: (channel: unknown, screenX: unknown, screenY: unknown) => {
      return this.send("PtzViewRange.measureDistance", {
        channel: channel,
        screenX: screenX,
        screenY: screenY,
      }).then(function (a) {
        return a.params;
      });
    },
  };
}
