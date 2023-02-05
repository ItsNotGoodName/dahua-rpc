import { RPCBase } from "../rpcBase";

export function Alarm(this: RPCBase) {
  return {
    getInSlots: () => {
      return this.send<{ inputs?: number }>("alarm.getInSlots").then(function (
        a
      ) {
        return a.params.inputs || 0;
      });
    },
    getOutSlots: () => {
      return this.send<{ outputs?: number }>("alarm.getOutSlots").then(
        function (a) {
          return a.params.outputs || 0;
        }
      );
    },
    getAlarmCaps: () => {
      return this.send<{
        caps?: {
          AlarmPir?: boolean;
          Flash?: boolean;
          SupportAlarmInDisableLinkage?: boolean;
          SupportConfigurableAlarm?: boolean;
        };
      }>("alarm.getAlarmCaps").then(function (a) {
        return a.params.caps || {};
      });
    },
    getOutState: () => {
      return this.send<{ state: number }>("alarm.getOutState").then(function (
        a
      ) {
        return a.params.state;
      });
    },
  };
}
