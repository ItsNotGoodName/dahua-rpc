import { RPCBase } from "../rpcBase";

export function RecordFinder(this: RPCBase) {
  return {
    create: (name: unknown) => {
      // var b =
      //   webApp.EncryptInfo && webApp.EncryptInfo.asymmetric
      //     ? l.sendSec
      //     : this.send;
      return this.send("RecordFinder.factory.create", { name: name }).then(
        function (a) {
          return a.result;
        }
      );
    },
    startFind: (condition: unknown, object: unknown) => {
      // var c =
      //   webApp.EncryptInfo && webApp.EncryptInfo.asymmetric
      //     ? l.sendSec
      //     : this.send;
      return this.send(
        "RecordFinder.startFind",
        { condition: condition },
        { object: object }
      ).then(function (a) {
        return a;
      });
    },
    doFind: (count: unknown, object: unknown) => {
      // var c =
      //   webApp.EncryptInfo && webApp.EncryptInfo.asymmetric
      //     ? l.sendSec
      //     : this.send;
      return this.send(
        "RecordFinder.doFind",
        { count: count },
        { object: object }
      ).then(function (a) {
        return a;
      });
    },
    stopFind: (object: unknown) => {
      // var b =
      //   webApp.EncryptInfo && webApp.EncryptInfo.asymmetric
      //     ? l.sendSec
      //     : this.send;
      return this.send("RecordFinder.stopFind", null, { object: object }).then(
        function (a) {
          return a;
        }
      );
    },
    doSeekFind: (offset: unknown, count: unknown, object: unknown) => {
      // var d =
      //   webApp.EncryptInfo && webApp.EncryptInfo.asymmetric
      //     ? l.sendSec
      //     : this.send;
      return this.send(
        "RecordFinder.doSeekFind",
        { offset: offset, count: count },
        { object: object }
      ).then(function (a) {
        return a.params;
      });
    },
    destroy: (object: unknown) => {
      // var b =
      //   webApp.EncryptInfo && webApp.EncryptInfo.asymmetric
      //     ? l.sendSec
      //     : this.send;
      return this.send("RecordFinder.destroy", null, { object: object }).then(
        function (a) {
          return a;
        }
      );
    },
    getQuerySize: (object: unknown) => {
      // var b =
      //   webApp.EncryptInfo && webApp.EncryptInfo.asymmetric
      //     ? l.sendSec
      //     : this.send;
      return this.send("RecordFinder.getQuerySize", null, {
        object: object,
      }).then(function (a) {
        return a.params;
      });
    },
  };
}
