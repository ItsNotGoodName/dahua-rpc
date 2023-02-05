import { RPCBase } from "../rpcBase";

export function TrafficStatistic(this: RPCBase) {
  return {
    startFind: (Condition: unknown) => {
      return this.send("TrafficStatistic.startFind", {
        Condition: Condition,
      }).then(function (a) {
        return a.params;
      });
    },
    doFind: (Token: unknown, BeginNumber: unknown, Count: unknown) => {
      return this.send("TrafficStatistic.doFind", {
        Token: Token,
        BeginNumber: BeginNumber,
        Count: Count,
      }).then(function (a) {
        return a.params;
      });
    },
    stopFind: (Token: unknown) => {
      return this.send("TrafficStatistic.stopFind", { Token: Token }).then(
        function (a) {
          return a;
        }
      );
    },
  };
}
