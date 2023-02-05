import { RPCBase } from "../rpcBase";

export function LensFunc(this: RPCBase) {
  return {
    getBackFocusStatus: (channel?: number) => {
      return this.send<{ status: unknown }>("LensFunc.getBackFocusStatus", {
        channel: channel || 0,
      }).then(function (a) {
        return a.params.status;
      });
    },
    autoBackFocus: (channel?: number) => {
      return this.send("LensFunc.autoBackFocus", { channel: channel || 0 });
    },
    getDepthFieldStatus: (Channel?: number) => {
      return this.send<{ status: unknown }>("LensFunc.getDepthFieldStatus", {
        Channel: Channel || 0,
      }).then(function (a) {
        return a.params.status;
      });
    },
    adjustDepthFieldContinuously: (
      DepthFieldSpeed: unknown,
      channel?: number
    ) => {
      return this.send("LensFunc.adjustDepthFieldContinuously", {
        Channel: channel || 0,
        DepthFieldSpeed: DepthFieldSpeed,
      });
    },
    backFocusContinuously: (speed: unknown, channel?: number) => {
      return this.send("LensFunc.backFocusContinuously", {
        channel: channel || 0,
        speed: speed,
      });
    },
    backFocusAbsolutely: (focus: unknown, channel?: number) => {
      return this.send("LensFunc.backFocusAbsolutely", {
        channel: channel || 0,
        focus: focus,
      });
    },
    resetBackFocus: (channel?: number) => {
      return this.send("LensFunc.resetBackFocus", { channel: channel || 0 });
    },
    getDebugCaps: (channel?: number) => {
      return this.send("LensFunc.getDebugCaps", { channel: channel || 0 }).then(
        function (a) {
          return a.params;
        }
      );
    },
    switchDefogFilter: (switchDirection: unknown, channel?: number) => {
      return this.send("LensFunc.switchDefogFilter", {
        channel: channel || 0,
        switchDirection: switchDirection,
      });
    },
    twoPowerLens: (enable: unknown, channel?: number) => {
      return this.send("LensFunc.twoPowerLens", {
        channel: channel || 0,
        enable: enable,
      });
    },
    getLensPMSamplingValue: (channel?: number) => {
      return this.send("LensFunc.getLensPMSamplingValue", {
        channel: channel || 0,
      });
    },
    getLensInfo: (Channel?: number) => {
      return this.send<{ Info: unknown }>("LensFunc.getLensInfo", {
        Channel: Channel || 0,
      }).then(function (a) {
        return a.params.Info;
      });
    },
    adjustFocusRel: (CmdInfo: unknown, Channel?: number) => {
      return this.send("LensFunc.adjustFocusRel", {
        Channel: Channel || 0,
        CmdInfo: CmdInfo,
      });
    },
    adjustDepthField: (DepthField: unknown, Channel?: number) => {
      return this.send("LensFunc.adjustDepthField", {
        Channel: Channel || 0,
        DepthField: DepthField,
      });
    },
    autoAdjustDepthField: (Channel?: number) => {
      return this.send("LensFunc.autoAdjustDepthField", {
        Channel: Channel || 0,
      });
    },
    adjustAngleContinuously: (
      Channel?: number,
      Direction?: unknown,
      Velocity?: unknown
    ) => {
      return this.send("LensFunc.adjustAngleContinuously", {
        Channel: Channel || 0,
        Direction: Direction,
        Velocity: Velocity,
      });
    },
    stopAdjustingAngle: (Channel?: number) => {
      return this.send("LensFunc.stopAdjustingAngle", {
        Channel: Channel || 0,
      });
    },
    getCaps: (Channel?: number) => {
      return this.send<{ Caps: unknown }>("LensFunc.getCaps", {
        Channel: Channel || 0,
      }).then(function (a) {
        return a.params.Caps;
      });
    },
    correctScene: (
      Channel?: number,
      Type?: unknown,
      Direction?: unknown,
      Step?: unknown,
      Mode?: unknown
    ) => {
      return this.send("LensFunc.correctScene", {
        Channel: Channel || 0,
        Type: Type,
        Direction: Direction,
        Step: Step,
        Mode: Mode || 0,
      });
    },
  };
}
