import { RPCBase } from "../rpcBase";

export type ProductDefinitions =
  | "HasPtz"
  | "IsPtzAlarm"
  | "VSP"
  | "MaxExtraStream"
  | "CameraSwitchComV"
  | "IsLocalStore"
  | "IEEE802_1X"
  | "VPN"
  | "SupportedWPS"
  | "CameraAttribute"
  | "PtzFunctionMenu"
  | "LightingControl"
  | "RainBrushControl"
  | "CifPFrameSize"
  | "AudioFileManager"
  | "LegalinfoCaps"
  | "AudioProperties"
  | "WirelessAlarm"
  | "GB28181"
  | "VolumeDetect"
  | "AnomalyDetect"
  | "MutationDetect"
  | "MajorVersion"
  | "MinorVersion"
  | "VendorAbbr"
  | "OEMVersion"
  | "Revision"
  | "TypeVersion"
  | "BuildDate"
  | "WebVersion"
  | "MaxPreRecordTime"
  | "PartSolution"
  | "PTZFunctionViaApp"
  | "IntelliTracker"
  | "VSPs"
  | "FontColour"
  | "FontBorder"
  | "SafetyAbnormalAbility"
  | "FontSize"
  | "QueryDatabase"
  | "PtzManualMotionDetect"
  | "VideoAnalyse"
  | "VideoStandards"
  | "Languages"
  | "SnapshotInterval"
  | "IsGpsInfoOsd"
  | "PtzOperationStatus"
  | "Focus"
  | "Iris"
  | "RotateResolutionLimit"
  | "EncodingResolutionLimit"
  | "SpecVer"
  | "LensControl"
  | "LensControlMix"
  | "smallPtz"
  | "FireWarning"
  | "TemperatureDifference"
  | "PresetFocusROI"
  | "IntelligentFocus"
  | "Industry"
  | "SteadyLightControl"
  | "CSCMatrixSwitch"
  | "TrackPositionLimit"
  | "AroudWifiSearch"
  | "VideoOutControlMode"
  | "CaptureSetResolution"
  | "SupportHardwarePtzDevice"
  | "AudioTalkMode"
  | "PtzDirectionCalibration"
  | "MeasureDistance"
  | "EncodePriority"
  | "PtzViewSector"
  | "SyncTime"
  | "SupportFlipTransducer"
  | "MagSensor"
  | "SIMLimit"
  | "OSDMobileState"
  | "LensZoomThermal"
  | "SupportAudioChangeVoice"
  | "EmailIntervalVisible"
  | "UWBConfig"
  | "DynamicROI"
  | "PtzRoadInfo"
  | "FaceDetection"
  | "SupportTempSensing"
  | "BFFunction"
  | "AutoFocus"
  | "StreamAuthority"
  | "SSHD"
  | "ConfigBackupFilelist"
  | "SupportedTrafficTrustList"
  | "BurningCheck"
  | "DecodeBuf"
  | "VideoInImageGird"
  | "HLSCaps"
  | "SupportCloudUpgrade"
  | "ManagerModifyPwd"
  | "SupportSetPtzTour"
  | "HighZoomPtzMoveAdaptor"
  | "LaserControl"
  | "RadioMetry"
  | "FaceAnalysis"
  | "ShutterAbnormal"
  | "IntelliFrameCaps"
  | "HotColdSpotTrace"
  | "IsProtectCover"
  | "SpecifyAreaEnhance"
  | "HasPtzMCU"
  | "IPCRecordBatchDownload"
  | "SupportShortTour"
  | "SuggestEncode"
  | "SupportMultiRTPDH"
  | "P2P"
  | "SupportShowMultiTS"
  | "PrivacyMasking"
  | "NetMode"
  | "SupportPtzFunction"
  | "AutoFocusButtonVisible"
  | "AutoFocusButtonThermal"
  | "ZoomThermal"
  | "FocusThermal"
  | "IsSimplifiedPtz"
  | "ShowPtzMoveStatus"
  | "SupportPlateDetectCfg"
  | "AudioProperty"
  | "ObjectTrack"
  | "VideoConfig"
  | "MultVideoSensor"
  | "PtzAutoMovement"
  | "IdleMotion"
  | "SupportPtzCfgImExport"
  | "PanoramaDrag"
  | "PicInPic"
  | "SFFCFunc"
  | "SupportTrafficPreSendPic"
  | "SupportMediaEncrypt"
  | "SupportCGICfg"
  | "SupportOnvifCfg"
  | "SupportGenetecCfg"
  | "SupportMobilePush"
  | "SupportFileBackupEncrypt"
  | "SystemService"
  | "SupportBitRateUnite"
  | "BlkBdySampFunc"
  | "GPS"
  | "Dhop"
  | "SupportPresetOsdTime"
  | "CameraUpdatePowerOff"
  | "SupportDHTSforRTSP"
  | "MulNetwokrDial"
  | "SupportPirMotionRegion"
  | "ThermDenoiseFunc"
  | "SupportPreceptionPlatformAccess"
  | "ObjectDetect"
  | "Gate"
  | "SupportOsdRestructure"
  | "SupportGB35114Level"
  | "SupportMutiGB"
  | "FlowStat"
  | "SupportSafetyAbnormalAlarm"
  | "IPTableFilter"
  | "AutoFovCalibrate"
  | "ThermographyFusion"
  | "Dhop"
  | "VoltageStatus"
  | "SupportPTZZoom"
  | "OsdContainer"
  | "PtzHeater"
  | "OsdPutTogether"
  | "SupportCertificateSet"
  | "SmartEncodeChangeNeedReboot"
  | "IntelliTypeMap"
  | "SupportShowGaysVersion"
  | "VideoInSceneLink"
  | "PositionSnap"
  | "SensorMaintain"
  | "AnimalFlowStat"
  | "ThermLog"
  | "SupportSerialNo"
  | "IsRicfDevice"
  | "SupportStoreEncrypt"
  | "SupportDownloadEncrypt"
  | "SupportLoginAuthCtrl"
  | "ManualSnapshot"
  | "IsRiskTipEnable"
  | "SupportAIView"
  | "AOLCaps"
  | "SupportDisableLinkage"
  | "NumberStatMult"
  | "BinocularCalibrate"
  | "SnapResolutionAdjustedMap"
  | "WideDynamic"
  | "SpliceFusionEnhancement"
  | "SpliceSetting"
  | "BiologyFunc"
  | "ConchDevice"
  | "AIViewSupportList"
  | "SupportAPView"
  | "TempBalanceThreshold"
  | "TecMultistage"
  | "ParkingSpace"
  | "ShowAlgorCalibrate"
  | "CardMachine"
  | "SupportPort5000"
  | "AIOTSupportList"
  | "PortraitDetection"
  | "TecReplaceCavity"
  | "CaliEnvTempCompense"
  | "SupportAlgorithmURLUpgrade"
  | "SmokeDetection";

