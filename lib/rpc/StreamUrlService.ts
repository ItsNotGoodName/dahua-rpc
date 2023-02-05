import { RPCBase } from "../rpcBase";

export function StreamUrlService(this: RPCBase) {
  return {
    getUrls: (protocol: string, type: unknown, streamopt: unknown) => {
      return this.send("StreamUrlService.getUrls", {
        protocol: protocol,
        type: type,
        streamopt: streamopt,
      }).then(function (a) {
        return a.params;
      });
    },
  };
}
