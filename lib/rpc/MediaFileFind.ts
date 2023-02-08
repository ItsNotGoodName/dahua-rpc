import { RPCBase } from "../rpcBase";

export type FindFileCondition = {
  Channel: number;
  Dirs: string[];
  Types: ["dav" | "jpg"] | ["dav", "jpg"] | ["jpg", "dav"];
  Order: "Ascent" | string;
  Redundant: "Exclusion" | string;
  Events: null | string[];
  StartTime: string;
  EndTime: string;
  Flags: string[];
};

export function MediaFileFind(this: RPCBase) {
  return {
    create: (subClassID?: number) => {
      return this.send<unknown, number>(
        "mediaFileFind.factory.create",
        void 0,
        {
          subClassID: subClassID,
        }
      ).then(function (a) {
        return a.result;
      });
    },
    findFile: (object: number, condition: FindFileCondition) => {
      return this.send(
        "mediaFileFind.findFile",
        { condition: condition },
        { object: object }
      );
    },
    findNextFile: (object: number, count: number) => {
      return this.send<{
        found: number;
        infos: Array<{
          Channel: number;
          StartTime: string;
          EndTime: string;
          Length: number;
          Type: "dav" | "jpg";
          FilePath: string;
          Duration: number;
          Disk: number;
          VideoStream: string;
          Flags: Array<string>;
          Events: Array<string>;
          Cluster?: number;
          Partition?: number;
          PicIndex?: number;
          Repeat?: number;
          WorkDir?: string;
          WorkDirSN?: number;
        }> | null;
      }>(
        "mediaFileFind.findNextFile",
        { count: count },
        { object: object }
      ).then(function (a) {
        return a.params;
      });
    },
    getCount: (object: number) => {
      return this.send<{ count: number }>("mediaFileFind.getCount", void 0, {
        object: object,
      }).then(function (a) {
        return a.params.count;
      });
    },
    setQueryResultOptions: (object: number, offset: number) => {
      return this.send(
        "mediaFileFind.setQueryResultOptions",
        { options: { offset: offset } },
        { object: object }
      ).then(function (a) {
        return a.result;
      });
    },
    close: (object: number) => {
      return this.send("mediaFileFind.close", void 0, { object: object });
    },
    destroy: (object: number) => {
      return this.send("mediaFileFind.destroy", void 0, { object: object });
    },
  };
}
