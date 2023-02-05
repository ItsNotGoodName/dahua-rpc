import { RPCBase } from "../rpcBase";

export function IntelliSnapshot(this: RPCBase) {
  return {
    manualSnapByEvent: (
      EventCode: unknown,
      Times: unknown,
      Channel?: number
    ) => {
      return this.send("IntelliSnapshot.manualSnapByEvent", {
        Channel: Channel || 0,
        Info: { EventCode: EventCode, Times: Times },
      }).then(function (a) {
        return a;
      });
    },
  };
}
