import { RPCBase } from "../rpcBase";

export function System(this: RPCBase) {
  return {
    // multiSec: (salt: unknown, content: unknown) => {
    //   return this.send<{ content: unknown }>("system.multiSec", { cipher: i(), salt: salt, content: content })
    //     .then(function (a) {
    //       return a.params.content;
    //     });
    // },
    // attachSec: (salt: unknown, content: unknown) => {
    //   return this.send<{ content: unknown }>("system.attachSec", { cipher: i(), salt: salt, content: content })
    //     .then(function (a) {
    //       return a.params.content;
    //     });
    // },
    // detachSec: (SID: unknown, salt: unknown, content: unknown) => {
    //   return this.send<{ content: unknown }>("system.detachSec", {
    //     SID: SID,
    //     cipher: i(),
    //     salt: salt,
    //     content: content,
    //   })
    //     .then(function (a) {
    //       return a.params.content;
    //     });
    // },
  };
}
