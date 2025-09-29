function Person(name, position, office, age, startDate) {
  this.name = name;
  this.position = position;
  this.office = office;
  this.age = age;
  this.startDate = startDate;
}

let Persons = [
  new Person("Airi Satou", "Accountant", "Tokyo", 33, "2008/11/28"),
  new Person(
    "Angelica Ramos",
    "Chief Executive Officer (CEO)",
    "London",
    47,
    "2009/10/09"
  ),
  new Person(
    "Ashton Cox",
    "Junior Technical Author",
    "San Francisco",
    66,
    "2009/01/12"
  ),
  new Person("Bradley Greer", "Software Engineer", "London", 41, "2012/10/13"),
  new Person(
    "Brenden Wagner",
    "Software Engineer",
    "San Francisco",
    28,
    "2011/06/07"
  ),
  new Person(
    "Brielle Williamson",
    "Integration Specialist",
    "New York",
    61,
    "2012/12/02"
  ),
  new Person("Bruno Nash", "Software Engineer", "London", 38, "2011/05/03"),
  new Person("Caesar Vance", "Pre-Sales Support", "New York", 21, "2011/12/12"),
  new Person("Cara Stevens", "Sales Assistant", "New York", 46, "2011/12/06"),
  new Person(
    "Cedric Kelly",
    "Senior Javascript Developer",
    "Edinburgh",
    22,
    "2012/03/29"
  ),
];

function getData(data) {
  const tbody = document.querySelector("#tb");
  tbody.innerHTML = "";
  data.forEach((emp) => {
    let row = `<tr>
    <td>${emp.name}</td>
    <td>${emp.position}</td>
    <td>${emp.office}</td>
    <td>${emp.age}</td>
    <td>${emp.startDate}</td>
</tr>`;
    tbody.innerHTML += row;
  });
}
function sortTable(key, ascending) {
  let sortedData = [...Persons];
  sortedData.sort((a, b) => {
    let A = a[key];
    let B = b[key];

    if (key === "age") {
      return ascending ? A - B : B - A;
    } else if (key === "startDate") {
      return ascending ? new Date(A) - new Date(B) : new Date(B) - new Date(A);
    } else {
      return ascending ? A.localeCompare(B) : B.localeCompare(A);
    }
  });
  getData(sortedData);
}

getData(Persons);
