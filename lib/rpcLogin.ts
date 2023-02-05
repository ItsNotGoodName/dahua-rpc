import { Code, RPCBase } from "./rpcBase";
import md5 from "md5";

function getAuth(
  username: string,
  password: string,
  params: { encryption: string; random: string; realm: string }
) {
  switch (params.encryption) {
    case "Basic":
      return Buffer.from(username + ":" + password).toString("base64");
    case "Default":
      return md5(
        username +
          ":" +
          params.random +
          ":" +
          md5(username + ":" + params.realm + ":" + password).toUpperCase()
      ).toUpperCase();
    default:
      return password;
  }
}

/**
 * Login manager for logging in and keeping the connection alive.
 */
export class RPCLogin {
  _username = "";
  _password = "";
  _retries = 0;
  _keepAliveID?: NodeJS.Timeout;

  constructor(readonly rpcBase: RPCBase) {}

  _keepAliveFunc = (() => {
    return this.rpcBase.Global.keepAlive()
      .then(() => {
        this._retries = 0;
      })
      .catch((b) => {
        if (b.error && b.error.code && b.error.code === 287637504)
          return clearInterval(this._keepAliveID);
        else {
          // TODO: publish reconnect event
          this._login().catch(function (e) {
            console.log(e);
          });
        }
      });
  }).bind(this);

  logout() {
    clearInterval(this._keepAliveID);
    this._keepAliveID = undefined;
    return this.rpcBase.Global.logout();
  }

  login(
    username: string,
    password: string,
    loginType = "Direct",
    clientType?: string
  ) {
    this._username = username;
    this._password = password;
    return this._login(loginType, clientType);
  }

  _login(loginType = "Direct", clientType?: string) {
    return new Promise<null>((resolve, reject) => {
      this.rpcBase.Global.firstLogin(this._username, { loginType }, clientType)
        .then((res) => {
          if (
            !(
              res &&
              res.error &&
              (res.error.code == 268632079 || res.error.code === 401)
            )
          ) {
            if (res && res.error && res.error.code === 400) {
              return reject(Code.USER_NOT_VALID);
            }

            if (res && res.error && res.error.code === 486) {
              return reject(Code.BUSY);
            }

            return reject();
          }

          this.rpcBase.Global.secondLogin(
            this._username,
            getAuth(this._username, this._password, res.params),
            {
              loginType:
                res.params.encryption === "WatchNet" ? "WatchNet" : loginType,
              authorityType: res.params.encryption,
            }
          )
            .then(() => {
              clearInterval(this._keepAliveID);
              this._keepAliveID = setInterval(this._keepAliveFunc, 60000);
              resolve(null);
            })
            .catch(function (e) {
              if (
                !(e && e.params && e.params.error) &&
                e &&
                e.error &&
                e.error.code
              )
                if (e.params) {
                  reject(e.params);
                } else {
                  reject(e && e.error && e.error.code);
                }
              else {
                switch (e && e.params && e.params.error) {
                  case "UserNotValidt":
                    reject(Code.USER_NOT_VALID);
                    break;
                  case "PasswordNotValid":
                    reject(Code.PASSWORD_NOT_VALID);
                    break;
                  case "InBlackList":
                    reject(Code.IN_BLACK_LIST);
                    break;
                  case "HasBeedUsed":
                    reject(Code.HAS_BEEN_USED);
                    break;
                  case "HasBeenLocked":
                    reject(Code.HAS_BEEN_LOCKED);
                    break;
                  default:
                    reject();
                }
              }
            });
        })
        .catch(reject);
    });
  }
}
