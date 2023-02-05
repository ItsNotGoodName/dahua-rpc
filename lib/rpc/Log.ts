import { RPCBase } from "../rpcBase";

export function Log(this: RPCBase) {
  return {
    startFind: (condition: unknown) => {
      return this.send<{ token: unknown }>("log.startFind", {
        condition: condition,
      }).then(function (a) {
        return a.params.token;
      });
    },
    getCount: (token: unknown) => {
      return new Promise((resolve, reject) => {
        this.send<{ count: unknown }>("log.getCount", { token: token })
          .then(function (b) {
            "number" === typeof b.params.count
              ? resolve(b.params.count)
              : reject();
          })
          .catch(reject);
      });
    },
    append: (
      type: unknown,
      detail: unknown,
      device: unknown,
      user: unknown
    ) => {
      return this.send("log.append", {
        type: type,
        detail: detail,
        device: device,
        user: user,
      }).then(function (a) {
        return a.params;
      });
    },
    doSeekFind: (token: unknown, offset: unknown, count: unknown) => {
      return this.send("log.doSeekFind", {
        token: token,
        offset: offset,
        count: count,
      }).then(function (a) {
        return a.params;
      });
    },
    stopFind: (token: unknown) => {
      return this.send("log.stopFind", { token: token });
    },
    clear: () => {
      return this.send("log.clear");
    },
  };
}
