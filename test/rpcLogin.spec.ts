import { expect } from "chai";
import { describe, it } from "mocha";
import { RPCBase, RPCLogin } from "../lib";
import env from "./env";

describe("rpcLogin", function () {
  const { username, password, ips } = env;

  for (const ip of ips) {
    describe(`${ip}`, async function () {
      it("should login, get current time, and logout", function () {
        const rpcBase = new RPCBase(ip);
        const rpcLogin = new RPCLogin(rpcBase);

        return rpcLogin.login(username, password).then(() => {
          return rpcBase.Global.getCurrentTime()
            .then((time) => {
              expect(time).to.be.a("string", "current time").to.not.be.empty;
            })
            .finally(() => rpcLogin.logout());
        });
      });
    });
  }
});
