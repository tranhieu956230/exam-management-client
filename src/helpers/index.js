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

const handleFileUpload = event => {
  let data = event.target.files[0];
  let reader = new FileReader();
  reader.onload = event => {
    data = new Uint8Array(event.target.result);
    const workbook = XLSX.read(data, { type: "array" });
    const firstSheet = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheet];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
  };
  reader.readAsArrayBuffer(data);
};