const rooms = [];

for (let i = 0; i < Math.floor(Math.random() * 100 + 30); i++) {
  const unique = Math.floor(Math.random() * 100000);
  rooms.push({
    id: `${unique}`,
    room: `Room ${unique}`,
    building: `Building ${unique % 10}`,
    noPc: Math.floor(Math.random() * 10) + 30,
    condition: Math.floor(Math.random() * 2) ? "Còn trống" : "Đầy"
  });
}

export default rooms;
