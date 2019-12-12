import { dateGenerator } from "helpers";

const exams = [];
for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
  const unique = Math.floor(Math.random() * 100);
  exams.push({
    id: unique,
    subject: `Subject ${unique}`,
    subjectID: `SubjectID ${unique}`,
    startDate: dateGenerator(2019),
    endDate: dateGenerator(2019),
    noShift: Math.floor(Math.random() * 10)
  });
}

export default exams;
