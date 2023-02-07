import { expect } from "chai";
import { dayInBitmap, daysFromBitmap } from "../lib/util";

describe("util", function () {
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
