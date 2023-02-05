/* eslint-disable @typescript-eslint/no-explicit-any */
import { RPCBase } from "../rpcBase";

export type Table<U> = {
  id: number;
  params: { table: U };
  result: boolean;
};

export type Key = keyof Config;

export type Config = {
  MediaEncrypt: {
    PrivateMediaEncrypt: {
      KeyFrameEncrypt: {
        Enable: boolean;
        VKUpdateTime: number;
      };
    };
    RTSPOverTls: {
      Enable: boolean;
    };
  };
  AutoMaintain: unknown;
  Network: unknown;
  Mobile: unknown;
  PPPoE: unknown;
  IPv6: unknown;
  ARP: unknown;
  Ping: unknown;
  DVRIP: unknown;
  Web: unknown;
  RTSP: {
    Enable: boolean;
    Port: number;
    RTP: {
      EndPort: number;
      StartPort: number;
    };
  };
  Https: unknown;
  UserGlobal: unknown;
  DDNS: unknown;
  AccessFilter: unknown;
  Email: {
    Address: string;
    Anonymous: boolean;
    AttachEnable: boolean;
    Authentication: boolean;
    CustomTitle: Array<unknown>;
    Enable: boolean;
    HealthReport: {
      Enable: boolean;
      Interval: number;
    };
    OnlyAttachment: boolean;
    Password: string;
    Port: number;
    Receivers: Array<string>;
    SendAddress: string;
    SendInterv: number;
    SslEnable: boolean;
    Title: string;
    TlsEnable: boolean;
    UserName: string;
  };
  UPnP: unknown;
  SNMP: unknown;
  Bonjour: {
    Enable: boolean;
    Name: string;
  };
  Multicast: unknown;
  Wire802_1X: unknown;
  Qos: unknown;
  WMM: unknown;
  WLan: unknown;
  Wireless: unknown;
  AlarmServer: unknown;
  MacConflict: unknown;
  StorageNotExist: {
    Enable: boolean;
    EventHandler: {
      AlarmOut: number;
      AlarmOutChannels: Array<number>;
      AlarmOutEnable: boolean;
      AlarmOutLatch: number;
      BeepEnable: boolean;
      Dejitter: number;
      Delay: number;
      ExAlarmOut: number;
      ExAlarmOutChannels: Array<number>;
      ExAlarmOutEnable: boolean;
      LogEnable: boolean;
      MailEnable: boolean;
      Matrix: number;
      MatrixChannels: Array<number>;
      MatrixEnable: boolean;
      MessageEnable: boolean;
      PtzLink: Array<[string, number]>;
      PtzLinkEnable: boolean;
      Record: number;
      RecordChannels: Array<number>;
      RecordEnable: boolean;
      RecordLatch: number;
      Snapshot: number;
      SnapshotChannels: Array<number>;
      SnapshotEnable: boolean;
      TimeSection: Array<Array<string>>;
      TipEnable: boolean;
      Tour: number;
      TourChannels: Array<number>;
      TourEnable: boolean;
      VoiceEnable: boolean;
    };
  };
  StorageLowSpace: unknown;
  StorageFailure: unknown;
  NetAbort: unknown;
  IPConflict: unknown;
  LoginFailureAlarm: unknown;
  Alarm: unknown;
  RemoteCtrl: unknown;
  ExAlarm: unknown;
  ArmMode: unknown;
  AlarmOut: unknown;
  Encode: Array<{
    ExtraFormat: Array<{
      Audio: {
        Bitrate?: number;
        Channels?: Array<number>;
        Compression: string;
        Depth?: number;
        Frequency?: number;
        Pack?: string;
      };
      AudioEnable: boolean;
      Video: {
        BitRate: number;
        BitRateControl: string;
        Compression: string;
        CustomResolutionName?: string;
        FPS?: number;
        GOP?: number;
        Height: number;
        Pack?: string;
        Priority?: number;
        Profile: string;
        Quality?: number;
        QualityRange?: number;
        SVCTLayer?: number;
        Width: number;
      };
      VideoEnable: boolean;
    }>;
    MainFormat: Array<{
      Audio: {
        Bitrate: number;
        Channels: Array<number>;
        Compression: string;
        Depth: number;
        Frequency: number;
        Mode: number;
        Pack: string;
      };
      AudioEnable: boolean;
      Video: {
        BitRate: number;
        BitRateControl: string;
        Compression: string;
        CustomResolutionName: string;
        FPS: number;
        GOP: number;
        Height: number;
        Pack: string;
        Priority: number;
        Profile: string;
        Quality: number;
        QualityRange: number;
        SVCTLayer: number;
        SvacSVCLayer?: {
          SpaceDomainSVCLayer: number;
          TimeDomainSVCLayer: number;
        };
        Width: number;
      };
      VideoEnable: boolean;
    }>;
    SnapFormat: Array<{
      Audio: {
        Bitrate: number;
        Compression: string;
        Depth: number;
        Frequency: number;
        Pack: string;
      };
      AudioEnable: boolean;
      Video: {
        BitRate: number;
        BitRateControl: string;
        Compression: string;
        CustomResolutionName: string;
        FPS: number;
        GOP: number;
        Height: number;
        Pack: string;
        Priority: number;
        Profile: string;
        Quality: number;
        QualityRange: number;
        SVCTLayer: number;
        Width: number;
      };
      VideoEnable: boolean;
    }>;
  }>;
  VideoWaterMark: unknown;
  AudioInputVolume: unknown;
  AudioOutputVolume: unknown;
  AudioInDenoise: unknown;
  AudioInput: Array<{
    AudioSource: "Mic" | string;
  }>;
  VideoWidget: unknown;
  ChannelTitle: unknown;
  VideoWidgetNumberStat: unknown;
  VideoInOptions: unknown;
  VideoColor: unknown;
  VideoInPreviewOptions: unknown;
  VideoInDefog: unknown;
  VideoImageControl: Array<{
    Flip: boolean;
    Freeze: boolean;
    Mirror: boolean;
    Rotate90: number;
    Stable: number;
  }>;
  VideoInSharpness: unknown;
  VideoInExposure: unknown;
  VideoInDenoise: unknown;
  VideoInIRExposure: unknown;
  VideoInBacklight: unknown;
  VideoInWhiteBalance: unknown;
  VideoInDayNight: unknown;
  VideoInMode: Array<{
    Config: Array<number>;
    Mode: number;
    TimeSection: Array<Array<string>>;
  }>;
  MotionDetect: unknown;
  BlindDetect: unknown;
  UnFocusDetect: unknown;
  AudioDetect: unknown;
  LossDetect: unknown;
  MovedDetect: unknown;
  VideoAnalyseRule: unknown;
  VideoAnalyseGlobal: unknown;
  VideoAnalyseModule: unknown;
  TrafficSnapshot: unknown;
  Holiday: unknown;
  Record: unknown;
  Snap: unknown;
  RecordStoragePoint: unknown;
  MediaGlobal: unknown;
  RecordMode: unknown;
  StorageGroup: unknown;
  NAS: unknown;
  StorageGlobal: unknown;
  Ptz: unknown;
  General: unknown;
  Locales: unknown;
  NTP: {
    Address: string;
    Enable: boolean;
    Port: number;
    TimeZone: number;
    TimeZoneDesc: string;
    UpdatePeriod: number;
  };
  VideoEncodeROI: unknown;
  VideoInFocus: unknown;
  VideoInZoom: unknown;
  VideoInColor: unknown;
  NetAlarm: unknown;
  ExAlarmOut: unknown;
  Sound: unknown;
  SmartEncode: Array<{ Enable: boolean }>;
  Comm: unknown;
  Lighting: unknown;
  VideoOut: unknown;
  DeviceInfo: unknown;
  EmergencyRecordForPull: unknown;
  EncodeAuth: unknown;
  EncodeEncrypt: Array<{
    ExtraFormat: Array<{
      Audio: {
        Bitrate?: number;
        Channels?: Array<number>;
        Compression: string;
        Depth?: number;
        Frequency?: number;
        Pack?: string;
      };
      AudioEnable: boolean;
      Video: {
        BitRate: number;
        BitRateControl: string;
        Compression: string;
        CustomResolutionName?: string;
        FPS?: number;
        GOP?: number;
        Height: number;
        Pack?: string;
        Priority?: number;
        Profile: string;
        Quality?: number;
        QualityRange?: number;
        SVCTLayer?: number;
        Width: number;
      };
      VideoEnable: boolean;
    }>;
    MainFormat: Array<{
      Audio: {
        Bitrate: number;
        Channels: Array<number>;
        Compression: string;
        Depth: number;
        Frequency: number;
        Mode: number;
        Pack: string;
      };
      AudioEnable: boolean;
      Video: {
        BitRate: number;
        BitRateControl: string;
        Compression: string;
        CustomResolutionName: string;
        FPS: number;
        GOP: number;
        Height: number;
        Pack: string;
        Priority: number;
        Profile: string;
        Quality: number;
        QualityRange: number;
        SVCTLayer: number;
        SvacSVCLayer?: {
          SpaceDomainSVCLayer: number;
          TimeDomainSVCLayer: number;
        };
        Width: number;
      };
      VideoEnable: boolean;
    }>;
    SnapFormat: Array<{
      Audio: {
        Bitrate: number;
        Compression: string;
        Depth: number;
        Frequency: number;
        Pack: string;
      };
      AudioEnable: boolean;
      Video: {
        BitRate: number;
        BitRateControl: string;
        Compression: string;
        CustomResolutionName: string;
        FPS: number;
        GOP: number;
        Height: number;
        Pack: string;
        Priority: number;
        Profile: string;
        Quality: number;
        QualityRange: number;
        SVCTLayer: number;
        Width: number;
      };
      VideoEnable: boolean;
    }>;
  }>;
  IntelliTrackScene: unknown;
  Language: unknown;
  MediaFileReaderGlobal: unknown;
  NetAccessPriority: unknown;
  PrivacyMasking: unknown;
  StorageQuota: unknown;
  Talkback: unknown;
  TwoRefEncode: unknown;
  VideoInFaceAutoExposure: unknown;
  VideoStandard: "NTSC" | "PAL" | string;
  WorkGroupMode: unknown;
  OSDSysAbnormal: unknown;
  T2UServer: unknown;
  VideoWidget2: unknown;
};

