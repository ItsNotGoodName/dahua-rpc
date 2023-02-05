import { RPCBase } from "../rpcBase";

export function BlueToothDeviceManager(this: RPCBase) {
  return {
    scan: () => {
      return this.send("BlueToothDeviceManager.scan").then(function (a) {
        return a.params;
      });
    },
    getModuleState: () => {
      return this.send("BlueToothDeviceManager.getModuleState").then(function (
        a
      ) {
        return a.params;
      });
    },
    getConnectState: (slaveMac: unknown) => {
      return this.send("BlueToothDeviceManager.getConnectState", {
        slaveMac: slaveMac,
      }).then(function (a) {
        return a.params;
      });
    },
    pair: (slaveMac: unknown) => {
      return this.send("BlueToothDeviceManager.pair", {
        slaveMac: slaveMac,
      }).then(function (a) {
        return a.params;
      });
    },
    getCaps: () => {
      return this.send<{ caps: unknown }>(
        "BlueToothDeviceManager.getCaps"
      ).then(function (a) {
        return a.params.caps;
      });
    },
  };
}
