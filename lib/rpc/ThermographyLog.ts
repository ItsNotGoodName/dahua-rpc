import { RPCBase } from "../rpcBase";

export function ThermographyLog(this: RPCBase) {
  const instance = this.sendSetup("log.factory.instance");
  return {
    instance,
    startFind: (condition: unknown) => {
      return instance({ type: "ThermoLog" }).then((b) => {
        return this.send<{ token: unknown }>(
          "log.startFind",
          { condition: condition },
          { object: b.result }
        ).then(function (a) {
          return a.params.token;
        });
      });
    },
    getCount: (token: unknown) => {
      return new Promise((resolve, reject) => {
        return instance({ type: "ThermoLog" }).then((c) => {
          return this.send<{ count: unknown }>(
            "log.getCount",
            { token: token },
            { object: c.result }
          )
            .then(function (b) {
              "number" === typeof b.params.count
                ? resolve(b.params.count)
                : reject();
            })
            .catch(reject);
        });
      });
    },
    doSeekFind: (token: unknown, offset: unknown, count: unknown) => {
      return instance({ type: "ThermoLog" }).then((d) => {
        return this.send(
          "log.doSeekFind",
          { token: token, offset: offset, count: count },
          { object: d.result }
        ).then(function (a) {
          return a.params;
        });
      });
    },
    stopFind: (token: unknown) => {
      return instance({ type: "ThermoLog" }).then((b) => {
        return this.send(
          "log.stopFind",
          { token: token },
          { object: b.result }
        );
      });
    },
    clear: (a?: { type?: unknown }) => {
      return instance({ type: "ThermoLog" }).then(
        a && a.type
          ? (b) => {
              return this.send(
                "log.clearByTypes",
                { Types: [a.type] },
                { object: b.result }
              ).then(function (a) {
                return a;
              });
            }
          : (a) => {
              return this.send("log.clear", { object: a.result }).then(
                function (a) {
                  return a;
                }
              );
            }
      );
    },
  };
}
