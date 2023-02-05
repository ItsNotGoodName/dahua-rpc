import { RPCBase } from "../rpcBase";

export function Storage(this: RPCBase) {
  const instance = this.sendSetup("storage.getDevice");
  const getDevice = (name: string) => {
    return this.send("storage.getDevice", { name: name }).then(function (a) {
      return a.result;
    });
  };

  return {
    instance,
    getCaps: () => {
      return this.send<{ caps: unknown }>("storage.getCaps").then(function (a) {
        return a.params.caps;
      });
    },
    testNAS: (a: unknown) => {
      return this.send("storage.testNAS", { NAS: a }).then(function (a) {
        return a.result;
      });
    },
    getPortInfo: () => {
      return this.send<{ info?: unknown }>("storage.getPortInfo").then(
        function (a) {
          return a.params.info || {};
        }
      );
    },
    getBoundTimeEx: (DiskList: unknown) => {
      return this.send<{ time?: unknown }>("storage.getBoundTimeEx", {
        DiskList: DiskList,
      }).then(function (a) {
        return a.params.time || [];
      });
    },
    getDeviceNames: () => {
      return this.send<{ list: string | null }>("storage.getDeviceNames").then(
        function (a) {
          return a.params.list;
        }
      );
    },
    getDevice,
    getDeviceInfo: (name: string) => {
      getDevice(name).then((pointer) => {
        return this.send<{ device: unknown }>("devStorage.getDeviceInfo", {
          pointer: pointer,
        }).then(function (a) {
          return a.params.device;
        });
      });
    },
    getDirectory: (path: string) => {
      return this.send("storage.getDirectory", { path: path }).then(function (
        a
      ) {
        return a.result;
      });
    },
  };
}
