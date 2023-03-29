# dahua-rpc

[![GitHub](https://img.shields.io/github/license/itsnotgoodname/dahua-rpc)](https://github.com/ItsNotGoodName/dahua-rpc/blob/master/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/itsnotgoodname/dahua-rpc)](https://github.com/ItsNotGoodName/dahua-rpc)
[![npm](https://img.shields.io/npm/v/dahua-rpc)](https://www.npmjs.com/package/dahua-rpc)

**Use this library at your own risk as incorrect usage may brick your IP camera.**

Node.js library for Dahua's RPC API.

The code is adapted from the Web UI of a `IPC-T5442TM-AS` that is running firmware that is dated `2020-10-19`.
The following changes have been made to the original.

- [jQuery](https://jquery.com/) replaced with modern JavaScript
- Methods that require encryption are either removed or changed to not use encryption
- Each RPC module has been extracted into seperate files
- `RPCBase` class changed to only contain the `Global` module while the `RPC` class contains the rest

It is recommended to use [TypeScript](https://www.typescriptlang.org/) in your project.
Method arguments are mostly typed but what they return may depend on the camera's model.

This library won't work in web browsers due to [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

# Installing

```
npm install dahua-rpc
```

# Example

## Get MagicBox Information

```ts
import { RPC, RPCLogin } from "dahua-rpc";
// const { RPC, RPCLogin } = require("dahua-rpc");

function print(data) {
  console.log(JSON.stringify(data));
}

async function main() {
  const ip = "192.168.1.108";
  const username = "admin";
  const password = "password";

  const rpc = new RPC(ip);
  const rpcLogin = new RPCLogin(rpc);

  // Login
  await rpcLogin.login(username, password);

  print(await rpc.MagicBox.getCPUUsage(0));
  print(await rpc.MagicBox.getDeviceClass());
  print(await rpc.MagicBox.getDeviceType());
  print(await rpc.MagicBox.getHardwareVersion());
  print(await rpc.MagicBox.getMarketArea());
  print(await rpc.MagicBox.getMemoryInfo());
  print(await rpc.MagicBox.getProcessInfo());
  // print(await rpc.MagicBox.getSerialNo());
  print(await rpc.MagicBox.getSoftwareVersion());
  print(await rpc.MagicBox.getUpTime());
  print(await rpc.MagicBox.getVendor());

  // Logout
  await rpcLogin.logout();
}

main();
```

### Output

```json
30
"IPC"
"IPC-T5442TM-AS-3.6mm"
"1.00"
"Oversea"
{"free":9613312,"total":274636800}
"HI3516DV300"
{"version":{"Build":"20201019","BuildDate":"2020-10-19","SecurityBaseLineVersion":"V2.1","Version":"2.800.15OG004.0.R","WebVersion":"V3.2.1.948164"}}
{"Last":1038879,"Total":1312244}
"General"
```

# Testing

The following environment variables are required for running tests. They can be placed in the `.env` file.

```shell
RPC_USERNAME=admin
RPC_PASSWORD=password
RPC_IP=192.168.1.108
```

Run tests with the following command.

```
npm run test:all
```

# [Changelog](https://github.com/ItsNotGoodName/dahua-rpc/blob/master/CHANGELOG.md)

# To Do

- Document how the RPC API works
- Finish typing RPC methods
- Add event emitter
