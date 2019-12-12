export const dateGenerator = year => {
  let day = Math.floor(Math.random() * 30) + 1;
  let month = Math.floor(Math.random() * 12) + 1;
  if (!year) year = Math.floor(Math.random() * 5) + 1997;
  month = padString(month, "0", 2);
  day = padString(day, "0", 2);

  return [day, month, year].join("/");
};

const padString = (initialString, char, length) => {
  let res = initialString.toString();
  for (let i = 0; i < length - res.length; i++) {
    res = char + res;
  }
  return res;
};
