import { RPCBase } from "../rpcBase";

export function Encode(this: RPCBase) {
  const instance = this.sendSetup("encode.factory.instance");
  return {
    instance,
    getConfigCaps: (channel: unknown, config: unknown, stream?: string) => {
      return this.send<{ caps: unknown }>("encode.getConfigCaps", {
        channel: channel,
        config: config,
        stream: stream || "All",
      }).then(function (a) {
        return a.params.caps;
      });
    },
    updateOverlayPicture: (Pictures: unknown) => {
      return this.send<{ Infos: unknown }>("encode.updateOverlayPicture", {
        Pictures: Pictures,
      }).then(function (a) {
        return a.params.Infos;
      });
    },
    getSmartCaps: (config: unknown, channel?: number) => {
      return this.send<{ caps: unknown }>("encode.getSmartCaps", {
        channel: channel || 0,
        config: config,
      }).then(function (a) {
        return a.params.caps;
      });
    },
    getCropCaps: (channel?: number) => {
      return this.send<{ caps: unknown }>("encode.getCropCaps", {
        channel: channel || 0,
      }).then(function (a) {
        return a.params.caps;
      });
    },
    getNAACaps: (channel?: number) => {
      return this.send<{ caps: unknown }>("encode.getNAACaps", {
        channel: channel || 0,
      }).then(function (a) {
        return a.params.caps;
      });
    },
    getCaps: (channel?: number) => {
      return this.send<{ caps: unknown }>("encode.getCaps", {
        channel: channel || 0,
      }).then(function (a) {
        return a.params.caps;
      });
    },
  };
}
