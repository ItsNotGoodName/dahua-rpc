import { RPCBase } from "../rpcBase";

export function DigitalCertificate(this: RPCBase) {
  return {
    getCertReqInfo: (params?: object | object[] | null) => {
      return this.send("DigitalCertificate.getCertReqInfo", params).then(
        function (a) {
          return a.params;
        }
      );
    },
    importCert: (Type: unknown, Cert: unknown, options: object) => {
      return this.send("DigitalCertificate.importCert", {
        ...{ Type: Type, Cert: Cert },
        ...options,
      }); // NOTE: this.sendSec
    },
    getCertsInfo: (
      Offset: unknown,
      Count: unknown,
      DigitalCertificateType?: string
    ) => {
      return this.send("DigitalCertificate.getCertsInfo", {
        DigitalCertificateType: DigitalCertificateType || "GM",
        Offset: Offset,
        Count: Count,
      });
    },
    deleteCert: (CertSN: unknown, DigitalCertificateType?: string) => {
      return this.send("DigitalCertificate.deleteCert", {
        DigitalCertificateType: DigitalCertificateType || "GM",
        CertSN: CertSN,
      });
    },
    exportCert: (CertSN: unknown, DigitalCertificateType?: string) => {
      return this.send("DigitalCertificate.exportCert", {
        DigitalCertificateType: DigitalCertificateType || "GM",
        CertSN: CertSN,
      });
    },
    importCRL: (CRL: unknown, DigitalCertificateType?: string) => {
      return this.send("DigitalCertificate.importCRL", {
        DigitalCertificateType: DigitalCertificateType || "GM",
        CRL: CRL,
      });
    },
    exportCRL: (SN: unknown, DigitalCertificateType?: string) => {
      return this.send("DigitalCertificate.exportCRL", {
        DigitalCertificateType: DigitalCertificateType || "GM",
        SN: SN,
      });
    },
    deleteCRLs: (SN: unknown, DigitalCertificateType?: string) => {
      return this.send("DigitalCertificate.deleteCRLs", {
        DigitalCertificateType: DigitalCertificateType || "GM",
        SN: SN,
      });
    },
    createCert: (options: object, DigitalCertificateType?: string) => {
      return this.send("DigitalCertificate.createCert", {
        ...{
          DigitalCertificateType: DigitalCertificateType || "GM",
          Type: "Default",
        },
        ...options,
      });
    },
    setActiveServerCert: (
      ServerName: unknown,
      CertSN: unknown,
      DigitalCertificateType?: string
    ) => {
      return this.send("DigitalCertificate.setActiveServerCert", {
        DigitalCertificateType: DigitalCertificateType || "GM",
        ServerName: ServerName,
        CertSN: CertSN,
      });
    },
    getPublicKey: (Type?: number) => {
      return this.sendRPC(
        this.rpc("DigitalCertificate.getPublicKey", { Type: Type || 0 }),
        "/OutsideCmd"
      ).then(function (a) {
        return a.params;
      });
    },
  };
}
