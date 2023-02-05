import { RPCBase } from "../rpcBase";

export function DockUser(this: RPCBase) {
  return {
    getUserInfoAll: () => {
      return this.send<{ users?: unknown[] }>("DockUser.getUserInfoAll").then(
        function (a) {
          return a.params.users || [];
        }
      );
    },
    addUser: (salt: unknown, cipher: unknown, content: unknown) => {
      return this.send("DockUser.addUser", {
        salt: salt,
        cipher: cipher,
        content: content,
      });
    },
    deleteUser: (name: unknown) => {
      return this.send("DockUser.deleteUser", { name: name });
    },
    modifyPassword: (salt: unknown, cipher: unknown, content: unknown) => {
      return this.send("DockUser.modifyPassword", {
        salt: salt,
        cipher: cipher,
        content: content,
      });
    },
    modifyUser: (name: unknown, user: unknown) => {
      return this.send("DockUser.modifyUser", { name: name, user: user });
    },
  };
}
