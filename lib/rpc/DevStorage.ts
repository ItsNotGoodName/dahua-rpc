import { RPCBase } from "../rpcBase";

export function DevStorage(this: RPCBase) {
  const instance = this.sendSetup("devStorage.factory.instance");
  return {
    instance,
    getSmartValue: (name: unknown) => {
      return instance({ name: name }).then((a) => {
        return this.send<{ values: unknown }>(
          "devStorage.getSmartValue",
          null,
          { object: a.result }
        ).then(function (a) {
          return a.params.values;
        });
      });
    },
    formatPatition: (name: unknown, part?: string, fs?: string) => {
      return instance({ name: name }).then((a) => {
        return this.send(
          "devStorage.formatPatition",
          { part: part || "", fs: fs || "" },
          { object: a.result }
        );
      });
    },
    eject: (name: unknown) => {
      return instance({ name: name }).then((a) => {
        return this.send("devStorage.eject", void 0, { object: a.result });
      });
    },
    getDeviceInfo: (name: unknown) => {
      return instance({ name: name }).then((a) => {
        return this.send<{ device: unknown }>(
          "devStorage.getDeviceInfo",
          void 0,
          { object: a.result }
        ).then(function (a) {
          return a.params.device;
        });
      });
    },
    setAsHotSpare: (
      name1: unknown,
      enable: unknown,
      global: unknown,
      name2?: string
    ) => {
      return instance({ name: name1 }).then((a) => {
        return this.send(
          "devStorage.setAsHotSpare",
          { enable: enable, global: global, name: name2 || "" },
          { object: a.result }
        );
      });
    },
    releaseDevice: (name: unknown) => {
      return instance({ name: name }).then((a) => {
        return this.send<{ values: unknown }>(
          "devStorage.releaseDevice",
          null,
          { object: a.result }
        ).then(function (a) {
          return a.params.values;
        });
      });
    },
  };
}
