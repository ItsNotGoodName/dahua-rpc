import { RPCBase } from "../rpcBase";

export function UserManager(this: RPCBase) {
  return {
    getActiveUserInfoAll: () => {
      return this.send<{ users?: unknown[] }>(
        "userManager.getActiveUserInfoAll"
      ).then(function (a) {
        return a.params.users || [];
      });
    },
    getUserInfo: (name: string) => {
      return this.send<{ user: unknown }>("userManager.getUserInfo", {
        name: name,
      }).then(function (a) {
        return a.params.user;
      });
    },
    getAuthorityList: () => {
      return this.send("userManager.getAuthorityList").then(function (a) {
        return a.params;
      });
    },
    addUser: (user: string) => {
      return this.send("userManager.addUser", { user: user });
    },
    addUserPlain: (user: string) => {
      return this.send("userManager.addUserPlain", { user: user });
    },
    deleteUser: (user: string) => {
      return this.send("userManager.deleteUser", { name: user });
    },
    modifyPassword: (name: string, pwd: string, pwdOld: string) => {
      return this.send("userManager.modifyPassword", {
        name: name,
        pwd: pwd,
        pwdOld: pwdOld,
      });
    },
    modifyUser: (name: string, user: unknown) => {
      return this.send("userManager.modifyUser", { name: name, user: user });
    },
    addGroup: (group: unknown) => {
      return this.send("userManager.addGroup", { group: group });
    },
    deleteGroup: (name: string) => {
      return this.send("userManager.deleteGroup", { name: name });
    },
    modifyGroup: (name: string, group: unknown) => {
      return this.send("userManager.modifyGroup", { name: name, group: group });
    },
    getUserInfoAll: () => {
      return this.send<{ users: unknown }>("userManager.getUserInfoAll").then(
        function (a) {
          return a.params.users;
        }
      );
    },
    getPwdValidPeriod: (name: string) => {
      return this.send("userManager.getPwdValidPeriod", { name: name }).then(
        function (a) {
          return a.params;
        }
      );
    },
    getGroupInfoAll: () => {
      return this.send("userManager.getGroupInfoAll").then(function (a) {
        return a.params;
      });
    },
    getErrorNo: () => {
      return this.send<{ error: unknown }>("userManager.getErrorNo").then(
        function (a) {
          return a.params.error;
        }
      );
    },
    onvifaddUser: (user: unknown) => {
      return this.send("userManager.onvifaddUser", { user: user });
    },
    onvifdeleteUser: (name: string) => {
      return this.send("userManager.onvifdeleteUser", { name: name });
    },
    onvifmodifyPassword: (name: string, pwd: string, pwdOld: string) => {
      return this.send("userManager.onvifmodifyPassword", {
        name: name,
        pwd: pwd,
        pwdOld: pwdOld,
      });
    },
    onvifmodifyUser: (name: string, user: unknown) => {
      return this.send("userManager.onvifmodifyUser", {
        name: name,
        user: user,
      });
    },
    getCaps: () => {
      return this.send<{ caps: object }>("userManager.getCaps").then(function (
        a
      ) {
        return a.params.caps || {};
      });
    },
    // attach: (proc: any) => {
    //   return this.sendattachSec("userManager.attachRefreshToken", { proc: proc })
    //     .then(function (a) {
    //       return a && a.params;
    //     });
    // },
    // detach: (SID: any, proc: any) => {
    //   return this.senddetachSec("userManager.detachRefreshToken", {
    //     SID: SID,
    //     proc: proc,
    //   });
    // }
  };
}
