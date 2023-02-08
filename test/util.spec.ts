import { expect } from "chai";
import {
  toTimestamp,
  dayInBitmap,
  daysFromBitmap,
  fromTimestamp,
} from "../lib/util";

describe("util", function () {
  describe("bitmap", function () {
    const bitmap = 250;
    const days = [1, 3, 4, 5, 6, 7];

    it("dayInBitmap", function () {
      expect(dayInBitmap(bitmap, 2)).to.be.false;
      expect(dayInBitmap(bitmap, 20)).to.be.false;
      expect(dayInBitmap(bitmap, 31)).to.be.false;
      for (const day of days) {
        expect(dayInBitmap(bitmap, day)).to.be.true;
      }
    });

    it("daysFromBitmap", function () {
      expect(daysFromBitmap(bitmap)).deep.eq(days);
    });
  });

  describe("timestamp", function () {
    [
      "2023-02-06 00:00:00",
      "2023-02-06 03:09:09",
      "2023-02-06 23:59:59",
    ].forEach((timestamp) => {
      it(timestamp, function () {
        expect(toTimestamp(fromTimestamp(timestamp))).to.be.eq(timestamp);
      });
    });
  });
});
