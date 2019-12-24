const subjects = [];
for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
  const unique = Math.floor(Math.random() * 1000000);
  subjects.push({
    id: unique,
    name: `Subject ${unique}`,
    lecturer: `Lecturer ${unique}`,
    credit: Math.floor(Math.random() * 3) + 2,
    noParticipants: Math.floor(Math.random() * 50) + 10
  });
}

export default subjects;