export function ConfigManager(this: RPCBase) {
  function parseArray(
    nameOrArray: string | string[],
    channelOrArray?: number | number[],
    onlyLocal?: boolean
  ) {
    void 0 == onlyLocal && (onlyLocal = !1);
    let obj: any = {};
    return (
      Array.isArray(nameOrArray)
        ? ((obj = []),
          nameOrArray.forEach((name, index) => {
            const g: any = { name: name };
            Array.isArray(channelOrArray)
              ? ((g.channel = channelOrArray[index]), (g.onlyLocal = onlyLocal))
              : typeof channelOrArray == "number" &&
                ((g.channel = channelOrArray), (g.onlyLocal = onlyLocal)),
              obj.push(g);
          }))
        : Array.isArray(channelOrArray)
        ? ((obj = []),
          channelOrArray.forEach((channel) => {
            obj.push({
              name: nameOrArray,
              channel: channel,
              onlyLocal: onlyLocal,
            });
          }))
        : ((obj = { name: nameOrArray }), typeof channelOrArray == "number") &&
          ((obj.channel = channelOrArray), (obj.onlyLocal = onlyLocal)),
      obj
    );
  }

  function parseTableArray(
    nameOrArray: string | string[],
    table: any,
    channel?: number,
    option?: any
  ) {
    let f: any = {};
    return (
      Array.isArray(nameOrArray)
        ? ((f = []),
          nameOrArray.forEach((name, index) => {
            const h: any = {
              name: name,
              table: table[index],
              options: option || [],
            };
            Array.isArray(channel)
              ? (h.channel = channel[index])
              : typeof channel == "number" && (h.channel = channel),
              f.push(h);
          }))
        : Array.isArray(channel)
        ? ((f = []),
          channel.forEach((d, index) => {
            f.push({
              name: nameOrArray,
              table: table[index],
              channel: d,
              options: option || [],
            });
          }))
        : ((f = { name: nameOrArray, table: table, options: option || [] }),
          typeof channel == "number" && (f.channel = channel)),
      f
    );
  }

  type WrapTableResponse<Names extends [...unknown[]]> = Names extends [
    infer Head,
    ...infer Tail
  ]
    ? [
        Table<Head extends Key ? Config[Head] : unknown>,
        ...WrapTableResponse<Tail>
      ]
    : [];

  const getConfig: // Get multiple configs on a channel
  (<Names extends Key[]>(
    nameArray: [...Names],
    channel?: number,
    onlyLocal?: boolean
  ) => Promise<WrapTableResponse<Names>>) &
    // Get a config on a channel
    (<Name extends Key>(
      name: Name,
      channel?: number,
      onlyLocal?: boolean
    ) => Promise<Config[Name]>) &
    // Get a config on multiple channels
    (<Name extends Key>(
      name: Name,
      channelArray: number[],
      onlyLocal?: boolean
    ) => Promise<Array<Table<Config[Name]>>>) = <T>(
    nameOrArray: string | string[],
    channelOrArray?: number | number[],
    onlyLocal?: boolean
  ): Promise<T> => {
    return this.send<{ table: any }>(
      "configManager.getConfig",
      parseArray(nameOrArray, channelOrArray, onlyLocal)
    ).then(function (b) {
      return Array.isArray(nameOrArray) || Array.isArray(channelOrArray)
        ? b.params
        : b.params.table;
    });
  };

  const getDefault: // Get default multiple configs on a channel
  (<Names extends Key[]>(
    nameArray: [...Names],
    channel?: number,
    _?: null,
    secure?: boolean
  ) => Promise<WrapTableResponse<Names>>) &
    // Get a default config on a channel
    (<Name extends Key>(
      name: Name,
      channel?: number,
      _?: null,
      secure?: boolean
    ) => Promise<Config[Name]>) &
    // Get a default config on multiple channels
    (<Name extends Key>(
      name: Name,
      channelArray: number[],
      _?: null,
      secure?: boolean
    ) => Promise<Array<Table<Config[Name]>>>) = <T>(
    nameOrArray: string | string[],
    channelOrArray?: number | number[],
    _?: null,
    secure?: boolean
  ): Promise<T> => {
    secure &&
      (() => {
        throw "secure send not implemented";
      })();
    return this.send<{ table: any }>(
      "configManager.getDefault",
      parseArray(nameOrArray, channelOrArray)
    ).then(function (b) {
      return Array.isArray(nameOrArray) || Array.isArray(channelOrArray)
        ? b.params
        : b.params.table;
    });
  };

  type WrapTable<Names extends [...unknown[]]> = Names extends [
    infer Head,
    ...infer Tail
  ]
    ? [Head extends Key ? Config[Head] : unknown, ...WrapTable<Tail>]
    : [];

  type UpdateResponse = { options: unknown };

  const setConfig: // Set multiple configs on a channel
  (<Names extends Key[]>(
    nameArray: [...Names],
    table: WrapTable<Names>,
    channel?: number,
    onlyLocal?: boolean
  ) => Promise<unknown>) &
    // Set a config on a channel
    (<Name extends Key>(
      name: Name,
      table: Config[Name],
      channel?: number,
      onlyLocal?: boolean
    ) => Promise<unknown>) = <T>(
    nameOrArray: string | string[],
    table: T,
    channel?: number,
    onlyLocal?: boolean
  ) => {
    return this.send<UpdateResponse>(
      "configManager.setConfig",
      parseTableArray(nameOrArray, table, channel, onlyLocal)
    ).then(function (c) {
      return Array.isArray(nameOrArray) ? c.params : c.params.options;
    });
  };

  const restore: (names: Key[], options?: any) => Promise<unknown> = (
    names: string[],
    options?: any
  ) => {
    return this.send<UpdateResponse>("configManager.restore", {
      names: names,
      options: options || [],
    }).then(function (a) {
      return a.params.options;
    });
  };

  const restoreExcept: (names: Key[], options?: any) => Promise<unknown> = (
    names: string[],
    options?: any
  ) => {
    return this.send<UpdateResponse>("configManager.restoreExcept", {
      names: names,
      options: options,
    }).then(function (a) {
      return a.params.options;
    });
  };

  return {
    /**
     * Get config by the given config name or names.
     */
    getConfig,
    /**
     * Set config by the given config name or names.
     */
    setConfig,
    /**
     * Get default config by the given config name or names.
     */
    getDefault,
    setTemporaryConfig: (
      nameOrArray: string | string[],
      table: any,
      channel: number,
      onlyLocal: boolean | number
    ) => {
      return this.send<UpdateResponse>(
        "configManager.setTemporaryConfig",
        parseTableArray(nameOrArray, table, channel, onlyLocal)
      ).then(function (c) {
        return Array.isArray(nameOrArray) ? c.params : c.params.options;
      });
    },
    restoreTemporaryConfig: (
      arrayOrName: string[] | string,
      channel: number
    ) => {
      return this.send<UpdateResponse>(
        "configManager.restoreTemporaryConfig",
        parseArray(arrayOrName, channel)
      ).then(function (b) {
        return Array.isArray(arrayOrName) ? b.params : b.params.options;
      });
    },
    /**
     * Restore configs by the given config names.
     */
    restore,
    /**
     * Restore everything EXCEPT the given config names. BE CAREFUL AS THIS WIPES EVERY CONFIG EXCEPT THE ONES YOU SPECIFY.
     */
    restoreExcept,
    deleteFile: () => {
      return this.send("configManager.deleteFile");
    },
    setChnlConfig: (
      name: string,
      table: any,
      channel: number,
      options: any
    ) => {
      return (
        (options = options || []),
        this.send<UpdateResponse>("configManager.setChannelConfig", {
          name: name,
          table: table,
          channels: channel,
          options: options,
        }).then(function (a) {
          return a.params.options || [];
        })
      );
    },
    saveFile: () => {
      return this.send("configManager.saveFile");
    },
  };
}
