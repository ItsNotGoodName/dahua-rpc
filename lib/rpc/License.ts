import { RPCBase } from "../rpcBase";

export function License(this: RPCBase) {
  return {
    getLicenseInfo: () => {
      return this.send<
        Array<{
          Info: {
            AbroadInfo: string;
            AllType: boolean;
            BusinessLimit: Array<{
              LimitItems: Array<{
                Policy: number;
                Value: number;
              }>;
              Type: number;
            }>;
            ClusterLimit: Array<{
              Policy: number;
              Value: number;
            }>;
            DigitChannel: number;
            EffectiveDays: number;
            EffectiveTime: number;
            LicenseID: number;
            ProductType: string;
            Status: number;
            Username: string;
          };
        }>
      >("License.getLicenseInfo").then(function (a) {
        return a && a.params;
      });
    },
  };
}
