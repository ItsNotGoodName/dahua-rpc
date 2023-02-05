import { RPCBase } from "../rpcBase";

export function DevVideoInput(this: RPCBase) {
  const instance = this.sendSetup("devVideoInput.factory.instance");
  return {
    instance,
    getCollect: () => {
      return this.send<{ channels: number }>(
        "devVideoInput.factory.getCollect"
      ).then(function (a) {
        return a.params.channels || 0;
      });
    },
    getCaps: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send<{ caps: unknown }>("devVideoInput.getCaps", void 0, {
          object: a.result,
        }).then(function (a) {
          return a.params.caps;
        });
      });
    },
    getCapsEx: (channel?: number, Name?: string) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send<{ caps: unknown }>(
          "devVideoInput.getCapsEx",
          { Name: Name || "All" },
          { object: a.result }
        ).then(function (a) {
          return a.params.caps;
        });
      });
    },
    getFocusStatus: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send<{ status: unknown }>(
          "devVideoInput.getFocusStatus",
          void 0,
          {
            object: a.result,
          }
        ).then(function (a) {
          return a.params.status;
        });
      });
    },
    setCalibrateState: (State?: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send(
          "devVideoInput.setCalibrateState",
          { State: State },
          { object: b.result }
        );
      });
    },
    getVideoInStatus: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send<{ status: unknown }>(
          "devVideoInput.getVideoInStatus",
          void 0,
          {
            object: a.result,
          }
        ).then(function (a) {
          return a.params.status;
        });
      });
    },
    autoFocus: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send("devVideoInput.autoFocus", void 0, {
          object: a.result,
        });
      });
    },
    stopAutoFocus: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send("devVideoInput.stopAutoFocus", void 0, {
          object: a.result,
        });
      });
    },
    focusRegion: (mode: unknown, rect: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((c) => {
        return this.send(
          "devVideoInput.focusRegion",
          { mode: mode, rect: rect },
          { object: c.result }
        );
      });
    },
    adjustFocus: (focus: unknown, zoom: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((c) => {
        return this.send(
          "devVideoInput.adjustFocus",
          { focus: focus, zoom: zoom },
          { object: c.result }
        );
      });
    },
    adjustFocusContinuously: (
      focus: number,
      zoom: number,
      channel?: number
    ) => {
      return instance({ channel: channel || 0 }).then((c) => {
        return this.send(
          "devVideoInput.adjustFocusContinuously",
          { focus: focus, zoom: zoom },
          { object: c.result }
        );
      });
    },
    exposureRegion: (rect: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send(
          "devVideoInput.exposureRegion",
          { rect: rect },
          { object: b.result }
        );
      });
    },
    adjustIris: (open?: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send(
          "devVideoInput.adjustIris",
          { open: open },
          { object: b.result }
        );
      });
    },
    getCalibrationCoordinate: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send<{ Coordinate: unknown }>(
          "devVideoInput.getCalibrationCoordinate",
          void 0,
          {
            object: a.result,
          }
        ).then(function (a) {
          return a.params.Coordinate;
        });
      });
    },
    getImageRawBrightness: (Mode: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send<{ RawBrightness: unknown }>(
          "devVideoInput.getImageRawBrightness",
          { Mode: Mode },
          { object: b.result }
        ).then(function (a) {
          return a.params.RawBrightness;
        });
      });
    },
    getFishEyeWinInfo: (winIdSet: unknown) => {
      return this.send<{ winInfo: unknown }>(
        "devVideoInput.getFishEyeWinInfo",
        {
          winIdSet: winIdSet,
          channel: 0,
        }
      ).then(function (a) {
        return a.params.winInfo;
      });
    },
    setFishEyeEPtz: (
      winID: unknown,
      cmd: unknown,
      arg1: unknown,
      arg2: unknown,
      arg3: unknown,
      arg4: unknown,
      channel?: number
    ) => {
      return this.send("devVideoInput.setFishEyeEPtz", {
        winID: winID,
        cmd: cmd,
        arg1: arg1,
        arg2: arg2,
        arg3: arg3,
        arg4: arg4,
        channel: channel || 0,
      });
    },
    resetFocusOptions: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send("devVideoInput.resetFocusOptions", void 0, {
          object: a.result,
        });
      });
    },
    cancelTestSyncPhaseBright: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send("devVideoInput.cancelTestSyncPhaseBright", void 0, {
          object: a.result,
        });
      });
    },
    testSyncPhaseBright: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send("devVideoInput.testSyncPhaseBright", void 0, {
          object: a.result,
        });
      });
    },
    getExternalSyncState: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send<{ status: string }>(
          "devVideoInput.getExternalSyncState",
          void 0,
          {
            object: a.result,
          }
        ).then(function (a) {
          return a.params.status;
        });
      });
    },
    setVideoSource: (info: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send(
          "devVideoInput.setVideoSource",
          { info: info },
          { object: b.result }
        );
      });
    },
    getDenoiseInfo: (params: object | object[] | null, channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send("devVideoInput.getDenoiseInfo", params, {
          object: b.result,
        });
      });
    },
  };
}
