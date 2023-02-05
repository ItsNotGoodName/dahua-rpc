import { RPCBase } from "../rpcBase";

export function TemperCorrection(this: RPCBase) {
  return {
    adjustBlkBdyDist: (Info: {
      Index: unknown;
      BackgroundTemp: unknown;
      BlkBdyTemp: unknown;
      HoleSize: unknown;
      Distance: unknown;
    }) => {
      return this.send<{ graveAve: unknown }>(
        "TemperCorrection.adjustBlkBdyDist",
        {
          Info: {
            Index: Info.Index,
            BackgroundTemp: Info.BackgroundTemp,
            BlkBdyTemp: Info.BlkBdyTemp,
            HoleSize: Info.HoleSize,
            Distance: Info.Distance,
          },
        }
      ).then(function (a) {
        return a.params.graveAve;
      });
    },
    getNucInfo: (channel: unknown) => {
      return this.send<{ info: unknown }>("TemperCorrection.getNucInfo", {
        channel: channel,
      }).then(function (a) {
        return a.params.info;
      });
    },
    setNucInfo: (channel: unknown, info: unknown) => {
      return this.send("TemperCorrection.setNucInfo", {
        channel: channel,
        info: info,
      });
    },
    getNucStableStatus: (channel: unknown) => {
      return this.send<{ status: unknown }>(
        "TemperCorrection.getNucStableStatus",
        { channel: channel }
      ).then(function (a) {
        return a.params.status;
      });
    },
    getRmcInfo: (channel: unknown) => {
      return this.send<{ info: unknown }>("TemperCorrection.getRmcInfo", {
        channel: channel,
      }).then(function (a) {
        return a.params.info;
      });
    },
    BlkBdySampAdd: (channel: unknown, info: unknown) => {
      return this.send("TemperCorrection.BlkBdySampAdd", {
        channel: channel,
        info: info,
      });
    },
    BlkBdySampDel: (channel: unknown, info: unknown) => {
      return this.send("TemperCorrection.BlkBdySampDel", {
        channel: channel,
        info: info,
      });
    },
    checkSamp: (channel: unknown, amID: unknown) => {
      return this.send<{ info: unknown }>("TemperCorrection.checkSamp", {
        channel: channel,
        amID: amID,
      }).then(function (a) {
        return a.params.info;
      });
    },
    getRmcRes: (channel: unknown) => {
      return this.send<{ info: unknown }>("TemperCorrection.getRmcRes", {
        channel: channel,
      }).then(function (a) {
        return a.params.info;
      });
    },
    userTemperCal: (
      channel: unknown,
      objTemper: unknown,
      coordinate: unknown
    ) => {
      return this.send("TemperCorrection.userTemperCal", {
        channel: channel,
        objTemper: objTemper,
        coordinate: coordinate,
      }).then(function (a) {
        return a.params;
      });
    },
    getBadColManualParam: (channel: unknown) => {
      return this.send<{ info: unknown }>(
        "TemperCorrection.getBadColManualParam",
        { channel: channel }
      ).then(function (a) {
        return a.params.info;
      });
    },
    setBadColManualParam: (
      channel: unknown,
      Enable: unknown,
      BadCols: unknown
    ) => {
      return this.send("TemperCorrection.setBadColManualParam", {
        channel: channel,
        info: { Enable: Enable, BadCols: BadCols },
      }).then(function (a) {
        return a.params;
      });
    },
    getRadioSensorParam: (channel: unknown) => {
      return this.send<{ info: unknown }>(
        "TemperCorrection.getRadioSensorParam",
        { channel: channel }
      ).then(function (a) {
        return a.params.info;
      });
    },
    setRadioSensorParam: (channel: unknown, info: unknown) => {
      return this.send<{ info: unknown }>(
        "TemperCorrection.setRadioSensorParam",
        {
          channel: channel,
          info: info,
        }
      ).then(function (a) {
        return a.params;
      });
    },
    getHistValueDirectly: (channel: unknown) => {
      return this.send<{ info: unknown }>(
        "TemperCorrection.getHistValueDirectly",
        { channel: channel }
      ).then(function (a) {
        return a.params.info;
      });
    },
    getRadioGrayPointInfo: (
      channel: unknown,
      pointType: unknown,
      location: unknown
    ) => {
      return this.send<{ info: unknown }>(
        "TemperCorrection.getRadioGrayPointInfo",
        {
          channel: channel,
          pointType: pointType,
          location: location,
        }
      ).then(function (a) {
        return a.params.info;
      });
    },
    getThermoReceptorParam: (channel: unknown) => {
      return this.send<{ info: unknown }>(
        "TemperCorrection.getThermoReceptorParam",
        { channel: channel }
      ).then(function (a) {
        return a.params.info;
      });
    },
    getRadioGreyDiffParam: (channel: unknown, type: unknown) => {
      return this.send<{ info: unknown }>(
        "TemperCorrection.getRadioGreyDiffParam",
        {
          channel: channel,
          type: type,
        }
      ).then(function (a) {
        return a.params.info;
      });
    },
    setRadioGreyDiffParam: (
      channel: unknown,
      Type: unknown,
      GreyDiffData: unknown
    ) => {
      return this.send("TemperCorrection.setRadioGreyDiffParam", {
        channel: channel,
        info: { Type: Type, GreyDiffData: GreyDiffData },
      }).then(function (a) {
        return a.params;
      });
    },
    startAutoSaveGrayInfo: (
      channel: unknown,
      period: unknown,
      type: unknown
    ) => {
      return this.send("TemperCorrection.startAutoSaveGrayInfo", {
        channel: channel,
        period: period,
        type: type,
      }).then(function (a) {
        return a.params;
      });
    },
    getGrayInfoTable: (channel: unknown, startIndex: unknown) => {
      return this.send("TemperCorrection.getGrayInfoTable", {
        channel: channel,
        startIndex: startIndex,
        count: 100,
      }).then(function (a) {
        return a.params;
      });
    },
    setMechanismVersion: (channel: unknown, mechanismType: unknown) => {
      return this.send("TemperCorrection.setMechanismVersion", {
        channel: channel,
        mechanismType: mechanismType,
      }).then(function (a) {
        return a.params;
      });
    },
    getAutoTimerState: (channel: unknown) => {
      return this.send("TemperCorrection.getAutoTimerState", {
        channel: channel,
      }).then(function (a) {
        return a.params;
      });
    },
    clearDataAutoCollectParam: (channel: unknown) => {
      return this.send("TemperCorrection.clearDataAutoCollectParam", {
        channel: channel,
      }).then(function (a) {
        return a.params;
      });
    },
    restoreCam: (channel: unknown) => {
      return this.send("TemperCorrection.restoreCam", {
        channel: channel,
      }).then(function (a) {
        return a.result;
      });
    },
    getRicfTempMode: (channel: unknown) => {
      return this.send("TemperCorrection.getRicfTempMode", {
        channel: channel,
      }).then(function (a) {
        return a.params;
      });
    },
    setRicfTempMode: (
      channel: unknown,
      info: { TemperatureType: unknown; RicfMode: unknown }
    ) => {
      return this.send("TemperCorrection.setRicfTempMode", {
        channel: channel,
        info: {
          TemperatureType: info.TemperatureType,
          RicfMode: info.RicfMode,
        },
      }).then(function (a) {
        return a.params;
      });
    },
    setRifcBadPtAction: (Channel: unknown, OpType: unknown) => {
      return this.send("TemperCorrection.setRifcBadPtAction", {
        Channel: Channel,
        OpType: OpType,
      }).then(function (a) {
        return a.params;
      });
    },
    setRifcBadPtCheck: (Channel: unknown, CheckValue: unknown) => {
      return this.send("TemperCorrection.setRifcBadPtCheck", {
        Channel: Channel,
        CheckValue: CheckValue,
      }).then(function (a) {
        return a.params;
      });
    },
    getRealTimeBprStatus: (Channel: unknown) => {
      return this.send("TemperCorrection.getRealTimeBprStatus", {
        Channel: Channel,
      }).then(function (a) {
        return a.params;
      });
    },
    setRealTimeBprStatus: (Channel: unknown, Status: unknown) => {
      return this.send("TemperCorrection.setRealTimeBprStatus", {
        Channel: Channel,
        Status: Status,
      }).then(function (a) {
        return a.params;
      });
    },
    getCaps: (Channel: unknown) => {
      return this.send("TemperCorrection.getCaps", { Channel: Channel }).then(
        function (a) {
          return a.params;
        }
      );
    },
    getFpaNum: (Channel: unknown) => {
      return this.send("TemperCorrection.getFpaNum", { Channel: Channel }).then(
        function (a) {
          return a.params;
        }
      );
    },
    setFpaNum: (Channel: unknown, FpaNum: unknown) => {
      return this.send("TemperCorrection.setFpaNum", {
        Channel: Channel,
        FpaNum: FpaNum,
      }).then(function (a) {
        return a.params;
      });
    },
  };
}
