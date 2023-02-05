import { RPCBase } from "../rpcBase";

export function PtzPeripheral(this: RPCBase) {
  return {
    clearFogStrongly: (channel?: number) => {
      return this.send("PtzPeripheral.clearFogStrongly", {
        channel: channel || 0,
      });
    },
    adjustLaserAxis: (channel?: number, speed?: unknown) => {
      return this.send("PtzPeripheral.adjustLaserAxis", {
        channel: channel || 0,
        speed: speed,
      });
    },
    stopAdjustLaserAxis: (channel?: number) => {
      return this.send("PtzPeripheral.stopAdjustLaserAxis", {
        channel: channel || 0,
      });
    },
    startClearFrost: (channel?: number) => {
      return this.send("PtzPeripheral.startClearFrost", {
        channel: channel || 0,
      });
    },
    stopClearFrost: (channel?: number) => {
      return this.send("PtzPeripheral.stopClearFrost", {
        channel: channel || 0,
      });
    },
    getHeaterStateEx: (channel?: number) => {
      return this.send("PtzPeripheral.getHeaterStateEx", {
        channel: channel || 0,
      }).then(function (a) {
        return a.params;
      });
    },
    controlPtzHeater: (time: unknown, channel?: number) => {
      return this.send("PtzPeripheral.controlPtzHeater", {
        time: time,
        channel: channel || 0,
      });
    },
  };
}
