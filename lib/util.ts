import type { FindFileCondition } from "./rpc/MediaFileFind";

export function dayInBitmap(bitmap: number, day: number): boolean {
  return !!((bitmap >>> 1) & (1 << (day - 1)));
}

export function daysFromBitmap(bitmap: number, maxDays = 32): number[] {
  const days = [];
  for (let day = 1; day <= maxDays; day++) {
    if ((bitmap >>> 1) & (1 << (day - 1))) {
      days.push(day);
    }
  }

  return days;
}

export function toTimestamp(date: Date): string {
  return date.toLocaleString("sv-SE");
}

export function fromTimestamp(timestamp: string): Date {
  const offset = 0 - new Date().getTimezoneOffset() / 60;
  return new Date(
    timestamp.substring(0, 10) +
      "T" +
      timestamp.substring(11) +
      ".000" +
      (offset > 0 ? "+" : "-") +
      Math.abs(offset).toString().padStart(2, "0") +
      ":00"
  );
}

export function createFindFileCondition(
  a: "All" | "Timing" | "Event" | "Alarm" | "Manual" | "Picture",
  i: { Channel: number; Dirs: string[]; StartTime: string; EndTime: string }
): FindFileCondition {
  const condition: FindFileCondition = {
    Channel: i.Channel,
    StartTime: i.StartTime,
    EndTime: i.EndTime,
    Dirs: i.Dirs,
    Redundant: "Exclusion",
    Order: "Ascent",
    Types: ["dav"],
    Flags: [""],
    Events: null,
  };

  switch (a) {
    case "All":
      condition.Types = ["dav"];
      condition.Flags = ["Timing", "Event", "Event", "Manual"];
      break;
    case "Timing":
      condition.Types = ["dav"];
      condition.Flags = ["Timing"];
      break;
    case "Event":
      condition.Types = ["dav"];
      condition.Flags = ["Event"];
      break;
    case "Alarm":
      condition.Types = ["dav"];
      condition.Flags = ["Event"];
      break;
    case "Manual":
      condition.Types = ["dav"];
      condition.Flags = ["Manual"];
      break;
    case "Picture":
      condition.Types = ["jpg"];
      condition.Flags = ["Timing", "Event", "Event"];
  }

  return condition;
}
