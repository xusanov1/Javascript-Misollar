"use strict";

// for boyicha misollar :

// 1-misol

// let k = prompt("k sonini kiriting: ");  
// let n = prompt("n sonini kiriting: ");  

// for (let i = 1; i <= n; i++) {
//     console.log(`Javob ${k}`);
// }

// 2-misol

// let a = 2;
// let b = 7; 

// for (let i = a; i <= b; i++) {
//   console.log(i);
// }

// 3-misol

// for (let i = 1; i <= 20; i++) {
//     if (i >= 10){
//         continue;
//     }
//     console.log(i);
// }

// 4-misol

// for (let i = 1; i <= 20; i++) {
//     if (i == 10){
//         continue;
//     }
//     console.log(i);
// }

// 5-misol

// let text = "peach";
// for (let i = 0; i < fLen; i++) {
//   text += "peach" + fruits[i] + "peach";
// }
// text += "peach";

// 6-misol

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }

// 7-misol

// let text = "";
// for (let i = 0; i < 5; i++) {
//   if (i == 3) continue;
//   text += i + "<br>";
// }

// 8-misol

// let text = "";
// for (let i = 0; i < 5; i++) {
//   if (i == 3) break;
//   text += i + "<br>";
// }


////////////////////////////////////////////////////////////////////////////////////////////////


// while and do while boyicha misollar :

// 1-misol

// let n = 0;

// while (n <= 10) {
//     n++;
//     console.log(n);
// }

// 2-misol

// do{
//     n++;
//     console.log(n);
// }while (n <= 20);

// 3-misol

// let text = "";
// let i = 0;
// do {
//   text += i + "text";
//   i++;
// }
// while (i < 5);

// 4-misol

// const correctUsername = "admin";
// const correctPassword = "password";
// let isLoggedIn = false;

// console.log("welcome to the authentication system...");

// while (!isLoggedIn){
//     let username = prompt("Enter username");
//     let password = prompt("Enter password");

//     if (username === correctUsername && password === correctPassword){
//         isLoggedIn = true;
//         console.log("login succesful...");
//     }
//     else {
//         alert("invalid username or password");
//     }
// }

// alert("you are now logged in"); 

////////////////////////////////////////////////////////////////////////////////////////////////

// switch boyicha misollar :

// 1-misol calculator:

// let operand1 = +prompt("Birinchi sonni kiriting: ");
// let operator =  prompt("amaln kiriting kiriting: ");
// let operand2 = +prompt("Ikkinchi sonni kiriting: ");
// let result ;

// switch (operator) {
//     case "/":
//         result = operand1 / operand2;
//         break;
//     case "*":
//         result = operand1 * operand2;
//         break;
//     case "-":
//         result = operand1 - operand2;
//         break;
//     case "+":
//         result = operand1 + operand2 *1;
//         break;
//     default:
//         result = "invalid opertor"
// }

// alert(`result: ${result}`)


// 2-misol 


// function aniqlovchiFasl(oyRaqami) {
//     let fasl;
//     switch (oyRaqami) {
//         case 1:
//             console.log("Qish - Yanvar");
//             break;
//         case 2:
//             console.log("Qish - Fevral");
//             break;
//         case 3:
//             console.log("Bahor - Mart");
//             break;
//         case 4:
//             console.log("Bahor - Aprel");
//             break;
//         case 5:
//             console.log("Bahor - May");
//             break;
//         case 6:
//             console.log("Yoz - Iyun");
//             break;
//         case 7:
//             console.log("Yoz - Iyul");
//             break;
//         case 8:
//             console.log("Yoz - Avgust");
//             break;
//         case 9:
//             console.log("Kuz - Sentabr");
//             break;
//         case 10:
//             console.log("Kuz - Oktabr");
//             break;
//         case 11:
//             console.log("Kuz - Noyabr");
//             break;
//         case 12:
//             console.log("Qish - Dekabr");
//             break;
//         default:
//             fasl = "Noto'g'ri oy raqami";
//     }
//     return fasl;
// }

// let oyRaqami = prompt("Oy raqamini kiriting: ")*1;
// let aniqFasl = aniqlovchiFasl(oyRaqami);
// console.log(aniqFasl);

/////////////////////////////////////////////////////////////////////////////////////////////////

// if else boyicha misollar :

// 1-misol

// function operatorTopuvchi(raqam){
//     let operator;

//     if(raqam == 90 || raqam == 91){
//         return "Beeline";
//     }
//     else if(raqam == 93 || raqam == 94){
//         return "Ucell";
//     }
//     else if(raqam == 95 || raqam == 99){
//         return "Uzmobile";
//     }
//     else if(raqam == 33){
//         return "Humans";
//     }
//     else if(raqam == 71 || raqam == 70){
//         return "Uzbektelecom";
//     }
//     else if(raqam == 78){
//         return "Sarkor Telekom";
//     }
//     else{
//         operator = "Noto'g'ri operator";
//     }
// }

// let raqam = prompt("Operatorni kiriting: ");

// let operator = operatorTopuvchi(raqam);

// console.log(operator);

///////////////////////////////////////////////////////////

// 2-misol

// let count = 0;
// let a = prompt("A ni kiriting: ");
// let b = prompt("B ni kiriting: ");
// let c = prompt("C ni kiriting: ");

// if(a>0){
//     count++;

