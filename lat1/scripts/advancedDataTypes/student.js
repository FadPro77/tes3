const students = [
  {
    name: "David Vincent Gurning",
    nickname: "David",
    class: "FSW-1",
    address: {
      province: "North Sumatera",
      city: "Medan",
    },
    education: {
      bachelor: "Universitas Teknologi Del",
    },
  },
  {
    name: "Yudriqul Aulia",
    nickname: "Yudi",
    class: "FSW-1",
    address: {
      province: "Jambi",
      city: "Jambi",
    },
    education: {
      bachelor: "Universitas Jambi",
    },
  },
  {
    name: "Iko Indra Gunawan",
    nickname: "Iko",
    class: "FSW-1",
    address: {
      province: "East Java",
      city: "Surabaya",
    },
    education: {
      bachelor: "UPN Veteran East Java",
    },
  },
  {
    name: "Arswendo Erza Sadewa",
    nickname: "Erza",
    class: "FSW-1",
    address: {
      province: "Lampung",
      city: "Lampung",
    },
    education: {
      bachelor: "Universitas Lampung",
    },
  },
  {
    name: "Dhiya Al Faruq",
    nickname: "Faruq",
    class: "FSW-1",
    address: {
      province: "East Java",
      city: "Jember",
    },
    education: {
      bachelor: "Universitas Jember",
    },
  },
  {
    name: "Fariq Abdhe Manaf",
    nickname: "Fariq",
    class: "FSW-1",
    address: {
      province: "East Java",
      city: "Jember",
    },
    education: {
      bachelor: "Universitas Jember",
    },
  },
];

// There are three students, David, Yudi, and Iko. David is from Medan, North Sumatera. Yudi is from Jambi, Jambi. And Iko is from Surabaya, East Java.

//answer
console.log(`
    There are three students, ${students[0].nickname}, ${students[1].nickname}, and ${students[2].nickname}.
    ${students[0].nickname} is from ${students[0].address.city}, ${students[0].address.province}.
    ${students[1].nickname} is from ${students[1].address.city}, ${students[1].address.province}.
    ${students[2].nickname} is from ${students[2].address.city}, ${students[2].address.province}.
`);

// My name is David Vincent Gurning, used to called David. I am from Medan, North Sumatera. And I am student of Universitas Teknologi Del.
// My name is Yudriqul Aulia, used to called Yudi. I am from Jambi, Jambi. And I am student of Universitas Jambi.
// My name is Iko Indra Gunawan, used to called Iko. I am from Surabaya, East Java. And I am student of UPN Veteran East Java.

//answer
students.forEach((student) => {
  console.log(
    `My name is ${student.name}, used to be called ${student.nickname}. I am from ${student.address.city}, ${student.address.province}. And I am a student of ${student.education.bachelor}.`
  );
});

students.map((student) => {
  const describeStudent = `My name is ${student.name}, used to be called ${student.nickname}. I am from ${student.address.city}, ${student.address.province}. And I am a student of ${student.education.bachelor}.`;
  console.log(describeStudent);
});

//print all from east java
// My name is Iko Indra Gunawan, used to called Iko. I am from Surabaya, East Java. And I am student of UPN Veteran East Java.
students
  .filter((student) => student.address.province === "East Java")
  .map((student) => {
    const describeStudent = `My name is ${student.name}, used to be called ${student.nickname}. I am from ${student.address.city}, ${student.address.province}. And I am a student of ${student.education.bachelor}.`;
    console.log(describeStudent);
  });

//ascending order
// My name is Iko Indra Gunawan, used to called Iko. I am from Surabaya, East Java. And I am student of UPN Veteran East Java.
students
  .filter((student) => student.address.province === "East Java")
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((student) => {
    const describeStudent = `My name is ${student.name}, used to be called ${student.nickname}. I am from ${student.address.city}, ${student.address.province}. And I am a student of ${student.education.bachelor}.`;
    console.log(describeStudent);
  });
