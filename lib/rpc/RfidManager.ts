import { RPCBase } from "../rpcBase";

export function RfidManager(this: RPCBase) {
  return {
    getSignalThreshold: () => {
      return this.send<{ signalThreshold: unknown }>(
        "RfidManager.getSignalThreshold"
      ).then(function (a) {
        return a.params.signalThreshold;
      });
    },
    setSignalThreshold: (signalThreshold: unknown) => {
      return this.send("RfidManager.setSignalThreshold", {
        signalThreshold: signalThreshold,
      }).then(function (a) {
        return a.params;
      });
    },
    getVersion: () => {
      return this.send<{ version: unknown }>("RfidManager.getVersion").then(
        function (a) {
          return a.params.version;
        }
      );
    },
    getReceiverID: () => {
      return this.send<{ receiverID: unknown }>(
        "RfidManager.getReceiverID"
      ).then(function (a) {
        return a.params.receiverID;
      });
    },
  };
}
