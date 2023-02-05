import { RPCBase } from "../rpcBase";

export function CertManager(this: RPCBase) {
  return {
    getSvrCertInfo: () => {
      return this.send("CertManager.getSvrCertInfo").then(function (a) {
        return a.params;
      });
    },
    importSvrCert: (salt: unknown, cipher: unknown, content: unknown) => {
      return this.send("CertManager.importSvrCert", {
        salt: salt,
        cipher: cipher,
        content: content,
      });
    },
    exportRootCert: () => {
      return this.send("CertManager.exportRootCert");
    },
    getSvrCertSubject: () => {
      return this.send("CertManager.getSvrCertSubject");
    },
    removeSvrCert: () => {
      return this.send("CertManager.removeSvrCert");
    },
  };
}
