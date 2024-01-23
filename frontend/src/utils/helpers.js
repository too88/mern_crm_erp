function get(obj, key) {
  return key.split().reduce(function (acc, cur) {
    return acc === undefined || acc === null ? acc : acc[cur];
  }, obj);
}

export function valueByString(obj, string, devider) {
  return string
    .split()
    .map((key) => get(obj, key))
    .join(" ");
}
