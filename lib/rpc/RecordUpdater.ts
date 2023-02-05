import { RPCBase } from "../rpcBase";

export function RecordUpdater(this: RPCBase) {
  return {
    imports: (records: unknown, object: unknown) => {
      return this.send(
        "RecordUpdater.import",
        { records: records },
        { object: object }
      ).then(function (a) {
        return a;
      });
    },
    instance: (name: unknown) => {
      // var b =
      //   webApp.EncryptInfo && webApp.EncryptInfo.asymmetric
      //     ? l.sendSec
      //     : this.send;
      return this.send("RecordUpdater.factory.instance", { name: name }).then(
        function (a) {
          return a;
        }
      );
    },
    insert: (record: unknown, object: unknown) => {
      // var c =
      //   webApp.EncryptInfo && webApp.EncryptInfo.asymmetric
      //     ? l.sendSec
      //     : this.send;
      return this.send(
        "RecordUpdater.insert",
        { record: record },
        { object: object }
      ).then(function (a) {
        return a;
      });
    },
    remove: (recno: unknown, object: unknown) => {
      // var c =
      //   webApp.EncryptInfo && webApp.EncryptInfo.asymmetric
      //     ? l.sendSec
      //     : this.send;
      return this.send(
        "RecordUpdater.remove",
        { recno: recno },
        { object: object }
      ).then(function (a) {
        return a;
      });
    },
    update: (recno: unknown, record: unknown, object: unknown) => {
      // var d =
      //   webApp.EncryptInfo && webApp.EncryptInfo.asymmetric
      //     ? l.sendSec
      //     : this.send;
      return this.send(
        "RecordUpdater.update",
        { recno: recno, record: record },
        { object: object }
      ).then(function (a) {
        return a;
      });
    },
    clear: (object: unknown) => {
      // var b =
      //   webApp.EncryptInfo && webApp.EncryptInfo.asymmetric
      //     ? l.sendSec
      //     : this.send;
      return this.send("RecordUpdater.clear", null, { object: object });
    },
    importFile: (
      filename: unknown,
      format: unknown,
      code: unknown,
      object: unknown
    ) => {
      return this.send(
        "RecordUpdater.importFile",
        { filename: filename, format: format, code: code },
        { object: object }
      ).then(function (a) {
        return a;
      });
    },
    exportFile: (
      filename: unknown,
      format: unknown,
      code: unknown,
      object: unknown
    ) => {
      return this.send(
        "RecordUpdater.exportFile",
        { filename: filename, format: format, code: code },
        { object: object }
      ).then(function (a) {
        return a;
      });
    },
    // importFileEncrypt: (a, b, c, d, e) => {
    //   return this.sendSec(
    //     "RecordUpdater.importFileEncrypt",
    //     {
    //       filename: a,
    //       format: b,
    //       code: c,
    //       encrypt: { scheme: "AES", key: d },
    //     },
    //     { object: e }
    //   )
    //     .then(function (a) {
    //       return a.params;
    //     });
    // },
    // exportFileEncrypt: (a, b, c, d, e, f) => {
    //   return this.sendSec(
    //     "RecordUpdater.exportFileEncrypt",
    //     {
    //       filename: a,
    //       format: b,
    //       code: c,
    //       encrypt: { scheme: "AES", key: d },
    //       isBlock: e,
    //     },
    //     { object: f }
    //   )
    //     .then(function (a) {
    //       return a.params;
    //     });
    // },
    exportAsyncFile: (
      filename: unknown,
      format: unknown,
      code: unknown,
      object: unknown
    ) => {
      return this.send(
        "RecordUpdater.exportAsyncFile",
        { filename: filename, format: format, code: code },
        { object: object }
      ).then(function (a) {
        return a;
      });
    },
    getFileImportState: (object: unknown) => {
      return this.send("RecordUpdater.getFileImportState", null, {
        object: object,
      }).then(function (a) {
        return a;
      });
    },
    getFileImportData: (object: unknown) => {
      return this.send("RecordUpdater.getFileImportData", null, {
        object: object,
      }).then(function (a) {
        return a;
      });
    },
    getFileExportState: (object: unknown) => {
      return this.send("RecordUpdater.getFileExportState", null, {
        object: object,
      }).then(function (a) {
        return a;
      });
    },
    getSchema: (object: unknown) => {
      return this.send("RecordUpdater.getSchema", null, {
        object: object,
      }).then(function (a) {
        return a;
      });
    },
  };
}
