import { RPCBase } from "../rpcBase";

export function FontManager(this: RPCBase) {
  return {
    getFontSolutionSet: () => {
      return this.send("fontManager.getFontSolutionSet").then(function (a) {
        return a.params;
      });
    },
  };
}
