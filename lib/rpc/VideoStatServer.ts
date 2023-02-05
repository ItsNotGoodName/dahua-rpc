import { RPCBase } from "../rpcBase";

export function VideoStatServer(this: RPCBase) {
  const instance = this.sendSetup("videoStatServer.factory.instance");
  return {
    instance,
    clearSectionStat: (
      channel?: number,
      AreaID?: number,
      PtzPresetId?: number
    ) => {
      let e: { AreaID?: number; PtzPresetId?: number } | null = {};
      return (
        void 0 !== AreaID && (e.AreaID = AreaID),
        void 0 !== PtzPresetId && (e.PtzPresetId = PtzPresetId),
        void 0 === AreaID && void 0 === PtzPresetId && (e = null),
        instance({ channel: channel || 0 }).then((a) => {
          return this.send("videoStatServer.clearSectionStat", e, {
            object: a.result,
          });
        })
      );
    },
    startFind: (condition: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send(
          "videoStatServer.startFind",
          { condition: condition },
          { object: a.result }
        ).then(function (a) {
          return a.params;
        });
      });
    },
    doFind: (
      token: unknown,
      beginNumber: unknown,
      count: unknown,
      channel?: number
    ) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send(
          "videoStatServer.doFind",
          { token: token, beginNumber: beginNumber, count: count },
          { object: a.result }
        ).then(function (a) {
          return a.params;
        });
      });
    },
    stopFind: (token: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send(
          "videoStatServer.stopFind",
          { token: token },
          { object: a.result }
        );
      });
    },
  };
}
