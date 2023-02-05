import { RPCBase } from "../rpcBase";

export function WorkGroup(this: RPCBase) {
  const instance = this.sendSetup("workGroup.factory.instance");
  return {
    instance,
    getDirectories: (name: unknown) => {
      return instance({ name: name }).then((a) => {
        return this.send<{ list: unknown }>("workGroup.getDirectories", null, {
          object: a.result,
        }).then(function (a) {
          return a.params.list;
        });
      });
    },
  };
}
