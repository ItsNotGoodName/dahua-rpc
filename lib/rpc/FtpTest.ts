import { RPCBase } from "../rpcBase";

export function FtpTest(this: RPCBase) {
  return {
    checkAuthority: (name?: string) => {
      return this.send("FtpTest.checkAuthority", { name: name || "FTP1" });
    },
    getCaps: () => {
      return this.send<{
        caps: {
          Support: boolean;
        };
      }>("FtpTest.getCaps").then(function (a) {
        return a.params.caps;
      });
    },
  };
}
