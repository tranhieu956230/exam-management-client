import { dateGenerator } from "helpers";

const students = [];
const clss = ["K62CA", "K62J", "K63M", "K61A", "K61B", "K63CA1", "K64CA3"];

for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
  const unique = Math.floor(Math.random() * 100);
  students.push({
    id: unique,
    name: `Student ${unique}`,
    dob: dateGenerator(),
    cls: clss[Math.floor(Math.random() * clss.length)]
  });
}

export default students;
