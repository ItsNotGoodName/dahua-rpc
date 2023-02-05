import { RPCBase } from "../rpcBase";

export function PTZ(this: RPCBase) {
  const _getSeq = () => {
    const a = this.getSession()
        .toString()
        .replace(/[^0-9]/gi, ""),
      c = parseInt(a).toString(2).slice(-24),
      d = ("00000000" + b.toString(2)).slice(-8);
    return (b = (b + 1) % 256), parseInt(c + d, 2);
  };

  const instance = this.sendSetup("ptz.factory.instance");
  let b = 0;

  return {
    instance,
    start: async (
      code: unknown,
      arg1: unknown,
      arg2: unknown,
      arg3: unknown,
      arg4: unknown,
      channel: number
    ) => {
      const g = await instance({ channel: channel || 0 });
      return await this.send(
        "ptz.start",
        { code: code, arg1: arg1, arg2: arg2, arg3: arg3, arg4: arg4 },
        { object: g.result, seq: _getSeq() }
      );
    },
    stop: (
      code: unknown,
      arg1: unknown,
      arg2: unknown,
      arg3: unknown,
      arg4: unknown,
      channel: number
    ) => {
      return instance({ channel: channel || 0 }).then((g) => {
        return this.send(
          "ptz.stop",
          { code: code, arg1: arg1, arg2: arg2, arg3: arg3, arg4: arg4 },
          { object: g.result, seq: _getSeq() }
        );
      });
    },
    getCurrentProtocolCaps: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send<{ caps: unknown }>(
          "ptz.getCurrentProtocolCaps",
          void 0,
          {
            object: a.result,
          }
        ).then(function (a) {
          return a.params.caps;
        });
      });
    },
    getProtocolList: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send<never, undefined | []>("ptz.getProtocolList", void 0, {
          object: a.result,
        }).then(function (a) {
          return a.result || [];
        });
      });
    },
    getProtocol: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send<{ info: unknown }>("ptz.getProtocol", void 0, {
          object: a.result,
        }).then(function (a) {
          return a.params.info;
        });
      });
    },
    focusContinuously: (speed: unknown, timeout: unknown, channel: number) => {
      return instance({ channel: channel || 0 }).then((c) => {
        return this.send(
          "ptz.focusContinuously",
          { speed: speed, timeout: timeout },
          { object: c.result }
        );
      });
    },
    focusManually: (change: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send(
          "ptz.focusManually",
          { change: change },
          { object: b.result }
        );
      });
    },
    stopFocus: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send("ptz.stopFocus", null, { object: a.result });
      });
    },
    adjustIris: (change: number, channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send(
          "ptz.adjustIris",
          { change: change },
          { object: b.result }
        );
      });
    },
    auxControl: (func: unknown, open: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((c) => {
        return this.send(
          "ptz.auxControl",
          { function: func, open: open },
          { object: c.result }
        );
      });
    },
    menuControl: (key: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send("ptz.menuControl", { key: key }, { object: b.result });
      });
    },
    lensInit: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send("ptz.lensInit", void 0, { object: a.result });
      });
    },
    restartCamera: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send("ptz.restartCamera", void 0, { object: a.result });
      });
    },
    reset: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send("ptz.reset", void 0, { object: a.result });
      });
    },
    restartPtz: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send("ptz.restartPtz", void 0, { object: a.result });
      });
    },
    setPreset: (index: number, name: string, channel?: number) => {
      return instance({ channel: channel || 0 }).then((c) => {
        return this.send(
          "ptz.setPreset",
          { name: name, index: index },
          { object: c.result }
        );
      });
    },
    getPresets: (channel?: number, something?: boolean) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send<{ presets?: { Type: number }[] }>(
          "ptz.getPresets",
          void 0,
          { object: a.result }
        ).then((a) => {
          let c = a.params.presets;
          const d = [2];
          if (something) return c;
          const e = [];
          c = c || [];
          for (let f = 0, g = c.length; g > f; f++)
            -1 == d.indexOf(c[f].Type) && e.push(c[f]);
          return e;
        });
      });
    },
    gotoPreset: (index: number, speed: number, channel?: number) => {
      return instance({ channel: channel || 0 }).then((c) => {
        return this.send(
          "ptz.gotoPreset",
          { speed: speed, index: index },
          { object: c.result }
        );
      });
    },
    removePreset: (index: number, channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send(
          "ptz.removePreset",
          { index: index },
          { object: b.result }
        );
      });
    },
    setTour: (index: number, name: string, channel?: string) => {
      return instance({ channel: channel || 0 }).then((c) => {
        return this.send(
          "ptz.setTour",
          { name: name, index: index },
          { object: c.result }
        );
      });
    },
    getTours: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send<{ tours: unknown }>("ptz.getTours", void 0, {
          object: a.result,
        }).then((a) => {
          return a.params.tours;
        });
      });
    },
    removeTour: (index?: number, channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send(
          "ptz.removeTour",
          { index: index },
          { object: b.result }
        );
      });
    },
    startTour: (index: number, channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send(
          "ptz.startTour",
          { index: index },
          { object: b.result }
        );
      });
    },
    stopTour: (index: number, channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send(
          "ptz.stopTour",
          { index: index },
          { object: b.result }
        );
      });
    },
    autoTour: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send("ptz.autoTour", void 0, { object: a.result });
      });
    },
    moveAbsolutely: (position: unknown, speed: number, channel?: number) => {
      return instance({ channel: channel || 0 }).then((c) => {
        return this.send(
          "ptz.moveAbsolutely",
          { position: position, speed: speed },
          { object: c.result }
        );
      });
    },
    moveRelatively: (translation: unknown, speed: number, channel?: number) => {
      return instance({ channel: channel || 0 }).then((c) => {
        return this.send(
          "ptz.moveRelatively",
          { translation: translation, speed: speed },
          { object: c.result }
        );
      });
    },
    moveDirectly: (screen: unknown, speed: number, channel?: number) => {
      return instance({ channel: channel || 0 }).then((c) => {
        return this.send(
          "ptz.moveDirectly",
          { screen: screen, speed: speed },
          { object: c.result }
        );
      });
    },
    moveContinuously: (speed: number, timeout: number, channel?: number) => {
      return instance({ channel: channel || 0 }).then((d) => {
        return this.send(
          "ptz.moveContinuously",
          { speed: speed, timeout: timeout },
          { object: d.result, seq: _getSeq() }
        );
      });
    },
    continueMoveDirectly: (
      index: number,
      timeInterval: number,
      isLastScreen: boolean,
      screen: unknown,
      channel?: number
    ) => {
      return instance({ channel: channel || 0 }).then((e) => {
        return this.send(
          "ptz.continueMoveDirectly",
          {
            screenDetail: {
              index: index,
              timeInterval: timeInterval,
              isLastScreen: isLastScreen,
            },
            screen: screen,
          },
          { object: e.result }
        );
      });
    },
    stopMove: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send("ptz.stopMove", void 0, {
          object: b.result,
          seq: _getSeq(),
        });
      });
    },
    isMoving: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send<{ moving: unknown }>("ptz.isMoving", void 0, {
          object: a.result,
        }).then((a) => {
          return a.params.moving;
        });
      });
    },
    getStatus: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send<{ status: unknown }>("ptz.getStatus", void 0, {
          object: a.result,
        }).then((a) => {
          return a.params.status;
        });
      });
    },
    focusRegion: (mode: unknown, rect: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((c) => {
        return this.send(
          "ptz.focusRegion",
          { mode: mode, rect: rect },
          { object: c.result }
        );
      });
    },
    setDirection: (direction: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send(
          "ptz.setDirection",
          { direction: direction },
          { object: b.result }
        );
      });
    },
    enableLimit: (enable: boolean, channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send(
          "ptz.enableLimit",
          { enable: enable },
          { object: b.result }
        );
      });
    },
    markLimit: (type: string, channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send("ptz.markLimit", { type: type }, { object: b.result });
      });
    },
    gotoLimit: (type: string, channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send("ptz.gotoLimit", { type: type }, { object: b.result });
      });
    },
    setScanLimit: (index: number, limitMode: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((c) => {
        return this.send(
          "ptz.setScanLimit",
          { index: index, limitMode: limitMode },
          { object: c.result }
        );
      });
    },
    stopScan: (index: number, channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send(
          "ptz.stopScan",
          { index: index },
          { object: b.result }
        );
      });
    },
    startScan: (index: number, speed: number, channel?: number) => {
      return instance({ channel: channel || 0 }).then((c) => {
        return this.send(
          "ptz.startScan",
          { index: index, speed: speed },
          { object: c.result }
        );
      });
    },
    stopPatternReplay: (index: number, channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send(
          "ptz.stopPatternReplay",
          { index: index },
          { object: b.result }
        );
      });
    },
    startPatternReplay: (index: number, channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send(
          "ptz.startPatternReplay",
          { index: index },
          { object: b.result }
        );
      });
    },
    stopPatternRecord: (index: number, channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send(
          "ptz.stopPatternRecord",
          { index: index },
          { object: b.result }
        );
      });
    },
    startPatternRecord: (index: number, name: string, channel?: number) => {
      return instance({ channel: channel || 0 }).then((c) => {
        return this.send(
          "ptz.startPatternRecord",
          { index: index, name: name },
          { object: c.result }
        );
      });
    },
    moveAutoPan: (speed: number, timeout: number, channel?: number) => {
      return instance({ channel: channel || 0 }).then((c) => {
        return this.send(
          "ptz.moveAutoPan",
          { speed: speed, timeout: timeout },
          { object: c.result }
        );
      });
    },
    setStatisticPlan: (type: string, id: number, channel?: number) => {
      return instance({ channel: channel || 0 }).then((c) => {
        return this.send(
          "ptz.setStatisticPlan",
          { type: type, id: id },
          { object: c.result }
        );
      });
    },
    gotoStatisticPlan: (type: string, id: number, channel?: number) => {
      return instance({ channel: channel || 0 }).then((c) => {
        return this.send(
          "ptz.gotoStatisticPlan",
          { type: type, id: id },
          { object: c.result }
        );
      });
    },
    getLifetimeEncrypt: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send<{ lifetime: unknown }>(
          "ptz.getLifetimeEncrypt",
          null,
          { object: a.result }
        ).then((a) => {
          return a.params.lifetime;
        });
      });
    },
    getOperationStatus: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send<{ status: unknown }>("ptz.getOperationStatus", null, {
          object: a.result,
        }).then((a) => {
          return a.params.status;
        });
      });
    },
    getMotorSteps: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send<{ steps: unknown }>("ptz.getMotorSteps", null, {
          object: a.result,
        }).then((a) => {
          return a.params.steps;
        });
      });
    },
    setMotorSteps: (steps: unknown, speed: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((c) => {
        return this.send(
          "ptz.setMotorSteps",
          { steps: steps, speed: speed },
          { object: c.result }
        );
      });
    },
    directionCalibration: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send("ptz.directionCalibration", void 0, {
          object: a.result,
        }).then((a) => {
          return a.params;
        });
      });
    },
    getViewRangeStatus: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send("ptz.getViewRangeStatus", null, {
          object: a.result,
        }).then((a) => {
          return a;
        });
      });
    },
    getZoomValue: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send("ptz.getZoomValue", null, { object: a.result }).then(
          (a) => {
            return a.params;
          }
        );
      });
    },
  };
}
