import { RPCBase } from "../rpcBase";

export function IntervideoClient(this: RPCBase) {
  return {
    getVersion: (name?: unknown) => {
      return this.send<{ info?: unknown[] }>("IntervideoClient.getVersion", {
        name: name,
      }).then(function (a) {
        return a.params.info || [];
      });
    },
  };
}
