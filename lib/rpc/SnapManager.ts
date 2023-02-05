import { RPCBase } from "../rpcBase";

export function SnapManager(this: RPCBase) {
  return {
    start: () => {
      return this.send("snapManager.start");
    },
    stop: () => {
      return this.send("snapManager.stop");
    },
    getCaps: () => {
      return this.send<{
        caps: {
          SupportSnapSchedule?: boolean;
          SupportSnapshotByJsonEvent?: boolean;
          TransferOffline?: {
            Enable: boolean;
          };
          SupportFtpPathMode?: boolean;
        };
      }>("snapManager.getCaps").then(function (a) {
        return a.params.caps;
      });
    },
    manualUploadPicture: (params: object | object[] | null) => {
      return this.send("snapManager.manualUploadPicture", params).then(
        function (a) {
          return a;
        }
      );
    },
    getOfflineUploadInfo: (TargetType: unknown) => {
      return this.send("snapManager.getOfflineUploadInfo", {
        TargetType: TargetType,
      }).then(function (a) {
        return a.params;
      });
    },
  };
}
