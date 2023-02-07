import { RPCBase } from "../rpcBase";
import { Alarm } from "./Alarm";
import { AroudWifi } from "./AroudWifi";
import { AsyncDeviceManager } from "./AsyncDeviceManager";
import { AudioRecordManager } from "./AudioRecordManager";
import { AuthPTZ } from "./AuthPTZ";
import { Backup } from "./Backup";
import { BlueToothDeviceManager } from "./BlueToothDeviceManager";
import { CertManager } from "./CertManager";
import { CloudUpgrader } from "./CloudUpgrader";
import { CoaxialControlIO } from "./CoaxialControlIO";
import { CommPort } from "./CommPort";
import { ConfigManager } from "./ConfigManager";
import { DdnsClient } from "./DdnsClient";
import { DevAudioDetect } from "./DevAudioDetect";
import { DevAudioEncode } from "./DevAudioEncode";
import { DevAudioInput } from "./DevAudioInput";
import { DevAudioOutput } from "./DevAudioOutput";
import { DevFlashLampManager } from "./DevFlashLampManager";
import { DevInit } from "./DevInit";
import { DevIntelliTracker } from "./DevIntelliTracker";
import { DevStorage } from "./DevStorage";
import { DevVariableCapsManager } from "./DevVariableCapsManager";
import { DevVideoAnalyse } from "./DevVideoAnalyse";
import { DevVideoDetect } from "./DevVideoDetect";
import { DevVideoEncode } from "./DevVideoEncode";
import { DevVideoInput } from "./DevVideoInput";
import { DevVideoOutput } from "./DevVideoOutput";
import { DigitalCertificate } from "./DigitalCertificate";
import { DockUser } from "./DockUser";
import { Encode } from "./Encode";
import { EventManager } from "./EventManager";
import { ExternalSensorManager } from "./ExternalSensorManager";
import { FaceBoard } from "./FaceBoard";
import { FaceFlowStat } from "./FaceFlowStat";
import { FaceRecognitionServer } from "./FaceRecognitionServer";
import { FileManager } from "./FileManager";
import { FlirDebug } from "./FlirDebug";
import { FontManager } from "./FontManager";
import { FtpTest } from "./FtpTest";
import { GB35114Encrypt } from "./GB35114Encrypt";
import { GpsControl } from "./GpsControl";
import { Gyro } from "./Gyro";
import { InstallManager } from "./InstallManager";
import { IntelliSnapshot } from "./IntelliSnapshot";
import { IntervideoClient } from "./IntervideoClient";
import { IntervideoManager } from "./IntervideoManager";
import { LensFunc } from "./LensFunc";
import { License } from "./License";
import { Log } from "./Log";
import { LogOnlineBackup } from "./LogOnlineBackup";
import { MagicBox } from "./MagicBox";
import { masterSlaveGroup } from "./masterSlaveGroup";
import { MediaFileFind } from "./MediaFileFind";
import { MultiVideo } from "./MultiVideo";
import { Nat } from "./Nat";
import { NetApp } from "./NetApp";
import { OSDManager } from "./OSDManager";
import { PasswdFind } from "./PasswdFind";
import { PeripheralChip } from "./PeripheralChip";
import { PortraitFlowStat } from "./PortraitFlowStat";
import { PrivacyMasking } from "./PrivacyMasking";
import { PTZ } from "./PTZ";
import { PTZBase } from "./PTZBase";
import { PtzPeripheral } from "./PtzPeripheral";
import { PtzViewRange } from "./PtzViewRange";
import { RainBrush } from "./RainBrush";
import { RecordFinder } from "./RecordFinder";
import { RecordManager } from "./RecordManager";
import { RecordUpdater } from "./RecordUpdater";
import { RemoteUpgrader } from "./RemoteUpgrader";
import { RfidManager } from "./RfidManager";
import { ScenicSpot } from "./ScenicSpot";
import { SDEncrypt } from "./SDEncrypt";
import { Security } from "./Security";
import { SnapManager } from "./SnapManager";
import { Speak } from "./Speak";
import { Storage } from "./Storage";
import { StreamUrlService } from "./StreamUrlService";
import { System } from "./System";
import { TemperCorrection } from "./TemperCorrection";
import { ThermographyLog } from "./ThermographyLog";
import { ThermoPrivateParam } from "./ThermoPrivateParam";
import { trafficFlowStat } from "./trafficFlowStat";
import { TrafficSnap } from "./TrafficSnap";
import { TrafficStatistic } from "./TrafficStatistic";
import { Upgrader } from "./Upgrader";
import { UpgraderInstall } from "./UpgraderInstall";
import { UPnPPortmap } from "./UPnPPortmap";
import { UserManager } from "./UserManager";
import { UWB } from "./UWB";
import { vehiclesDistribution } from "./vehiclesDistribution";
import { videoCalibrateServer } from "./videoCalibrateServer";
import { VideoInAnalyse } from "./VideoInAnalyse";
import { VideoProcessManager } from "./VideoProcessManager";
import { VideoStatServer } from "./VideoStatServer";
import { WebInit } from "./WebInit";
import { WideViewControl } from "./WideViewControl";
import { wire802File } from "./wire802File";
import { WlanManager } from "./WlanManager";
import { WorkDirectory } from "./WorkDirectory";
import { WorkGroup } from "./WorkGroup";

