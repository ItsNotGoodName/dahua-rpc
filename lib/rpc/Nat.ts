import { RPCBase } from "../rpcBase";

export function Nat(this: RPCBase) {
  return {
    getTurnStatus: () => {
      return this.send<{ Status: unknown }>("Nat.getTurnStatus").then(function (
        a
      ) {
        return a.params.Status;
      });
    },
    createP2PChannel: (Info: unknown) => {
      return this.send<{ Info: unknown }>("Nat.createP2PChannel", {
        Info: Info,
      }).then(function (a) {
        return a.params.Info;
      });
    },
    getTurnStatusByIndex: (params: object | object[] | null) => {
      return this.send<{ Status: unknown }>(
        "Nat.getTurnStatusByIndex",
        params
      ).then(function (a) {
        return a.params.Status;
      });
    },
  };
}
