import { RPCBase } from "../rpcBase";

export function DdnsClient(this: RPCBase) {
  return {
    getStatus: () => {
      return this.send<{
        status: {
          Protocol: string;
          Value: string;
          ConIp?: string;
          Status: number;
        }[];
      }>("ddnsClient.getStatus").then(function (a) {
        return a.params.status;
      });
    },
    getDomainNames: (ddnsInfo: unknown) => {
      return this.send<{ names: unknown }>("ddnsClient.getDomainNames", {
        ddnsInfo: ddnsInfo,
      }).then(function (a) {
        return a.params.names;
      });
    },
    testHostName: (
      Protocol: unknown,
      Address: unknown,
      Port: unknown,
      HostName: unknown,
      UserName: unknown,
      Password: unknown
    ) => {
      return this.send<{ Detail: unknown }>("ddnsClient.testHostName", {
        Protocol: Protocol,
        Address: Address,
        Port: Port,
        HostName: HostName,
        UserName: UserName,
        Password: Password,
      }).then(function (a) {
        return a.params.Detail;
      });
    },
  };
}
