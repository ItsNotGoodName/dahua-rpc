import { RPCBase } from "../rpcBase";

export function DevVariableCapsManager(this: RPCBase) {
  return {
    getFuncTypeList: () => {
      return this.send("DevVariableCapsManager.getFuncTypeList").then(function (
        a
      ) {
        return a.params;
      });
    },
    checkStart: (
      FuncType: unknown,
      Table: unknown,
      Channel?: number,
      PtzPresetID?: number
    ) => {
      return this.send("DevVariableCapsManager.checkStart", {
        FuncType: FuncType,
        Table: Table,
        Channel: Channel || 0,
        PtzPresetID: PtzPresetID || 0,
      }).then(function (a) {
        return a.params;
      });
    },
  };
}
