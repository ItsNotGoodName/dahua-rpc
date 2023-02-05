import { RPCBase } from "../rpcBase";

export function VideoInAnalyse(this: RPCBase) {
  return {
    getCaps: (channel?: number) => {
      return this.send<{ caps: unknown }>("VideoInAnalyse.getCaps", {
        channel: channel || 0,
      }).then(function (a) {
        return a.params.caps;
      });
    },
    getTemplateRule: (Class: unknown, channel?: number) => {
      return this.send("VideoInAnalyse.getTemplateRule", {
        channel: channel || 0,
        class: Class,
      }).then(function (a) {
        return a.params;
      });
    },
    getTemplateGlobal: (channel?: number) => {
      return this.send("VideoInAnalyse.getTemplateGlobal", {
        channel: channel || 0,
      }).then(function (a) {
        return a.params;
      });
    },
    getTemplateModule: (Class: unknown, channel?: number) => {
      return this.send("VideoInAnalyse.getTemplateModule", {
        channel: channel || 0,
        class: Class,
      }).then(function (a) {
        return a.params;
      });
    },
    getTemplateSceneSnapShotWithRule2: (
      Class: unknown,
      Channel?: number,
      RuleType?: unknown
    ) => {
      return this.send("VideoInAnalyse.getTemplateSceneSnapShotWithRule2", {
        Channel: Channel || 0,
        Class: Class,
        RuleType: RuleType,
      }).then(function (a) {
        return a.params;
      });
    },
    getTemplateTrafficViolationCode: (Channel?: number) => {
      return this.send("VideoInAnalyse.getTemplateTrafficViolationCode", {
        Channel: Channel || 0,
      }).then(function (a) {
        return a.params;
      });
    },
    getTemplatePresetRecord: (Channel?: number) => {
      return this.send("VideoInAnalyse.getTemplatePresetRecord", {
        Channel: Channel || 0,
      }).then(function (a) {
        return a.params;
      });
    },
    getTemplatePresetImage: (Channel?: number) => {
      return this.send("VideoInAnalyse.getTemplatePresetImage", {
        Channel: Channel || 0,
      }).then(function (a) {
        return a.params;
      });
    },
    getTemplateTrafficSnapMosaic2: (Channel?: number) => {
      return this.send("VideoInAnalyse.getTemplateTrafficSnapMosaic2", {
        Channel: Channel || 0,
      }).then(function (a) {
        return a.params;
      });
    },
    getNewTemplateTrafficSnapMosaic2: (
      Chanel?: number,
      Class?: unknown,
      Rule?: unknown
    ) => {
      return this.send("VideoInAnalyse.getTemplateTrafficSnapMosaic2", {
        Channel: Chanel || 0,
        Class: Class,
        Rule: Rule,
      }).then(function (a) {
        return a.params;
      });
    },
    getTemplateSnapOSD: (Class: unknown, Channel?: number) => {
      return this.send("VideoInAnalyse.getTemplateSnapOSD", {
        Channel: Channel || 0,
        Class: Class,
      }).then(function (a) {
        return a.params;
      });
    },
    getTemplateCalibrate: (Channel?: number) => {
      return this.send("VideoInAnalyse.getTemplateCalibrate", {
        Channel: Channel || 0,
      }).then(function (a) {
        return a.params;
      });
    },
  };
}
