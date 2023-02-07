import { RPCBase } from "../rpcBase";

export function Speak(this: RPCBase) {
  return {
    startPlay: (path: unknown) => {
      return this.send<{ Status: unknown }>("speak.startPlay", {
        path: path,
      }).then(function (a) {
        return a.params.Status;
      });
    },
    stopPlay: () => {
      return this.send("speak.stopPlay");
    },
    getCaps: () => {
      return this.send<{ caps: unknown }>("speak.getCaps").then(function (a) {
        return a.params.caps;
      });
    },
  };
}