export function MagicBox(this: RPCBase) {
  return {
    reboot: () => {
      return this.send("magicBox.reboot").then(function (a) {
        return a.result;
      });
    },
    needReboot: () => {
      return this.send<{ needReboot: boolean }>("magicBox.needReboot").then(
        function (a) {
          return a.params.needReboot;
        }
      );
    },
    getMainBoardCount: () => {
      return this.send<{ count: boolean }>("magicBox.getMainBoardCount").then(
        function (a) {
          return a.params.count;
        }
      );
    },
    getSerialNo: () => {
      return this.send<{ sn: string }>("magicBox.getSerialNo").then(function (
        a
      ) {
        return a.params.sn;
      });
    },
    getProductDefinition: (
      definitionOrArray: ProductDefinitions | ProductDefinitions[]
    ) => {
      return Array.isArray(definitionOrArray)
        ? this.send(
            "magicBox.getProductDefinition",
            definitionOrArray.map<{ name: string }>((a) => {
              return { name: a };
            })
          ).then(function (a) {
            return a.params;
          })
        : this.send<{ definition: string[] }>("magicBox.getProductDefinition", {
            name: definitionOrArray,
          }).then(function (a) {
            return a.params.definition;
          });
    },
    getDeviceType: () => {
      return this.send<{ type: string }>("magicBox.getDeviceType").then(
        function (a) {
          return a.params.type;
        }
      );
    },
    getMemoryInfo: () => {
      return this.send<{ free: number; total: number }>(
        "magicBox.getMemoryInfo"
      ).then(function (a) {
        return a.params;
      });
    },
    getCPUUsage: (index: number) => {
      return this.send<{ usage: number }>("magicBox.getCPUUsage", {
        index: index || 0,
      }).then(function (a) {
        return a.params.usage;
      });
    },
    getDeviceClass: () => {
      return this.send<{ type: string }>("magicBox.getDeviceClass").then(
        function (a) {
          return a.params.type;
        }
      );
    },
    getProcessInfo: () => {
      return this.send<{ info: string }>("magicBox.getProcessInfo").then(
        function (a) {
          return a.params.info;
        }
      );
    },
    getSubModules: () => {
      return this.send<{ subModules: unknown }>("magicBox.getSubModules").then(
        function (a) {
          return a.params.subModules;
        }
      );
    },
    get2DCode: (type: unknown) => {
      return this.send<{ code: unknown }>("magicBox.get2DCode", {
        type: type,
      }).then(
        function (b) {
          return new Promise(function (resolve, reject) {
            const d = b.params.code;
            d ? resolve(d) : reject("");
          });
        },
        function () {
          return "";
        }
      );
    },
    getSystemInfoNew: () => {
      return this.send<{ info: unknown }>("magicBox.getSystemInfoNew").then(
        function (a) {
          return a.params.info;
        }
      );
    },
    getHardwareVersion: () => {
      return this.send<{ version: string }>("magicBox.getHardwareVersion").then(
        function (a) {
          return a.params.version;
        }
      );
    },
    getVendor: () => {
      return this.send<{ Vendor: string }>("magicBox.getVendor").then(function (
        a
      ) {
        return a.params.Vendor;
      });
    },
    shutDown: () => {
      return this.send("magicBox.shutdown");
    },
    getHardwareType: () => {
      return this.send("magicBox.getHardwareType").then(function (a) {
        return a.params;
      });
    },
    getSoftwareVersion: () => {
      return this.send<{
        version: {
          Build?: string;
          BuildDate: string;
          SecurityBaseLineVersion: string;
          Version: string;
          WebVersion: string;
        };
      }>("magicBox.getSoftwareVersion").then(function (a) {
        return a.params;
      });
    },
    getMarketArea: () => {
      return this.send<{ AbroadInfo: string }>("magicBox.getMarketArea").then(
        function (a) {
          return a.params.AbroadInfo;
        }
      );
    },
    getAreaCode: () => {
      return this.send<{ AreaCode: number[] } | null>(
        "magicBox.getAreaCode"
      ).then(function (a) {
        return a.params;
      });
    },
  };
}
