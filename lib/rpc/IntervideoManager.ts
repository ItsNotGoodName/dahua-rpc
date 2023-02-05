import { RPCBase } from "../rpcBase";

export function IntervideoManager(this: RPCBase) {
  return {
    getVersion: (Name: unknown) => {
      return this.send<{ info: object }>("IntervideoManager.getVersion", {
        Name: Name,
      }).then(function (a) {
        return a.params.info || {};
      });
    },
    getNetStatus: () => {
      return this.send<{ info: unknown }>(
        "IntervideoManager.getNetStatus"
      ).then(function (a) {
        return a.params.info;
      });
    },
  };
}
