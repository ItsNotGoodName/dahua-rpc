import { RPCBase } from "../rpcBase";

export function Gyro(this: RPCBase) {
  return {
    getData: () => {
      return this.send<{ detail: unknown }>("Gyro.getData").then(function (a) {
        return a.params.detail;
      });
    },
  };
}
