import { RPCBase } from "../rpcBase";

export function vehiclesDistribution(this: RPCBase) {
  return {
    getRealTimeVehiclesInfoByRegion: (Region: unknown, Channel?: number) => {
      return this.send<{ VehiclesInfo: unknown }>(
        "vehiclesDistribution.getRealTimeVehiclesInfoByRegion",
        {
          Channel: Channel || 0,
          Region: Region,
        }
      ).then(function (a) {
        return a.params.VehiclesInfo;
      });
    },
  };
}
