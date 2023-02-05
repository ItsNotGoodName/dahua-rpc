import { RPCBase } from "../rpcBase";

export function PrivacyMasking(this: RPCBase) {
  return {
    getPrivacyMasking: (channel?: number, offset?: number, limit?: number) => {
      return this.send("PrivacyMasking.getPrivacyMasking", {
        channel: channel || 0,
        offset: offset || 0,
        limit: limit || 24,
      });
    },
    setPrivacyMasking: (channel?: number, PrivacyMasking?: unknown) => {
      return this.send("PrivacyMasking.setPrivacyMasking", {
        channel: channel || 0,
        PrivacyMasking: PrivacyMasking,
      });
    },
    getPrivacyMaskingEnable: (channel?: number) => {
      return this.send("PrivacyMasking.getPrivacyMaskingEnable", {
        channel: channel || 0,
      });
    },
    setPrivacyMaskingEnable: (channel?: number, Enable?: unknown) => {
      return this.send("PrivacyMasking.setPrivacyMaskingEnable", {
        channel: channel || 0,
        Enable: Enable,
      });
    },
    gotoPrivacyMasking: (channel?: number, index?: number) => {
      return this.send("PrivacyMasking.gotoPrivacyMasking", {
        channel: channel || 0,
        index: index || 0,
      });
    },
    deletePrivacyMasking: (channel?: number, index?: number) => {
      return this.send("PrivacyMasking.deletePrivacyMasking", {
        channel: channel || 0,
        index: index || 0,
      });
    },
    clearPrivacyMasking: (channel?: number) => {
      return this.send("PrivacyMasking.clearPrivacyMasking", {
        channel: channel || 0,
      });
    },
  };
}