/**
 * Default RPC class that has all the modules implemented.
 */
export class RPC extends RPCBase {
  Alarm = Alarm.bind(this)();
  AroudWifi = AroudWifi.bind(this)();
  AsyncDeviceManager = AsyncDeviceManager.bind(this)();
  AudioRecordManager = AudioRecordManager.bind(this)();
  AuthPTZ = AuthPTZ.bind(this)();
  Backup = Backup.bind(this)();
  BlueToothDeviceManager = BlueToothDeviceManager.bind(this)();
  CertManager = CertManager.bind(this)();
  CloudUpgrader = CloudUpgrader.bind(this)();
  CoaxialControlIO = CoaxialControlIO.bind(this)();
  CommPort = CommPort.bind(this)();
  ConfigManager = ConfigManager.bind(this)();
  DdnsClient = DdnsClient.bind(this)();
  DevAudioDetect = DevAudioDetect.bind(this)();
  DevAudioEncode = DevAudioEncode.bind(this)();
  DevAudioInput = DevAudioInput.bind(this)();
  DevAudioOutput = DevAudioOutput.bind(this)();
  DevFlashLampManager = DevFlashLampManager.bind(this)();
  DevInit = DevInit.bind(this)();
  DevIntelliTracker = DevIntelliTracker.bind(this)();
  DevStorage = DevStorage.bind(this)();
  DevVariableCapsManager = DevVariableCapsManager.bind(this)();
  DevVideoAnalyse = DevVideoAnalyse.bind(this)();
  DevVideoDetect = DevVideoDetect.bind(this)();
  DevVideoEncode = DevVideoEncode.bind(this)();
  DevVideoInput = DevVideoInput.bind(this)();
  DevVideoOutput = DevVideoOutput.bind(this)();
  DigitalCertificate = DigitalCertificate.bind(this)();
  DockUser = DockUser.bind(this)();
  Encode = Encode.bind(this)();
  EventManager = EventManager.bind(this)();
  ExternalSensorManager = ExternalSensorManager.bind(this)();
  FaceBoard = FaceBoard.bind(this)();
  FaceFlowStat = FaceFlowStat.bind(this)();
  FaceRecognitionServer = FaceRecognitionServer.bind(this)();
  FileManager = FileManager.bind(this)();
  FlirDebug = FlirDebug.bind(this)();
  FontManager = FontManager.bind(this)();
  FtpTest = FtpTest.bind(this)();
  GB35114Encrypt = GB35114Encrypt.bind(this)();
  GpsControl = GpsControl.bind(this)();
  Gyro = Gyro.bind(this)();
  InstallManager = InstallManager.bind(this)();
  IntelliSnapshot = IntelliSnapshot.bind(this)();
  IntervideoClient = IntervideoClient.bind(this)();
  IntervideoManager = IntervideoManager.bind(this)();
  LensFunc = LensFunc.bind(this)();
  License = License.bind(this)();
  LogOnlineBackup = LogOnlineBackup.bind(this)();
  Log = Log.bind(this)();
  MagicBox = { ...MagicBoxExt.bind(this)(), ...MagicBox.bind(this)() };
  masterSlaveGroup = masterSlaveGroup.bind(this)();
  MediaFileFind = MediaFileFind.bind(this)();
  MultiVideo = MultiVideo.bind(this)();
  Nat = Nat.bind(this)();
  NetApp = NetApp.bind(this)();
  OSDManager = OSDManager.bind(this)();
  PasswdFind = PasswdFind.bind(this)();
  PeripheralChip = PeripheralChip.bind(this)();
  PortraitFlowStat = PortraitFlowStat.bind(this)();
  PrivacyMasking = PrivacyMasking.bind(this)();
  PTZBase = PTZBase.bind(this)();
  PtzPeripheral = PtzPeripheral.bind(this)();
  PTZ = PTZ.bind(this)();
  PtzViewRange = PtzViewRange.bind(this)();
  RainBrush = RainBrush.bind(this)();
  RecordFinder = RecordFinder.bind(this)();
  RecordManager = RecordManager.bind(this)();
  RecordUpdater = RecordUpdater.bind(this)();
  RemoteUpgrader = RemoteUpgrader.bind(this)();
  RfidManager = RfidManager.bind(this)();
  ScenicSpot = ScenicSpot.bind(this)();
  SDEncrypt = SDEncrypt.bind(this)();
  Security = Security.bind(this)();
  SnapManager = SnapManager.bind(this)();
  Speak = Speak.bind(this)();
  Storage = { ...StorageExt.bind(this)(), ...Storage.bind(this)() };
  StreamUrlService = StreamUrlService.bind(this)();
  System = System.bind(this)();
  TemperCorrection = TemperCorrection.bind(this)();
  ThermographyLog = ThermographyLog.bind(this)();
  ThermoPrivateParam = ThermoPrivateParam.bind(this)();
  trafficFlowStat = trafficFlowStat.bind(this)();
  TrafficSnap = TrafficSnap.bind(this)();
  TrafficStatistic = TrafficStatistic.bind(this)();
  UpgraderInstall = UpgraderInstall.bind(this)();
  Upgrader = Upgrader.bind(this)();
  UPnPPortmap = UPnPPortmap.bind(this)();
  UserManager = UserManager.bind(this)();
  UWB = UWB.bind(this)();
  vehiclesDistribution = vehiclesDistribution.bind(this)();
  videoCalibrateServer = videoCalibrateServer.bind(this)();
  VideoInAnalyse = VideoInAnalyse.bind(this)();
  VideoProcessManager = VideoProcessManager.bind(this)();
  VideoStatServer = VideoStatServer.bind(this)();
  WebInit = WebInit.bind(this)();
  WideViewControl = WideViewControl.bind(this)();
  wire802File = wire802File.bind(this)();
  WlanManager = WlanManager.bind(this)();
  WorkDirectory = WorkDirectory.bind(this)();
  WorkGroup = WorkGroup.bind(this)();
}

export function StorageExt(this: RPCBase) {
  type Response = Array<{
    Name: string;
    State: string;
    Detail: Array<{
      Path: string;
      Type: string;
      TotalBytes: number;
      UsedBytes: number;
      IsError: boolean;
    }>;
    CantHotPlug?: false;
    HealthDataFlag?: 0;
    LifePercent?: 0;
    LockState?: 0;
    Pointer?: 1;
    SDEncryptFlag?: 0;
  }>;
  return {
    getDeviceAllInfo: () => {
      return this.send("storage.factory.instance").then((a) => {
        return this.send<{ info: Response }>(
          "storage.getDeviceAllInfo",
          void 0,
          { object: a.result }
        ).then(function (a) {
          return a.params.info || a.params;
        });
      });
    },
  };
}

export function MagicBoxExt(this: RPCBase) {
  return {
    getOSInfo: () => {
      return this.send<{ info: { Type: unknown } }>("magicBox.getOSInfo").then(
        function (a) {
          return a.params.info.Type;
        }
      );
    },
    getUpTime: () => {
      return this.send<{
        info: {
          // Uptime
          Last: number;
          // IDK
          Total: number;
        };
      }>("magicBox.getUpTime").then(function (a) {
        return a.params.info;
      });
    },
  };
}
