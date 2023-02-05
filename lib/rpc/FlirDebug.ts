import { RPCBase } from "../rpcBase";

export function FlirDebug(this: RPCBase) {
  return {
    getSensorSetting: (cmd: unknown, maxoutLenth: unknown, inData: unknown) => {
      return this.send("FlirDebug.getSensorSetting", {
        cmd: cmd,
        maxOutLenth: maxoutLenth,
        inData: inData,
      }).then(function (a) {
        return a;
      });
    },
    setSensorSetting: (cmd: unknown, data: unknown) => {
      return this.send("FlirDebug.setSensorSetting", {
        cmd: cmd,
        data: data,
      }).then(function (a) {
        return a;
      });
    },
    getFFCStateInfo: () => {
      return this.send("FlirDebug.getFFCStateInfo", { params: null }).then(
        function (a) {
          return a;
        }
      );
    },
    getLastError: (maxoutLenth: unknown) => {
      return this.send("FlirDebug.getLastError", {
        maxOutLenth: maxoutLenth,
      }).then(function (a) {
        return a;
      });
    },
  };
}
