import { RPCBase } from "../rpcBase";

export function videoCalibrateServer(this: RPCBase) {
  return {
    checkCalibrate: (
      Class: unknown,
      CalibrateType: unknown,
      CheckParam: unknown,
      Channel: unknown
    ) => {
      return this.send("videoCalibrateServer.checkCalibrate", {
        Channel: Channel,
        Class: Class,
        CalibrateType: CalibrateType,
        CheckParam: CheckParam,
      }).then(function (a) {
        return a.params;
      });
    },
  };
}
