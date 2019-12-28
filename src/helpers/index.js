import XLSX from "xlsx";

export const dateGenerator = year => {
  let day = Math.floor(Math.random() * 30) + 1;
  let month = Math.floor(Math.random() * 12) + 1;
  if (!year) year = Math.floor(Math.random() * 5) + 1997;
  month = padString(month, "0", 2);
  day = padString(day, "0", 2);

  return [day, month, year].join("/");
};

export const getTodayDate = () => {
  let today = new Date();
  const dd = padString(today.getDate(), "0", 2);
  const mm = padString(today.getMonth(), "0", 2);
  const yyyy = padString(today.getFullYear(), "0", 4);
  return [dd, mm, yyyy].join("/");
};

export const isValidExcel = (headers, validators) => {
  for (let i = 0; i < headers.length; i++) {
    if (headers[i] !== validators[i]) return false;
  }
  return true;
};

const padString = (initialString, char, length) => {
  let res = initialString.toString();
  for (let i = 0; i < length - res.length; i++) {
    res = char + res;
  }
  return res;
};

export const pad0 = str => {
  if (Number(str) < 10) return `0${str}`;
  return str;
};

export const timeGenerator = () => {
  let cur = new Date();
  let time = cur.getTime();
  let date = new Date(time + Math.floor(Math.random() * 10000000 + 1000));
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return `${hours}:${minutes}:00`;
};
