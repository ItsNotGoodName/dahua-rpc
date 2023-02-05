import { RPCBase } from "../rpcBase";

export function WideViewControl(this: RPCBase) {
  const instance = this.sendSetup("wideViewControl.factory.instance");
  return {
    instance,
    getCaps: (channel: unknown, capsName: unknown) => {
      return instance({ channel: channel }).then((a) => {
        return this.send<{ caps: unknown }>(
          "wideViewControl.getCaps",
          { capsName: capsName },
          { object: a.result }
        ).then(function (a) {
          return a.params.caps;
        });
      });
    },
  };
}
