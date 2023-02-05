import { RPCBase } from "../rpcBase";

export function UpgraderInstall(this: RPCBase) {
  return {
    prepare: () => {
      return this.send("upgraderInstall.prepare", null);
    },
    appendData: (length: unknown, totalLength: unknown) => {
      return this.send("upgraderInstall.appendData", {
        length: length,
        totalLength: totalLength,
      });
    },
    cancel: () => {
      return this.send("upgraderInstall.cancel", null);
    },
    execute: (autoReboot: unknown) => {
      return this.send("upgraderInstall.execute", { autoReboot: autoReboot });
    },
    getState: () => {
      return this.send("upgraderInstall.getState", null);
    },
    start: () => {
      return this.send("upgraderInstall.start", null);
    },
  };
}
