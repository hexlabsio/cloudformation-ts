export function cron<A extends string, B extends string, C extends string, D extends string, E extends string, F extends string>(minutes: A, hours: B, dayOfMonth: C, month: D, dayOfWeek: E, year: F): `cron(${A} ${B} ${C} ${D} ${E} ${F})` {
  return `cron(${minutes} ${hours} ${dayOfMonth} ${month} ${dayOfWeek} ${year})`
}
