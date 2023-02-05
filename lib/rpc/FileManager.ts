import { RPCBase } from "../rpcBase";

export function FileManager(this: RPCBase) {
  return {
    list: (path: string) => {
      return this.send<{ elementInfo: unknown }>("FileManager.list", {
        path: path,
      })
        .then(function (a) {
          return a.params.elementInfo;
        })
        .catch(() => {
          return [];
        });
    },
    rename: (oldName: string, newName: string) => {
      return this.send("FileManager.rename", {
        oldName: oldName,
        newName: newName,
      });
    },
    removeFiles: (fileName: string) => {
      return this.send("FileManager.removeFiles", { fileName: fileName });
    },
    getFileNames: (directory: string) => {
      return this.send<{ fileInfo: unknown }>("FileManager.getFileNames", {
        directory: directory,
      }).then(function (a) {
        return a.params.fileInfo;
      });
    },
    downloadPiece: (fileName: string, offset: number, needLength: boolean) => {
      return this.send("FileManager.downloadPiece", {
        fileName: fileName,
        offset: offset,
        needLength: needLength,
      }).then(function (a) {
        return a.params;
      });
    },
  };
}
