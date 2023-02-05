import { RPCBase } from "../rpcBase";

export function Backup(this: RPCBase) {
  return {
    checkCondition: (startTime: unknown, endTime: unknown) => {
      return this.send("Backup.checkCondition", {
        startTime: startTime,
        endTime: endTime,
      }).then(function (a) {
        return a.params;
      });
    },
    manualStart: (startTime: unknown, endTime: unknown) => {
      return this.send("Backup.manualStart", {
        startTime: startTime,
        endTime: endTime,
      }).then(function (a) {
        return a.params;
      });
    },
    manualStop: (taskID: unknown) => {
      return this.send("Backup.manualStop", { taskID: taskID }).then(function (
        a
      ) {
        return a.params;
      });
    },
    getManualProgress: (taskID: unknown) => {
      return this.send("Backup.getManualProgress", { taskID: taskID }).then(
        function (a) {
          return a.params;
        }
      );
    },
  };
}
