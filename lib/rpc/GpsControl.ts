import { RPCBase } from "../rpcBase";

export function GpsControl(this: RPCBase) {
  return {
    getCaps: (name?: string) => {
      return this.send("GpsControl.getCaps", { name: name || "All" }).then(
        function (a) {
          return a.params;
        }
      );
    },
    getGpsStatus: () => {
      return this.send("GpsControl.getGpsStatus").then(function (a) {
        return a.params;
      });
    },
    setWorkMode: (MODE: unknown) => {
      return this.send("GpsControl.setWorkMode", { info: { MODE: MODE } }).then(
        function (a) {
          return a.params;
        }
      );
    },
  };
}
