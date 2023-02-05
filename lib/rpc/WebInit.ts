import { RPCBase } from "../rpcBase";

export function WebInit(this: RPCBase) {
  return {
    getCaps: () => {
      return this.send("WebInit.getCaps", void 0, void 0, "/OutsideCmd") // , !1)
        .then(function (a) {
          return a && a.params;
        });
    },
  };
}
