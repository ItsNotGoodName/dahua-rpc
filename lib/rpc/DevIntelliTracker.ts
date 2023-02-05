import { RPCBase } from "../rpcBase";

export function DevIntelliTracker(this: RPCBase) {
  const instance = this.sendSetup("devIntelliTracker.factory.instance");
  return {
    instance,
    getLockLeft: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send<{ time: unknown }>(
          "devIntelliTracker.getLockLeft",
          void 0,
          {
            object: a.result,
          }
        ).then(function (a) {
          return a.params.time;
        });
      });
    },
    setLockDuration: (time: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((b) => {
        return this.send(
          "devIntelliTracker.setLockDuration",
          { time: time },
          { object: b.result }
        );
      });
    },
    start: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send("devIntelliTracker.start", void 0, {
          object: a.result,
        });
      });
    },
    stop: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send("devIntelliTracker.stop", void 0, {
          object: a.result,
        });
      });
    },
    trackObject: (object: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send(
          "devIntelliTracker.trackObject",
          { object: object },
          { object: a.result }
        );
      });
    },
    gotoScene: (scene: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send(
          "devIntelliTracker.gotoScene",
          { scene: scene },
          { object: a.result }
        );
      });
    },
    markScene: (scene: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send(
          "devIntelliTracker.markScene",
          { scene: scene },
          { object: a.result }
        );
      });
    },
    markSceneMaxZoom: (scene: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send(
          "devIntelliTracker.markSceneMaxZoom",
          { scene: scene },
          { object: a.result }
        );
      });
    },
    markSceneLimit: (scene: unknown, type: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send(
          "devIntelliTracker.markSceneLimit",
          { scene: scene, type: type },
          { object: a.result }
        );
      });
    },
    gotoSceneLimit: (scene: unknown, type: unknown, channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send(
          "devIntelliTracker.gotoSceneLimit",
          { scene: scene, type: type },
          { object: a.result }
        );
      });
    },
    getCaps: (channel?: number) => {
      return instance({ channel: channel || 0 }).then((a) => {
        return this.send<{ caps: unknown }>("devIntelliTracker.getCaps", null, {
          object: a.result,
        }).then(function (a) {
          return a.params.caps;
        });
      });
    },
  };
}
