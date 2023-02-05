import { RPCBase } from "../rpcBase";

export function CommPort(this: RPCBase) {
  const instance = this.sendSetup("commPort.factory.instance");
  return {
    instance,
    getProtocolList: () => {
      return instance().then(
        (a) => {
          return this.send<{ list: unknown }>(
            "commPort.getProtocolList",
            void 0,
            {
              object: a.result,
            }
          ).then(function (a) {
            return a.params.list;
          });
        },
        () => {
          return this.send<{ list: unknown }>("commPort.getProtocolList").then(
            function (a) {
              return a.params.list;
            }
          );
        }
      );
    },
  };
}
