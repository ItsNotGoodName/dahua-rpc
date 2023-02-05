import { RPCBase } from "../rpcBase";

export function RecordManager(this: RPCBase) {
  return {
    start: () => {
      return this.send("recordManager.start");
    },
    stop: () => {
      return this.send("recordManager.stop");
    },
    getCaps: () => {
      return this.send<{ caps: unknown }>("recordManager.getCaps").then(
        function (a) {
          return a.params.caps;
        }
      );
    },
    startChannel: (channel: unknown) => {
      return this.send("recordManager.startChannel", { channel: channel });
    },
    stopChannel: (channel: unknown) => {
      return this.send("recordManager.stopChannel", { channel: channel });
    },
    getState: (channel: unknown) => {
      return this.send<{ state?: boolean }>("recordManager.getState", {
        channel: channel,
      }).then(function (a) {
        return a.params.state || !1;
      });
    },
  };
}
