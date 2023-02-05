import { RPCBase } from "../rpcBase";

export function AsyncDeviceManager(this: RPCBase) {
  return {
    getDeviceInfoEx: (a: object[] | object | null) => {
      return this.send("AsyncDeviceManager.getDeviceInfoEx", a).then(function (
        a
      ) {
        return a.params;
      });
    },
    removeDevice: (a: object[] | object | null) => {
      return this.send("AsyncDeviceManager.removeDevice", a).then(function (a) {
        return a.params;
      });
    },
    addCustomDevice: (a: object[] | object | null) => {
      return this.send("AsyncDeviceManager.addCustomDevice", a).then(function (
        a
      ) {
        return a.params;
      });
    },
  };
}
