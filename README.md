# dahua-rpc

Node.js library for Dahua's RPC API.
It is recommended to use [Typescript](https://www.typescriptlang.org/) in your project.

# Example

```ts
import { RPC, RPCLogin } from "dahua-rpc";

async function main() {
  const ip = "192.168.1.108";
  const username = "admin";
  const password = "password";

  const rpc = new RPC(ip);
  const rpcLogin = new RPCLogin(rpc);

  // Login
  await rpcLogin.login(username, password);

  // Print serial number
  console.log(await rpc.MagicBox.getSerialNo(););

  // Logout
  await rpcLogin.logout();
}

main();
```

# Test

The following variables are required for running tests. They can be placed in the `.env` file.

```shell
RPC_USERNAME=admin
RPC_PASSWORD=password
RPC_IP=192.168.1.108
```

Run tests with the following command.

```
npm run test
```

# To Do

- Document how the RPC API works.
- Finish typing RPC methods.
- Add event emitter.
