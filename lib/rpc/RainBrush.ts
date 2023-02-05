import { RPCBase } from "../rpcBase";

export function RainBrush(this: RPCBase) {
  return {
    moveContinuously: (interval: unknown, channel?: number) => {
      return this.send("rainBrush.moveContinuously", {
        channel: channel || 0,
        interval: interval,
      });
    },
    stopMove: (channel?: number) => {
      return this.send("rainBrush.stopMove", { channel: channel || 0 });
    },
    moveOnce: (channel?: number) => {
      return this.send("rainBrush.moveOnce", { channel: channel || 0 });
    },
    washOnce: (channel?: number) => {
      return this.send("rainBrush.washOnce", { channel: channel || 0 });
    },
    rainfallSelfCheck: (channel?: number) => {
      return this.send("rainBrush.rainfallSelfCheck", {
        channel: channel || 0,
      });
    },
  };
}
