import { RPCBase } from "../rpcBase";

export function AudioRecordManager(this: RPCBase) {
  return {
    getStateAll: () => {
      return this.send<{ state: unknown }>(
        "audioRecordManager.getStateAll"
      ).then(function (a) {
        return a.params.state;
      });
    },
    startChannel: (stream: unknown, path: unknown, channel?: number) => {
      return this.send("audioRecordManager.startChannel", {
        stream: stream,
        path: path,
        channel: channel || 0,
      });
    },
    stopChannel: (stream: unknown, channel?: number) => {
      return this.send("audioRecordManager.stopChannel", {
        stream: stream,
        channel: channel || 0,
      });
    },
    startName: (stream: unknown, channel?: number) => {
      return this.send<{ name: unknown }>("audioRecordManager.startName", {
        stream: stream,
        channel: channel || 0,
      }).then(function (a) {
        return a.params.name;
      });
    },
    stopName: (stream: unknown, channel?: number) => {
      return this.send<{ name: unknown }>("audioRecordManager.stopName", {
        stream: stream,
        channel: channel || 0,
      }).then(function (a) {
        return a.params.name;
      });
    },
  };
}
