import * as dotenv from "dotenv";

function parse(name: string) {
  const value = process.env[name];
  if (typeof value === "string") {
    return value;
  }

  return "";
}

dotenv.config();

const username = parse("RPC_USERNAME");
const password = parse("RPC_PASSWORD");
const ips = parse("RPC_IP").split(",");
const ip = ips[0] || "";

export default {
  username,
  password,
  ip,
  ips,
};
