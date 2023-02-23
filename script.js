
// let name;
// let Name;
// let NAME;
// let first_name;
// let firstname;


/*
тут можно указать мноострочный коментарий
 */

let userName;
let userSurname;
let userYear;
const currentYear = 2023;
let side;


while (true) {

   userName = prompt(`Вкажіть Ваше ім'я `);

  if (userName === null) {
   continue;
  }
  alert (`Привіт,  ${userName}!`);
  break;
}

while (true) {

   userYear = prompt(`Вкажіть Ваш рік нароження `);
  if (userYear === null) {
    continue;
  }
  if (isNaN(userYear)) {
    alert(`Введить Ваш рік народження просто числом`);
    continue;
  }
  if(userYear > currentYear ){
    alert(`Ви ще не народились!`);
    continue
  }

  alert (`Ваш вік,  ${currentYear - userYear}!`);
  break;
}

while (true) {

  side = prompt(`Вкажіть довжину сторони квадрату. Зараз швидко порухую для Вас його периметр. `);

  if (side === null) {
    continue;
  }
  if (isNaN(side)) {
    alert(`Введить сторону квадрата просто числом`);
    continue;
  }
  if(side < 0){
    alert(`Потрібно позитивне число`);
    continue
  }

  alert (`Периметр Вашого квадрата,  ${side * 4}!`);
  break;
}




