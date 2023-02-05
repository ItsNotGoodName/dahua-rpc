import { RPCBase } from "../rpcBase";

export function NetApp(this: RPCBase) {
  return {
    getNetInterfaces: () => {
      return this.send<{
        netInterface: {
          ConnStatus: string;
          Name: string;
          NetCardName: string;
          PhysicalAddress: string;
          Speed: number;
          SupportLongPoE: boolean;
          Type: string;
          Valid: boolean;
        }[];
      }>("netApp.getNetInterfaces").then(function (a) {
        return a.params.netInterface;
      });
    },
    getMobileRSSI: (name: string) => {
      return this.send<{ info?: unknown }>("netApp.getMobileRSSI", {
        name: name,
      }).then(function (a) {
        return a.params.info || {};
      });
    },
    getMobileInterfaces: () => {
      return this.send<{ netInterface?: unknown }>(
        "netApp.getMobileInterfaces"
      ).then(function (a) {
        return a.params.netInterface || [];
      });
    },
    getNetDataStat: (Name: string) => {
      return this.send("netApp.getNetDataStat", { Name: Name }).then(function (
        a
      ) {
        return a.params;
      });
    },
    checkIPConflict: (Address: string, Interface: string) => {
      return this.send("netApp.checkIPConflict", {
        Interface: Interface || "eth0",
        Address: Address,
      })
        .then(function () {
          return !0;
        })
        .catch(function () {
          return !1;
        });
    },
    getNetCaps: () => {
      return this.send<{
        caps?: {
          Bond: number;
          DeviceDiscoveryPrivate: boolean;
          IEEE802_1X: boolean;
          P2P: {
            Support: boolean;
          };
          SupportHTTPS: boolean;
          SupportedMobilePush: boolean;
        };
      }>("netApp.getCaps").then(function (a) {
        return a.params.caps || {};
      });
    },
    getDialInfo: (Name: string) => {
      return this.send("netApp.getDialInfo", { Name: Name }).then(function (a) {
        return a.params;
      });
    },
    scanWLanDevices: (Name: string, SSID: string) => {
      return this.send<{ wlanDevice?: unknown }>("netApp.scanWLanDevices", {
        Name: Name,
        SSID: SSID,
      }).then(function (a) {
        return a.params.wlanDevice || [];
      });
    },
    getPppoeState: () => {
      return this.send<{ State: unknown }>("netApp.getPppoeState").then(
        function (a) {
          return a.params.State;
        }
      );
    },
    getPppoeIp: () => {
      return this.send<{ ipaddr: unknown }>("netApp.getPppoeIp").then(function (
        a
      ) {
        return a.params.ipaddr;
      });
    },
    getPppoeDns: () => {
      return this.send<{ ipaddr: unknown }>("netApp.getPppoeDns").then(
        function (a) {
          return a.params.ipaddr;
        }
      );
    },
    connectByWps: (
      Type: number,
      ApPin: string,
      SSID: string,
      WLanPin: string
    ) => {
      return this.send<{ info?: unknown }>("netApp.connectByWps", {
        info: { Type: Type, ApPin: ApPin, SSID: SSID, WLanPin: WLanPin },
      }).then(function (b) {
        return 1 === Type ? b.params.info : "";
      });
    },
    sendTestMail: () => {
      return this.send<{ result: boolean }>("netApp.sendTestMail").then(
        function (a) {
          return a.result;
        }
      );
    },
    getLinkStatus: (Name: string) => {
      return this.send("netApp.getLinkStatus", { Name: Name }).then(function (
        a
      ) {
        return a.params || {};
      });
    },
    getSIMState: (name: string) => {
      return this.send("mobile.getSIMState", { name: name }).then(function (a) {
        return a.params || {};
      });
    },
    getNetResourceStat: () => {
      return this.send<{
        IPChanneIn?: string;
        NetCapability?: string;
        NetRemain?: string;
        RemotePreview?: string;
        RemoteSendCapability?: string;
        RemoteSendRemain?: string;
      }>("netApp.getNetResourceStat").then(function (a) {
        return a.params || {};
      });
    },
  };
}
