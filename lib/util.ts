export function dayInBitmap(bitmap: number, day: number) {
  return !!((bitmap >>> 1) & (1 << (day - 1)));
}

export function daysFromBitmap(bitmap: number, maxDays = 32) {
  const days = [];
  for (let day = 1; day <= maxDays; day++) {
    if ((bitmap >>> 1) & (1 << (day - 1))) {
      days.push(day);
    }
  }

  return days;
}
