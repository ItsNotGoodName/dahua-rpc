import { RPCBase } from "../rpcBase";

export function EventManager(this: RPCBase) {
  const instance = () => {
    return this.send("eventManager.factory.instance").then(function (a) {
      return a.result;
    });
  };
  return {
    instance,
    attach: (codes: string[], proc?: string) => {
      return this.send<undefined | { SID: string }>("eventManager.attach", {
        codes: codes,
        proc: proc,
      }).then(function (a) {
        return a.params && a.params.SID;
      });
    },
    detach: (SID: string, codes: string[], proc?: string) => {
      return this.send("eventManager.detach", {
        SID: SID,
        codes: codes,
        proc: proc,
      });
    },
    destroy: (object: string) => {
      return this.send("eventManager.destroy", null, { object: object });
    },
    confirmEvent: (code: string, index: number, name: string) => {
      return this.send("eventManager.confirmEvent", {
        code: code,
        index: index,
        name: name,
      }).then(function (a) {
        return a.result;
      });
    },
    getCaps: () => {
      return instance().then(() => {
        // (a) => {
        return this.send<{ caps: unknown }>("eventManager.getCaps", {
          // object: a.result // NOTE: This will always be undefined
        }).then(function (a) {
          return a.params.caps;
        });
      });
    },
    getEventLink: (code: string | string[]) => {
      return (
        "string" === typeof code && (code = [code]),
        this.send("eventManager.getEventLink", { code: code }).then(function (
          a
        ) {
          return a.params;
        })
      );
    },
    getEventIndexes: (code: string) => {
      return this.send<{ indexes?: unknown[] }>(
        "eventManager.getEventIndexes",
        { code: code }
      ).then(function (a) {
        return a.params.indexes || [];
      });
    },
    getEventData: (
      code: string,
      index: number,
      name: string,
      object: string
    ) => {
      return this.send(
        "eventManager.getEventData",
        { code: code, index: index, name: name },
        { object: object }
      ).then(function (a) {
        return a.params;
      });
    },
  };
}
