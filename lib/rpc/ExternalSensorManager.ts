import { RPCBase } from "../rpcBase";

export function ExternalSensorManager(this: RPCBase) {
  return {
    getCaps: () => {
      return this.send<{ caps: unknown }>("ExternalSensorManager.getCaps").then(
        function (a) {
          return a.params.caps;
        }
      );
    },
    startFind: (condition?: unknown) => {
      return this.send("ExternalSensorManager.startFind", {
        condition: condition,
      }).then(function (a) {
        return a.params;
      });
    },
    doFind: (token: unknown, begin: unknown, count: unknown) => {
      return this.send("ExternalSensorManager.doFind", {
        token: token,
        begin: begin,
        count: count,
      }).then(function (a) {
        return a.params;
      });
    },
    stopFind: (token: unknown) => {
      return this.send("ExternalSensorManager.stopFind", { token: token }).then(
        function (a) {
          return a.params;
        }
      );
    },
    discoverLabel: (type?: string) => {
      return this.send("ExternalSensorManager.discoverLabel", {
        type: type || "Sensor",
      }).then(function (a) {
        return a.params;
      });
    },
  };
}
