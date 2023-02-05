import { RPCBase } from "../rpcBase";

export function FaceBoard(this: RPCBase) {
  const instance = this.sendSetup("faceBoard.factory.instance");
  return {
    instance,
    getFanSpeedEx: (type: unknown) => {
      return instance().then((a) => {
        return this.send<{ info: unknown }>(
          "faceBoard.getFanSpeedEx",
          { type: type },
          { object: a.result }
        ).then(function (a) {
          return a.params.info;
        });
      });
    },
    getTemperatureEx: (type: unknown) => {
      return instance().then((a) => {
        return this.send<{ info: unknown }>(
          "faceBoard.getTemperatureEx",
          { type: type },
          { object: a.result }
        ).then(function (a) {
          return a.params.info;
        });
      });
    },
    getTemperature: () => {
      return instance().then((a) => {
        return this.send("faceBoard.getTemperature", void 0, {
          object: a.result,
        }).then(function (a) {
          return a.params;
        });
      });
    },
    getCaps: () => {
      return instance().then((a) => {
        return this.send<{ caps: unknown }>("faceBoard.getCaps", void 0, {
          object: a.result,
        }).then(function (a) {
          return a.params.caps;
        });
      });
    },
    getPowerState: () => {
      return instance().then((a) => {
        return this.send<{ state: unknown }>(
          "faceBoard.getPowerState",
          void 0,
          { object: a.result }
        ).then(function (a) {
          return a.params.state;
        });
      });
    },
  };
}
