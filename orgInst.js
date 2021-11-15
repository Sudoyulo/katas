const organizeInstructors = function (instructors) {
  var semester = {};

  for (let i = 0; i < instructors.length; i++) {
    if (semester[instructors[i].course] === undefined) {
      semester[instructors[i].course] = [instructors[i].name];
    } else {
      semester[instructors[i].course].push(instructors[i].name);
    }
  }
  return semester;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);
