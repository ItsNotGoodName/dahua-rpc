import { RPCBase } from "../rpcBase";

export type GetCapsResponse = {
  CalibrateBoxs: Array<number>;
  ComplexSizeFilter: boolean;
  DefaultSnapMosaic2: boolean;
  FilterMask: number;
  IntelliTracker: {
    Support: boolean;
  };
  MaxCelibateAreas: number;
  MaxExcludeRegions: number;
  MaxInternalOptions: number;
  MaxModules: number;
  MaxPointOfLine: number;
  MaxPointOfRegion: number;
  MaxRules: number;
  MaxStaffs: number;
  SpecifiedObjectFilter: boolean;
  SupportedComp: Array<Array<string>>;
  SupportedObjectTypes: Array<string>;
  SupportedScene: Array<string>;
  SupportedScenes: {
    FaceDetection: {
      MaxLanes: number;
      MaxRules: number;
      SupportSnapMode: number;
      SupportedCalibrateParams: {
        Groud: {
          HorizontalStaffs: Array<number>;
          VerticalStaffs: Array<number>;
        };
        MaxCelibateAreas: number;
      };
      SupportedModuleParams: {
        Accuracy: boolean;
        AlgorithmIndex: boolean;
        Backlight: boolean;
        ContourAssistantTrack: boolean;
        DetectBalance: boolean;
        DetectRegion: boolean;
        Disturbance: boolean;
        ExcludeRegion: boolean;
        Highlight: boolean;
        MovingStep: boolean;
        ScalingFactor: boolean;
        SizeFilter: {
          MeasureMode: {
            CalibratedPixel: boolean;
            Metric: boolean;
            Pixel: boolean;
          };
        };
        Snapshot: boolean;
        ThresholdEdge: boolean;
        ThresholdUV: boolean;
        ThresholdY: boolean;
      };
      SupportedObjectTypes: unknown;
      SupportedRules: {
        FaceDetection: {
          CutoutCustomScale: {
            BodyHeightTimesRange: Array<number>;
            FaceHeightTimesRange: Array<number>;
            ImageWidthTimesRange: Array<number>;
          };
          CutoutPolicy: Array<string>;
          FaceFilterSupport: boolean;
          FeatureList: Array<string>;
          FeatureSupport: number;
          SnapPolicy: Array<string>;
          SupportedHumanFaceTypes: unknown;
          SupportedObjectTypes: Array<string>;
          TriggerPosition: boolean;
          TriggerTrack: boolean;
        };
      };
      SupportedSceneParams: {
        CameraAspect: boolean;
        Dejitter: boolean;
        HiddenDetail: boolean;
        Jitter: boolean;
      };
    };
    HeatMap: {
      MaxLanes: number;
      MaxRules: number;
      SupportSnapMode: number;
      SupportedCalibrateParams: {
        Groud: {
          HorizontalStaffs: Array<number>;
          VerticalStaffs: Array<number>;
        };
        MaxCelibateAreas: number;
      };
      SupportedModuleParams: {
        Accuracy: boolean;
        AlgorithmIndex: boolean;
        AntiDisturbance: boolean;
        Backlight: boolean;
        ContourAssistantTrack: boolean;
        DetectBalance: boolean;
        DetectRegion: boolean;
        Disturbance: boolean;
        ExcludeRegion: boolean;
        Highlight: boolean;
        MovingStep: boolean;
        ScalingFactor: boolean;
        Shadow: boolean;
        SizeFilter: {
          MeasureMode: {
            CalibratedPixel: boolean;
            Metric: boolean;
            Pixel: boolean;
          };
        };
        Snapshot: boolean;
        ThresholdEdge: boolean;
        ThresholdUV: boolean;
        ThresholdY: boolean;
      };
      SupportedObjectTypes: unknown;
      SupportedRules: {
        HeatMap: {
          SupportedObjectTypes: Array<string>;
          TriggerPosition: boolean;
          TriggerTrack: boolean;
        };
      };
      SupportedSceneParams: {
        CameraAspect: boolean;
        Dejitter: boolean;
        HiddenDetail: boolean;
        Jitter: boolean;
      };
    };
    Normal: {
      MaxLanes: number;
      MaxRules: number;
      SupportSnapMode: number;
      SupportedCalibrateParams: {
        Groud: {
          HorizontalStaffs: Array<number>;
          VerticalStaffs: Array<number>;
        };
        MaxCelibateAreas: number;
      };
      SupportedModuleParams: {
        Accuracy: boolean;
        AlgorithmIndex: boolean;
        AntiDisturbance: boolean;
        Backlight: boolean;
        ContourAssistantTrack: boolean;
        DetectBalance: boolean;
        DetectRegion: boolean;
        Disturbance: boolean;
        ExcludeRegion: boolean;
        Highlight: boolean;
        MovingStep: boolean;
        ScalingFactor: boolean;
        Shadow: boolean;
        SizeFilter: {
          MeasureMode: {
            CalibratedPixel: boolean;
            Metric: boolean;
            Pixel: boolean;
          };
        };
        Snapshot: boolean;
        ThresholdEdge: boolean;
        ThresholdUV: boolean;
        ThresholdY: boolean;
      };
      SupportedObjectTypes: unknown;
      SupportedRules: {
        CrossLineDetection: {
          SupportedObjectTypes: Array<string>;
          TriggerPosition: boolean;
          TriggerTrack: boolean;
        };
        CrossRegionDetection: {
          SupportedActions: Array<string>;
          SupportedObjectTypes: Array<string>;
          TriggerPosition: boolean;
          TriggerTrack: boolean;
        };
        LeftDetection: {
          SupportedObjectTypes: Array<string>;
          TriggerPosition: boolean;
          TriggerTrack: boolean;
        };
        MoveDetection: {
          SupportedDetectTypes: Array<string>;
          SupportedObjectTypes: Array<string>;
          TriggerPosition: boolean;
          TriggerTrack: boolean;
        };
        ParkingDetection: {
          SupportedObjectTypes: Array<string>;
          TriggerPosition: boolean;
          TriggerTrack: boolean;
        };
        RioterDetection: {
          SupportedObjectTypes: Array<string>;
          TriggerPosition: boolean;
          TriggerTrack: boolean;
        };
        TakenAwayDetection: {
          SupportedObjectTypes: Array<string>;
          TriggerPosition: boolean;
          TriggerTrack: boolean;
        };
        WanderDetection: {
          SupportedObjectTypes: Array<string>;
          TriggerPosition: boolean;
          TriggerTrack: boolean;
        };
      };
      SupportedSceneParams: {
        CameraAspect: boolean;
        Dejitter: boolean;
        HiddenDetail: boolean;
        Jitter: boolean;
        SupportDistLimit: boolean;
        SupportOverlapPercent: boolean;
        SupportTimeLimit: boolean;
      };
    };
    NumberStat: {
      CameraType: number;
      MaxLanes: number;
      MaxRules: number;
      SupportSnapMode: number;
      SupportedCalibrateParams: {
        Groud: {
          HorizontalStaffs: Array<number>;
          VerticalStaffs: Array<number>;
        };
        MaxCelibateAreas: number;
      };
      SupportedModuleParams: {
        Accuracy: boolean;
        AlgorithmIndex: boolean;
        Backlight: boolean;
        ContourAssistantTrack: boolean;
        DetectBalance: boolean;
        DetectRegion: boolean;
        Disturbance: boolean;
        ExcludeRegion: boolean;
        Highlight: boolean;
        MovingStep: boolean;
        ScalingFactor: boolean;
        SizeFilter: {
          MaxSize: Array<number>;
          MeasureMode: {
            CalibratedPixel: boolean;
            Metric: boolean;
            Pixel: boolean;
          };
          MinSize: Array<number>;
        };
        Snapshot: boolean;
        ThresholdEdge: boolean;
        ThresholdUV: boolean;
        ThresholdY: boolean;
      };
      SupportedObjectTypes: unknown;
      SupportedRules: {
        ManNumDetection: {
          DetectType: Array<number>;
          MaxRules: number;
          SupportLocalDataStore: boolean;
          SupportedObjectTypes: Array<string>;
          TriggerPosition: boolean;
          TriggerTrack: boolean;
        };
        NumberStat: {
          MaxRules: number;
          SupportLocalDataStore: boolean;
          SupportedObjectTypes: Array<string>;
          TriggerPosition: boolean;
          TriggerTrack: boolean;
        };
        QueueDetection: {
          MaxRules: number;
          SupportLocalDataStore: boolean;
          SupportedObjectTypes: Array<string>;
          TriggerPosition: boolean;
          TriggerTrack: boolean;
        };
      };
      SupportedSceneParams: {
        CameraAspect: boolean;
        Dejitter: boolean;
        HiddenDetail: boolean;
        Jitter: boolean;
      };
    };
  };
  SupportedVideoChannelType: unknown;
};