//     if(b<0){
//         count++;

//         if(c>0){
//             count++;
//             console.log(count);
//         }
//     }
// }

// console.log(count)

//////////////////////////////////////////////////

// 3-misol

// let manfiy = 0
// let musbat = 0;
// let a = prompt("A ni kiriting: ");
// let b = prompt("B ni kiriting: ");
// let c = prompt("C ni kiriting: ");

// if (a > 0) {
//     musbat++;

//     if (b > 0) {
//         musbat++;

//         if (c > 0) {
//             musbat++;
//         }
//     }
// }

// if (a < 0) {
//     manfiy++;

//     if (b < 0) {
//         manfiy++;

//         if (c < 0) {
//             manfiy++;
//         }
//     }
// }

// console.log("musbatlar"+musbat, "manfiylar"+manfiy);

///////////////////////////////////////////////////////

// 4-misol


// let son = prompt("Sonni kiriting: ");

// if(son>0){
//     son++;
//     console.log(son);
// }
// else if(son<0){
//     let km = son-2;
//     console.log(son);
// }
// else if(son==0){
//     son = 10
//     console.log(son);
// }

//////////////////////////////////////////////////////

// 5-misol

// let son = prompt("Sonni kiriting: ");

// if(0<son){
//     son++;
//     console.log(son);
// }
// else{
//     let km = son-2;
//     console.log(km);
// }

//////////////////////////////////////////////////////

// 6-misol


// 1-misol

// let son = prompt("Sonni kiriting: ");

// if(0<son){
//     son++;
//     console.log(son);
// }
// else {
//     console.log(son);
// }


/////////////////////////////////////////////////////////////////////////////////////////////////

// function boyicha misollar :

// 1-misol function decloration

// function myFunction(params) {
//     return params;
// }

// fn()

////////////////////////////////////////////////////////

// 2-misol function expression

// const myFunction = function(params) {
//     return params;
// }

// myFunction();

///////////////////////////////////////////////////////

// 3-misol arrow function

// const myFunction = (params) => {
//     return params;
// }

// myFunction();

///////////////////////////////////////////////////////

// function myFunction(a, b) {
//     return a * b;
//   }
  
//   let x = myFunction(4, 3) * 2;


//////////////////////////////////////////////////////

// let arr = [6, 25, 91, 23, 72, 9, 18, 6];

// function findN(arr,n){
//     for (let i of arr){
//         if(i === n){
//             return true;
//         }
//     }
// }

// let result = findN(arr, 91);
// console.log(result);

//////////////////////////////////////////////////////

// let arr = [6, 25, 91, 23, 72, 9, 18, 6];

// function findAverage(arr) {

//     let average = 0;
//     for (let i = 0; i < arr.length; i++) {
//         average += arr[i];
//     }
//     average = average / arr.length; 

//     return parseInt(average);
// }

// let result = findAverage(arr);
// console.log(result);

//////////////////////////////////////////////////////

// function yoshAniqlovchi(age){
//     let year = 2024;
//     return year - age;
// }

// let age = prompt("Yoshni kiriting: ");
// let yosh = yoshAniqlovchi(age);
// console.log(yosh);

//////////////////////////////////////////////////////

// function juftToqYigindisi(n) {
//     let juftYigindi = 0;
//     let toqYigindi = 0;
  
//     for (let i = 1; i <= n; i++) {
//       if (i % 2 === 0) {
//         juftYigindi += i;
//       } else {
//         toqYigindi += i;
//       }
//     }
  
//     let nisbat = juftYigindi / toqYigindi;
//     return nisbat;
//   }
  
//   let n = 10; 
//   let juftToqNisbat = juftToqYigindisi(n);
//   console.log(`Juft va toq sonlar yig'indisi nisbati: ${juftToqNisbat}`);
  
///////////////////////////////////////////////////////////////////////////////////////////////////

// Array - bu bir nechta qiymatga ega bolishi mumkin bo'lgan  ozgaruvchi:

// const fruits = ["apple", "banana", "orange", "pineapple"];
// console.log(fruits[0]);

// array ichidagi elementni index orqali olish:

// const cars = ["malibu", "Spark", "Gentra", "Matiz"]
// let car = cars[0];
// console.log(car);

// arrayning oxirgi elemtini olish:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits[fruits.length - 1];

/////////////////

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let Len = fruits.length;

// let text = "txt";
// for (let i = 0; i < fLen; i++) {
//   text += "txt" + fruits[i] + "txt";
// }
// text += "txt";

///////////////////////////////////////////////////////////////////////////////////////////////////

// array methods:

// array uzunligini anilovchi method:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let size = fruits.length;

// pop() arraydan oxirgi elementni olib tashlaydi:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.pop();

// push() arraydan yangi element qo'shadi oxiridan:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");

// shift() arrayning birinchi elementini olib tashlaydi va qolgan barcha elementlarni pastki indeksga o'tkazadi:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();

// va olib tashlangan elentni qaytaradi:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.shift();


// unshift() massivga yangi element qo'shadi boshidan va eski elementlarni ochiradi:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon");

// concat() mavjud massivlarni birlashtirish  orqali yangi massiv yaratadi:

const myGirls = ["Madina", "Umada"];
const myBoys = ["Ozod", "JAmshid", "Otabek"];

const myChildren = myGirls.concat(myBoys);









