import { RPCBase } from "../rpcBase";

export function MediaFileFind(this: RPCBase) {
  return {
    create: (subClassID?: number) => {
      return this.send("mediaFileFind.factory.create", void 0, {
        subClassID: subClassID,
      }).then(function (a) {
        return a.result;
      });
    },
    findFile: (
      object: number,
      condition: {
        Channel: number;
        Dirs: string[];
        Types: Array<"dav" | "jpg">;
        Order: "Ascent";
        Redundant: "Exclusion";
        Events: unknown;
        StartTime: string;
        EndTime: string;
        Flags: string[];
      }
    ) => {
      return this.send(
        "mediaFileFind.findFile",
        { condition: condition },
        { object: object }
      );
    },
    findNextFile: (object: string, count: number) => {
      return this.send<{
        found: number;
        infos: Array<{
          Channel: number;
          StartTime: string;
          EndTime: string;
          Type: string;
          Length: number;
          FilePath: string;
          Duration: number;
          Disk: number;
          VideoStream: string;
          Flags: Array<string>;
          Events: Array<string>;
        }>;
      }>(
        "mediaFileFind.findNextFile",
        { count: count },
        { object: object }
      ).then(function (a) {
        return a.params;
      });
    },
    getCount: (object: string) => {
      return this.send<{ count: number }>("mediaFileFind.getCount", void 0, {
        object: object,
      }).then(function (a) {
        return a.params.count;
      });
    },
    setQueryResultOptions: (object: string, offset: number) => {
      return this.send(
        "mediaFileFind.setQueryResultOptions",
        { options: { offset: offset } },
        { object: object }
      ).then(function (a) {
        return a.result;
      });
    },
    close: (object: string) => {
      return this.send("mediaFileFind.close", void 0, { object: object });
    },
    destroy: (object: string) => {
      return this.send("mediaFileFind.destroy", void 0, { object: object });
    },
  };
}
