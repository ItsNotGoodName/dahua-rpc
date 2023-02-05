import { RPCBase } from "../rpcBase";

export function trafficFlowStat(this: RPCBase) {
  return {
    getCaps: () => {
      return this.send<{ caps: unknown }>("trafficFlowStat.getCaps").then(
        function (a) {
          return a.params.caps;
        }
      );
    },
    startFind: (condition: unknown) => {
      return this.send("trafficFlowStat.startFind", {
        condition: condition,
      }).then(function (a) {
        return a.params;
      });
    },
    doFind: (token: unknown, count: unknown, begin?: number) => {
      return this.send("trafficFlowStat.doFind", {
        token: token,
        count: count,
        begin: begin || 0,
      }).then(function (a) {
        return a.params;
      });
    },
    stopFind: (token: unknown) => {
      return this.send("trafficFlowStat.stopFind", { token: token });
    },
    clearStat: (
      channel?: number,
      lane?: number,
      presetID?: number,
      type?: number
    ) => {
      const e: {
        channel: number;
        lane: number;
        presetID?: number;
        type?: number;
      } = { channel: void 0 !== channel ? channel : -1, lane: lane || -1 };
      return (
        void 0 !== presetID && (e.presetID = presetID),
        void 0 !== type && (e.type = type),
        this.send("trafficFlowStat.clearStat", e).then(function (a) {
          return a.params;
        })
      );
    },
  };
}
