import { RPCBase } from "../rpcBase";

export function WorkDirectory(this: RPCBase) {
  const instance = this.sendSetup("workDirectory.factory.instance");
  return {
    instance,
    getInfo: (name: string) => {
      return instance({ name: name }).then((a) => {
        return this.send<{ info: unknown }>("workDirectory.getInfo", null, {
          object: a.result,
        }).then(function (a) {
          return a.params.info;
        });
      });
    },
    setGroup: (name: string, group: unknown) => {
      return instance({ name: name }).then((a) => {
        return this.send(
          "workDirectory.setGroup",
          { group: group },
          { object: a.result }
        );
      });
    },
    getBitmapEx: (
      name: string,
      condition: {
        Channel: number;
        Types: string[];
        Events: string;
        Year: number;
        Month: number;
      }
    ) => {
      return instance({ name: name }).then((a) => {
        return this.send<{ bitmap: number }>(
          "workDirectory.getBitmapEx",
          { condition: condition },
          { object: a.result }
        ).then(function (a) {
          return a.params.bitmap;
        });
      });
    },
    releaseDirectory: (name: string) => {
      return instance({ name: name }).then((a) => {
        return this.send<{ info: unknown }>(
          "workDirectory.releaseDirectory",
          null,
          {
            object: a.result,
          }
        ).then(function (a) {
          return a.params.info;
        });
      });
    },
    getSpaceInfoByFileType: (name: string, FileType: unknown) => {
      return instance({ name: name }).then((a) => {
        return this.send<{ info: unknown }>(
          "workDirectory.getSpaceInfoByFileType",
          { FileType: FileType },
          { object: a.result }
        ).then(function (a) {
          return a.params.info;
        });
      });
    },
  };
}
