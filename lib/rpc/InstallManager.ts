import { RPCBase } from "../rpcBase";

export function InstallManager(this: RPCBase) {
  return {
    start: (appname: unknown, appid: unknown) => {
      return this.send("installManager.start", {
        appname: appname,
        appid: appid,
      });
    },
    stop: (appname: unknown, appid: unknown) => {
      return this.send("installManager.stop", {
        appname: appname,
        appid: appid,
      });
    },
    remove: (appname: unknown, appid: unknown) => {
      return this.send("installManager.remove", {
        appname: appname,
        appid: appid,
      });
    },
    getInstallProcInfo: () => {
      return this.send("installManager.getInstallProcInfo", null);
    },
    getState: () => {
      return this.send("installManager.getState", null);
    },
    getDhopBasicInfo: () => {
      return this.send("installManager.getDhopBasicInfo", null);
    },
    getAppResources: (AppName: unknown) => {
      return this.send("installManager.getAppResources", { AppName: AppName });
    },
  };
}
