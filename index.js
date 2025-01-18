// 1
const users = [
    {name: "Markiian"},
    {name: "Inna"},
    {name: "Vova"}
  ];
  
  const names = users.map(user => user.name);
  
  console.log(names);
// 1  

// 2
const newUsers = [
    {name: "Zlata", eyeColor: "blue"},
    {name: "Inna", eyeColor: "brown"},
    {name: "Vova", eyeColor: "blue"},
    {name: "Dasha", eyeColor: "green"}
  ];
  
  const filterByEyeColor = (newUsers, color) => newUsers.filter(user => user.eyeColor === color);
  
  const blueEyedUsers = filterByEyeColor(newUsers, "blue");
  console.log(blueEyedUsers);
  
// 2

// 3
const newUsers1 = [
    {name: "John", gender: "male"},
    {name: "Inna", gender: "female"},
    {name: "Tania", gender: "female"},
    {name: "Bob", gender: "male"}
  ];
  
  const getNamesByGender = (newUsers1, gender) => 
    newUsers1.filter(user => user.gender === gender).map(user => user.name);
  
  const femaleNames = getNamesByGender(newUsers1, "female");
  console.log(femaleNames);
  
// 3

// 4
const newUsers2 = [
    {name: "Markiian", isActive: true},
    {name: "Alice", isActive: false},
    {name: "Inna", isActive: false},
    {name: "Vova", isActive: true}
  ];

  const inactiveUsers = newUsers2.filter(user => !user.isActive);
  
  console.log(inactiveUsers);
// 4


// 5
const newUsers3 = [
    {name: "Markiian", email: "markiian@gmail.com"},
    {name: "Inna", email: "inna@gmail.com"},
    {name: "Vova", email: "vova@gmail.com"}
  ];
  
  const getUserByEmail = (newUsers3, email) => newUsers3.find(user => user.email === email);
  
  const user = getUserByEmail(newUsers3, "inna@gmail.com");
  console.log(user);

// 5

// 6
const newUsers4 = [
    {name: "Markiian", age: 12},
    {name: "Inna", age: 40},
    {name: "Vova", age: 41},
    {name: "Nastya", age: 13}
  ];
  
  const getUsersByAgeRange = (newUsers4, min, max) => 
    newUsers4.filter(user => user.age >= min && user.age <= max);
  
  const ageRangeUsers = getUsersByAgeRange(newUsers4, 10, 30);
  console.log(ageRangeUsers);

// 6