export function DevVideoAnalyse(this: RPCBase) {
  const instance = this.sendSetup("devVideoAnalyse.factory.instance");
  return {
    instance,
    getCaps: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send<{ caps: GetCapsResponse }>(
          "devVideoAnalyse.getCaps",
          void 0,
          { object: a.result }
        ).then(function (a) {
          return a.params.caps;
        });
      });
    },
    getTemplateRule: (rule: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send(
          "devVideoAnalyse.getTemplateRule",
          { rule: rule },
          { object: b.result }
        ).then(function (a) {
          return a.params;
        });
      });
    },
    testCalibrateWithScreenPoints: (
      type: unknown,
      start: unknown,
      end: unknown,
      channel?: number
    ) => {
      return instance({ channel: channel || 0 }).then((d) => {
        return this.send<{ length: unknown }>(
          "devVideoAnalyse.testCalibrateWithScreenPoints",
          { type: type, start: start, end: end },
          { object: d.result }
        ).then(function (a) {
          return a.params.length;
        });
      });
    },
    setAnalyseObject: (rule: { channel?: number; object: unknown }) => {
      return instance({ channel: rule.channel || 0 }).then(() => {
        return this.send(
          "devVideoAnalyse.setAnalyseObject",
          { channel: rule.channel, object: rule.object },
          void 0
        ).then(function (a) {
          return a;
        });
      });
    },
    getWaterLevelCalibrateInfo: (
      PresetID: number,
      RuleID?: number,
      channel?: number
    ) => {
      return instance({ channel: channel || 0 }).then((c) => {
        return this.send(
          "devVideoAnalyse.getWaterLevelCalibrateInfo",
          { PresetID: PresetID, RuleID: RuleID || 0 },
          { object: c.result }
        ).then(function (a) {
          return a.params;
        });
      });
    },
    setWaterLevelCalibrateInfo: (
      calibration: {
        PresetID: number;
        RuleID: number;
        Type: unknown;
        CalibratePoint: unknown;
      },
      channel?: number
    ) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send(
          "devVideoAnalyse.setWaterLevelCalibrateInfo",
          {
            PresetID: calibration.PresetID,
            RuleID: calibration.RuleID,
            Type: calibration.Type,
            CalibratePoint: calibration.CalibratePoint,
          },
          { object: b.result }
        ).then(function (a) {
          return a.params;
        });
      });
    },
  };
}
