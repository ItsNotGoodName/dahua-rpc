import { RPCBase } from "../rpcBase";

export function UPnPPortmap(this: RPCBase) {
  return {
    refreshUpnpRouter: () => {
      return this.send("UPnPPortmap.refreshUpnpRouter");
    },
    getUPnPStatus: () => {
      return this.send<{ status: unknown }>("UPnPPortmap.getUPnPStatus").then(
        function (a) {
          return a.params.status;
        }
      );
    },
    getRouterMapping: () => {
      return this.send<{ mapping: unknown }>(
        "UPnPPortmap.getRouterMapping"
      ).then(function (a) {
        return a.params.mapping;
      });
    },
  };
}
