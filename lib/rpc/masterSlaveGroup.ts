import { RPCBase } from "../rpcBase";

export function masterSlaveGroup(this: RPCBase) {
  return {
    open: (group: unknown, slave: unknown) => {
      return this.send("masterSlaveGroup.open", {
        group: group,
        slave: slave,
      }).then(
        function (a) {
          return a.params;
        },
        function () {
          return !1;
        }
      );
    },
    locate: (token: unknown, point: unknown, masterInfo?: unknown) => {
      return this.send("masterSlaveGroup.locate", {
        token: token,
        point: point,
        masterInfo: masterInfo || null,
      }).then(function (a) {
        return a.params;
      });
    },
    track: (token: unknown, objectID: unknown) => {
      return this.send("masterSlaveGroup.track", {
        token: token,
        objectID: objectID,
        class: "Normal",
      }).then(function (a) {
        return a.params;
      });
    },
    rectLocate: (token: unknown, rect: unknown, Direction: unknown) => {
      return this.send("masterSlaveGroup.rectLocate", {
        token: token,
        rect: rect,
        Direction: Direction,
      }).then(function (a) {
        return a.params;
      });
    },
    attach: (group: unknown) => {
      return this.send("masterSlaveGroup.attach", { group: group }).then(
        function (a) {
          return a.params;
        }
      );
    },
    detach: (SID: unknown) => {
      return this.send("masterSlaveGroup.detach", { SID: SID }).then(function (
        a
      ) {
        return a.params;
      });
    },
    getCaps: () => {
      return this.send("masterSlaveGroup.getCaps").then(function (a) {
        return a.params;
      });
    },
  };
}
