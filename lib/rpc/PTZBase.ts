import { RPCBase } from "../rpcBase";

export function PTZBase(this: RPCBase) {
  return {
    moveContinuously: (
      speed: unknown,
      timeout: unknown,
      zoomSource: unknown,
      channel?: number
    ) => {
      return this.send("ptzBase.moveContinuously", {
        speed: speed,
        timeout: timeout,
        zoomSource: zoomSource,
        channel: channel || 0,
      });
    },
    getHFovValue: (zoom?: number, channel?: number) => {
      return this.send("ptzBase.getHFovValue", {
        channel: channel || 0,
        zoom: zoom || 0,
      }).then(function (a) {
        return a.params;
      });
    },
    getCurrentFovValue: (channel?: number) => {
      return this.send("ptzBase.getCurrentFovValue", {
        channel: channel || 0,
      }).then(function (a) {
        return a.params;
      });
    },
    getFlipStatus: (channel?: number) => {
      return this.send("ptzBase.getFlipStatus", { channel: channel || 0 }).then(
        function (a) {
          return a.params;
        }
      );
    },
    autoFovCalibrate: (channel?: number) => {
      return this.send("ptzBase.autoFovCalibrate", {
        channel: channel || 0,
      }).then(function (a) {
        return a.params;
      });
    },
    getFovCalibrateStatus: (channel?: number) => {
      return this.send("ptzBase.getFovCalibrateStatus", {
        channel: channel || 0,
      }).then(function (a) {
        return a.params;
      });
    },
  };
}
