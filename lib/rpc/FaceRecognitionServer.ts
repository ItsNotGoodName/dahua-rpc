import { RPCBase } from "../rpcBase";

export function FaceRecognitionServer(this: RPCBase) {
  const instance = this.sendSetup("faceRecognitionServer.factory.instance");
  return {
    instance,
    createGroup: (
      GroupName?: string,
      GroupType?: string,
      GroupDetail?: string
    ) => {
      return instance().then((d) => {
        return this.send(
          "faceRecognitionServer.createGroup",
          {
            group: {
              GroupID: "",
              GroupName: GroupName || "",
              GroupType: GroupType || "BlackListDB",
              GroupDetail: GroupDetail || "",
            },
          },
          { object: d.result }
        ).then(function (a) {
          return a.params;
        });
      });
    },
    deleteGroup: (groupID: unknown) => {
      return instance().then((b) => {
        return this.send(
          "faceRecognitionServer.deleteGroup",
          { groupID: groupID },
          { object: b.result }
        );
      });
    },
    findGroup: (groupID?: string) => {
      return instance().then((b) => {
        return this.send<{ GroupList: unknown }>(
          "faceRecognitionServer.findGroup",
          { groupID: groupID || "" },
          { object: b.result }
        ).then(function (a) {
          return a.params.GroupList;
        });
      });
    },
    setGroup: (groupID: unknown, channel?: number) => {
      return instance().then((c) => {
        return this.send(
          "faceRecognitionServer.setGroup",
          { groupID: groupID, channel: channel || 0 },
          { object: c.result }
        );
      });
    },
    modifyGroup: (group: unknown) => {
      return instance().then((b) => {
        return this.send(
          "faceRecognitionServer.modifyGroup",
          { group: group },
          { object: b.result }
        );
      });
    },
    startFind: (person: unknown, condition: unknown, channel?: number) => {
      return instance().then((d) => {
        return this.send(
          "faceRecognitionServer.startFind",
          { person: person, condition: condition, channel: channel || 0 },
          { object: d.result }
        ).then(function (a) {
          return a.params;
        });
      });
    },
    doFind: (
      token: unknown,
      count: unknown,
      beginNumber?: number,
      NeedData?: number
    ) => {
      return instance().then((e) => {
        return this.send<{ results: unknown }>(
          "faceRecognitionServer.doFind",
          {
            condition: {
              token: token,
              count: count,
              NeedData: NeedData || 1,
              beginNumber: beginNumber || 0,
            },
          },
          { object: e.result }
        ).then(function (a) {
          return a.params.results;
        });
      });
    },
    stopFind: (token: unknown) => {
      return instance().then((b) => {
        return this.send(
          "faceRecognitionServer.stopFind",
          { token: token },
          { object: b.result }
        ).then(function (a) {
          return a.params;
        });
      });
    },
    deletePerson: (person: unknown) => {
      return instance().then((b) => {
        return this.send(
          "faceRecognitionServer.delete",
          { person: person },
          { object: b.result }
        ).then(function (a) {
          return a.params;
        });
      });
    },
    reAbstract: (person: unknown) => {
      return this.send("faceRecognitionServer.reAbstract", {
        person: person,
      }).then(function (a) {
        return a.params;
      });
    },
    groupReAbstract: (GroupID: unknown, Token: unknown) => {
      return this.send("faceRecognitionServer.groupReAbstract", {
        GroupID: GroupID,
        Token: Token,
      }).then(function (a) {
        return a.params;
      });
    },
    stopGroupReAbstract: (token: unknown) => {
      return this.send("faceRecognitionServer.stopGroupReAbstract", {
        token: token,
      });
    },
    stopReAbstract: () => {
      return this.send("faceRecognitionServer.stopReAbstract");
    },
    getGroupSpaceInfo: () => {
      return this.send("faceRecognitionServer.getGroupSpaceInfo").then(
        function (a) {
          return a.params;
        }
      );
    },
    getAppendToken: () => {
      return this.send("faceRecognitionServer.getAppendToken").then(function (
        a
      ) {
        return a.params;
      });
    },
  };
}
