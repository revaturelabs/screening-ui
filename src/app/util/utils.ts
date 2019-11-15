export function stringifyDate(date): string {
  let dateString: string;

  if (date.hasOwnProperty("year") === false) {
    dateString = date;
  } else {
    dateString = [date.year, date.month, date.day].join("-");
  }

  return [dateString, "T00:00:00.0"].join("");
}
