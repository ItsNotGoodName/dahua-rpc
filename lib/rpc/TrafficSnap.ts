import { RPCBase } from "../rpcBase";

export function TrafficSnap(this: RPCBase) {
  const instance = this.sendSetup("trafficSnap.factory.instance");
  return {
    instance,
    openStrobe: (openType: unknown, plateNumber: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send(
          "trafficSnap.openStrobe",
          { info: { openType: openType, plateNumber: plateNumber } },
          { object: a.result }
        ).then(function (a) {
          return a.params;
        });
      });
    },
  };
}
