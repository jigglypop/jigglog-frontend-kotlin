function leftPad(value: number) {
  if (value >= 10) return value;
  return `0${value}`;
}

export function dateStringFormat(d: Date): string {
  d.setHours(d.getHours());
  return [
    d.getFullYear() + "년 ",
    leftPad(d.getMonth() + 1) + "월 ",
    leftPad(d.getDate()) + "일 ",
    d.getHours() + "시 ",
    d.getMinutes() + "분 ",
  ].join(" ");
}
