const users = [
  { name: "Игорь", sex: "male", age: 29 },
  { name: "Михаил", sex: "male", age: 21 },
  { name: "Ирина", sex: "female", age: 25 },
  { name: "Олег", sex: "male", age: 14 },
  { name: "Марина", sex: "female", age: 23 },
  { name: "Оксана", sex: "female", age: 17 },
  { name: "Алексей", sex: "male", age: 8 },
  { name: "Антон", sex: "male", age: 47 },
  { name: "Валерия", sex: "female", age: 50 },
  { name: "Екатерина", sex: "female", age: 12 }
];

/* 
  1. В массиве users отфильтровать пользователей по возрасту так чтобы получить всех выше 18 лет.
     Найти самого младшего из них и в консоль написать сообщение: User самый молодой и ему/ей years лет
     !!!Важно понимать пол пользователя и определить в сообщении "ему" или "ей"
*/

const adultUsers = users.filter(user => user.age > 18).sort((a, b) => a.age - b.age);

const message = sortedUsers => {
  const { name, sex, age } = sortedUsers[0];
  
 if (sex === "female") {
     return `${name} самая молодая и ей ${age} лет`;
  } 

  if (sex === "male") {
     return `${name} самый молодой и ему ${age} лет`;
  }
}

// console.log(adultUsers);
// console.log(message(adultUsers));

/* 
  2. В массиве users отфильтровать всех по полу, сначала female потом male 
*/

const genderSorted = [...users].sort((a, b) => a.sex.localeCompare(b.sex));
 
// console.log(genderSorted);

/* 
  3. В массиве users найти пользователя по имени Марина
*/

const userMarina = users.find(user => user.name === "Марина");

// console.log(userMarina);

/* 
  4. Пробежаться по массиву users, если пользователь мужчина добавить 10 лет к возрасту, 
  если женщина снять 5 лет
  !!! Важно проверять что возраст не отрицательное число :)
*/

const changedAgeUsers = [...users].map(user => {

  if (user.sex === "male" && user.age > 0) {
    user.age += 10;
    return user;
  }

  if (user.sex === "female" && user.age > 5) {
    user.age -= 5;
    return user;
  }
});

// console.log(changedAgeUsers);