import { RPCBase } from "../rpcBase";

export function Upgrader(this: RPCBase) {
  const instance = this.sendSetup("upgrader.factory.instance");
  const getState = () => {
    return this.send("upgrader.getState").then(function (a) {
      return a.params;
    });
  };

  return {
    instance,
    getStateEx: () => {
      return instance()
        .then((a) => {
          return this.send("upgrader.getState", null, {
            object: a.result,
          }).then(function (a) {
            return a.params;
          });
        })
        .catch(() => getState());
    },
    getState,
    check: () => {
      return this.send("upgrader.check").then(function (a) {
        return a.params;
      });
    },
    start: () => {
      return this.send("upgrader.start").then(function (a) {
        return a.params;
      });
    },
    cancel: () => {
      return this.send("upgrader.cancel").then(function (a) {
        return a.params;
      });
    },
  };
}
