import { dateGenerator, timeGenerator } from "helpers";

const exams = [];
for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
  const unique = Math.floor(Math.random() * 100000);
  exams.push({
    id: unique,
    subject: `Subject ${unique}`,
    timeStart: timeGenerator(),
    timeEnd: timeGenerator(),
    date: dateGenerator(2019)
  });
}

export default exams;
