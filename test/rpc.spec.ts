import { expect } from "chai";
import { describe, it } from "mocha";
import { RPC, RPCLogin } from "../lib";
import env from "./env";

describe("rpc", function () {
  const { ip } = env;
  const rpc = new RPC(ip);
  const rpcLogin = new RPCLogin(rpc);

  before(function () {
    const { username, password } = env;
    return rpcLogin.login(username, password);
  });

  after(function () {
    return rpcLogin.logout();
  });

  describe("MagicBox", function () {
    it("getSerialNo", async function () {
      const sn = await rpc.MagicBox.getSerialNo();
      expect(sn).to.be.a("string", "serial number").to.be.not.empty;
    });

    it("getUpTime", async function () {
      const uptime = await rpc.MagicBox.getUpTime();
      expect(uptime.Last).to.be.a("number", "Uptime");
      expect(uptime.Total).to.be.a("number", "Total Uptime");
    });
  });

  describe("ConfigManager", function () {
    it("getConfig('Encode')", async function () {
      await rpc.ConfigManager.getConfig("Encode");
    });
  });
});
