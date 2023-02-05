import { RPCBase } from "../rpcBase";

export function UWB(this: RPCBase) {
  return {
    recvMsg: () => {
      return this.send<{ param: unknown }>("UWB.recvMsg").then(function (a) {
        return a.params.param;
      });
    },
    sendMsg: (params: object | object[] | null) => {
      return this.send("UWB.sendMsg", params).then(function (a) {
        return a.result;
      });
    },
    rebootMcu: () => {
      return this.send("UWB.rebootMcu").then(function (a) {
        return a.result;
      });
    },
    resetMcu: () => {
      return this.send("UWB.resetMcu").then(function (a) {
        return a.result;
      });
    },
  };
}
