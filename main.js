// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// //2000
// // 173
// console.log((-d) * e)
// console.log(++e * (++g) + (++f) - (d))
// console.log(100.15651651650646.toFixed(2))
// console.log(parseFloat(500.5256145640.toFixed(3)));
// console.log(Number.isInteger("500"));
// console.log(Number.isInteger(500));
// console.log(Number.isNaN(500 / "aa"));
// console.log(Math.round(99.4));
// console.log(Math.floor(99.89));
// console.log(Math.ceil(99.12));
// console.log(Math.trunc(99.96));
// console.log(Math.min(878, 8, 88, 4, 84, 8, 50));
// console.log(Math.max(878, 8, 88, 4, 84, 8, 50));
// console.log(Math.random())
// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// console.log(Math.min(Number.parseFloat(a, b, c, d)));

// console.log(c * a);

// console.log(Math.trunc(d));
// console.log(Math.round(d));
// console.log(Math.floor(d));
// console.log(Number.parseInt(d));

// console.log((parseInt(b) / Math.ceil(d)).toFixed(2));
// console.log(Math.round(b) / Math.ceil(d));

// let the_Name = "  Ahmed";
// console.log(the_Name);
// console.log(the_Name[4]);
// console.log(the_Name.charAt(2));
// console.log(the_Name.length);
// console.log(the_Name.trim());
// console.log(the_Name.toUpperCase());
// console.log(the_Name.toLowerCase());
// console.log(the_Name.trim() [2].toUpperCase());
// console.log(the_Name.trim().charAt(1).toUpperCase());

// let a = ("Elzero Web School");
// console.log(a.indexOf("o"));
// console.log(a.lastIndexOf("o"));
// console.log(a.indexOf("School",15));
// console.log(a.slice(0,6));
// console.log(a.repeat(4).split(" ", 4));
// console.log(a.split(" "));
// console.log(a.substring(0, 6));
// console.log(a.length);
// console.log(a.substring(a.length - 6, a.length - 4));
// console.log(a.substr(-5,2));

// let a = ("Elzero Web School");
// console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));

// console.log(a.substr(-4, 1).repeat(8).toUpperCase());

// console.log(a[0] + a[1] + a[2] + a[3] + a[4] + a[5]);

// console.log(a.split(" ",1));

// console.log(a.substr(0, 7) + a.substr(-6));

// console.log(a.charAt(0).toLocaleLowerCase(0)+ a.slice(1,length-1) + a.substr(-1).toLowerCase());

// let theName = "Mona";
// let theGender = "Female";
// let theAge = 60;

// theGender === "Female" ? console.log("Mrs") :
//     console.log("Mr");

// let result = theGender === "Female" ? "Mrs" : "Mr";

// console.log(result);

// console.log(theGender === "Female" ? "Mrs" : "Mr");

// console.log(`Hello ${theGender === "Female" ? "Mrs" : "Mr"} ${theName}`);

// console.log(`Hello ${theGender === "Female" ? "Mrs" : "Mr"} ${theName} your age is ${theAge}`)

// theAge < 20 ?
//     console.log("less than 20") :
//     theAge === 20 ? console.log(20) :
//     theAge > 20 && theAge < 60 ?
//     console.log("20 to 60") :
//     theAge === 60 ? console.log(60) :
//     theAge > 60 ? console.log("larger than 60 ") :
//     console.log("Unknown");
// let price = "";

// console.log(`this is price is ${price || 200}`);
// console.log(`this is price is ${price ?? 200}`);

// Challenge ========= 37;

// let a = 10;

// if (a < 10)
// {
//     console.log(10);
// }
// else if (a >= 10 && a <= 40)
// {
//     console.log("10 to 40");
// }
// else if (a > 40)
// {
//     console.log("> 40");
// }
// else
// {
//     console.log("Unknown");
// }

// a < 10
//     ? console.log(10)
//     : a >= 10 && a <= 40
//         ? console.log("10 to 40")
//         : a > 40
//             ? console.log(">40")
//             : console.log("Unknown");

// let st = "Elzero Web School";

// if (typeof("????") === typeof("34"))
// {
//     console.log("Good");
// }

// if ("????" === "W")
// {
//     console.log(Good);
// }

// let day = "";

// switch (day)
// {
//     case 0 :
//         console.log("saturday");
//         break;
//     case 1:
//         console.log("sunday");
//         break;
//     case 2 :
//         console.log("monday");
//         break;
//     case 3:
//         console.log("tuseday");
//         break;
//     default:
//     console.log("Unknown day");
// }

/*
  Switch Challenge
*/

// let job = "Manager";
// let salary = 0;

// if (job === "Manager") {
//     salary = 8000;
// } else if (job === "IT" || job === "Support") {
//     salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//     salary = 7000;
// } else {
//     salary = 4000;
// }

/*
  If Challenge
*/

// let holidays = 0;
// let money = 0;

// switch (holidays) {
//     case 0:
//         money = 5000;
//         console.log(`My Money is ${money}`);
//         break;
//     case 1:
//     case 2:
//         money = 3000;
//         console.log(`My Money is ${money}`);
//         break;
//     case 3:
//         money = 2000;
//         console.log(`My Money is ${money}`);
//         break;
//     case 4:
//         money = 1000;
//         console.log(`My Money is ${money}`);
//         break;
//     case 5:
//         money = 0;
//         console.log(`My Money is ${money}`);
//         break;
//     default:
//         money = 0;
//         console.log(`My Money is ${money}`);
// }

// let job = "Manager";
// let salary = 0;

// switch (job)
// {
//     case "Manager":
//         salary = 8000;
//         console.log(`Salary is ${salary}`);
//         break;

//     case "IT":
//     case "Support":
//         salary = 6000;
//         console.log(`Salary is ${salary}`);
//         break;

//     case "Developer":
//     case "Designer":
//         salary = 7000;
//         console.log(`Salary is ${salary}`);
//         break;

//     default:
//         salary = 4000;
//         console.log(`Salary is ${salary}`);
// }
// let holidays = 0;
// let money = 0;

// if (holidays === 0)
// {
//     money = 5000;
//     console.log(`My Money is ${money}`);
// }
// else if (holidays === 1 || holidays === 2)
// {
//     money = 3000;
//     console.log(`My Money is ${money}`);
// }
// else if (holidays === 3)
// {
//     money = 2000;
//     console.log(`My Money is ${money}`);
// }
// else if (holidays === 4) {
//     money = 1000;
//     console.log(`My Money is ${money}`);
// }
// else if (holidays === 5) {
//     money = 0;
//     console.log(`My Money is ${money}`);
// }
// else
// {
//     money = 0;
//     console.log(`My Money is ${money}`);
// }

// let myFriends = ["Ahmed", "Mohamed","Sayad",
//     ["Ali", "Marwan"]];

// console.log(`Hello ${myFriends[0]}`);
// console.log(`Hello ${myFriends[1]}`);
// console.log(`Hello ${myFriends[2]}`);
// console.log(`Hello ${myFriends[3]}`);
// console.log(`Hello ${myFriends[3][0]}`);
// console.log(`Hello ${myFriends[3][1]}`);
// console.log(`Hello ${myFriends[3][0][0]}`);
// console.log(`Hello ${myFriends[3][1][2]}`);

// myFriends[1] = "Manar";
// myFriends[2] = ["Aya","Shrouk"];
// myFriends[3] = "Duck";

// console.log(myFriends);

// let str = "osama";

// console.log(Array.isArray(myFriends));

// console.log(myFriends.length);

// myFriends.unshift("manal", "amal");
// console.log(myFriends);
// myFriends.push("masry", "maged");
// console.log(myFriends);
// let name = myFriends.shift();
// console.log(`My Name is ${name}`);
// let name_2 = myFriends.pop();
// console.log(`My Name is ${name_2}`);

// let myFriends = ["Ahmed", "Mohamed","Sayad",
//   "Ali", "Marwan"];

// let newFriends = ["Ragab", "Salem"];

// console.log(myFriends.slice(0, -2));

// myFriends.splice(1, 2, "mazen", "gamal");

// console.log(myFriends);

// let allFriends = myFriends.concat(newFriends,["m500","mg100e"],"hello");
// console.log(allFriends);

// console.log(allFriends.join(" @ ").toUpperCase());

// let Zero = 0;

// let Counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// my.splice(Zero, Counter+Counter, "Osama", "Elham", "Mazero", "Ahmed");

// console.log(my);

// console.log(my.slice(Counter / Counter, Counter));

// console.log(`"Elzero"`);

// console.log(my[Counter - (Counter / Counter)][Counter + (Counter / Counter)]
//   + my[Zero][Zero]);

// let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayad", 6, "Ali"];

// let onlyNames = [];

// let onlyNumbers = [];

// for (i = 0; i < myFriends.length; i++) {
//   if (typeof myFriends[i] === "string") {
//     onlyNames.push(myFriends[i]);
//   }
// }

// for (i = 0; i < myFriends.length; i++) {
//   if (typeof myFriends[i] === "number") {
//     onlyNumbers.push(myFriends[i]);
//   }
// }
// console.log(onlyNames);
// console.log(onlyNumbers);

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "IPhone"];

// let colors = ["Red", "Green", "Black"];

// for (let i = 0; i < products.length; i++) {

//   if (typeof products[i] === "number") {
//     continue;
//   }
//   console.log(products[i]);
// }

// mainloop: for (i = 0; i < products.length; i++) {
//   console.log(products[i]);

//   nestedloop: for (a = 0; a < colors.length; a++) {
//     console.log(`-${colors[a]}`);
//     if (colors[a] === "Green") {

//       break mainloop;
//     }
//   }
// }

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "IPhone"];

// let i = 0;

// for (; ;) {
//   console.log(products[i]);
//   i++;
//   if (i === products.length) break;
// }

// for (i = 0; i < products.length; i++) {
//   console.log(products[i]);
// }

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "IPhone"];

// let colors = ["Red", "Green", "Black"];

// let showCount = 3;

// document.write(`<h1>show ${showCount} Products</h1 > `);
// document.write(`<div>`);

// mainloop: for (i = 0; i < showCount; i++) {

//   document.write(`<h3>${i + 1}-${products[i]}</h3>`);

//   nestedloop: for (a = 0; a < colors.length; a++) {

//     document.write(`<p>${a + 1}-${colors[a]}</p>`);

//   }
//   document.write(`<p>${a + 1}-${colors.join(" | ")}</p>`);
// }
// document.write(`</div>`);

// console.table(["mohamed","ahmed","gamal"]);
// console.error("error");
// console.log("hello from %cJS %cfile","color: red; font-size: 40px;","color: blue; font-size: 40px;");
// var my_Name = "mohamed";
// console.log("Hello " + my_Name);
// console.log(`Hello ${my_Name}`);

// 1---------
/* first comment
second comment
third comment
*/

// 2----------

// let a = "we love";
// let b = "Java Script";

// document.write(`${a}
// ${b}`);
// console.log(`${a}
// ${b}`)
// let title = "Elzero",
// desc = "Elzero web school",
// markUp = `
//   <div calss="card">
//     <div calss="child">
//       <h2>${title}</h2>
//       <p>${desc}</p>
//     </div>
//   </div>
// `;
// document.write(markUp);
// let theTitle = "Elzero",
// theDescription = "Elzero web school",
// theData = "25/10",
// markUp = `
//   <div>
//     <h3>Hello ${theTitle}</h3>
//     <p>${theDescription}</p>
//     <p>${theData}</p>
//   </div>
// `;
// document.write(markUp.repeat(4));
// let a = "-100",
//   b = "20",
//   c = 30,
//   d = true;

//   console.log(-a * +b);
//   console.log(+(++d) * +(++b) + ++c + -a );

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number(15.123456.toFixed(3)));
// console.log(12.123456.toString());
// console.log(parseInt(15.515168));
// console.log(parseFloat(15.51518888888888888889965));
// console.log(Math.round(15.981656468));

// let a = 1_00,
//   b = 2_00.5,
//   c = 1e2,
//   d = 2.4;

//   console.log(Math.trunc(a));
//   console.log(Math.trunc(b));
//   console.log(Math.trunc(c));
//   console.log(Math.trunc(d));

//   console.log(Math.trunc(a) ** Math.trunc(d));

//   console.log(parseInt(d));
//   console.log(Math.trunc(d));
//   console.log(Math.floor(d));
//   console.log(Math.round(d));

//   console.log(((Math.trunc(b) / Math.ceil(d)).toFixed(2)));
//   console.log(Math.ceil(Math.trunc(b) / Math.ceil(d)));
// let a = " /Mahamed ";

// console.log(a.charAt(15));
// console.log(a[15]);
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());
// console.log(a.length);
// console.log(a.trim());
// console.log(a.trim()[2].toUpperCase());
// console.log(a.trim().indexOf("a"));
// console.log(a.trim().lastIndexOf("a"));
// console.log(a.trim().slice(0,3));
// console.log(a.trim().slice(2,4).repeat(4));
// console.log(a.repeat(4).split("/"));
// console.log(a.trim().substring(length + 2));

// let a = "Elzero web school";

// console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));
// console.log(a.charAt(13).toUpperCase().repeat(8));
// console.log(a[0] + a[1] + a[2] + a[3] + a[4] + a[5]);
// console.log(a.substr(0, 6) + a.substr(10, 17));
// console.log(
//   a.charAt(0).toLowerCase() +
//     a.substr(1, 15).toUpperCase() +
//       a.charAt(16).toLowerCase()
// );

// let job = "Manager",
//   salary = 0;

// switch (job) {
//   case "Manager":
//     salary = 8000;
//     console.log(`salary is ${salary}`);
//     break;

//   case "IT":
//   case "Support":
//     salary = 6000;
//     console.log(`salary is ${salary}`);
//     break;

//   case "Developer":
//   case "Designer":
//     salary = 7000;
//     console.log(`salary is ${salary}`);
//     break;

//   default:
//     salary = 4000;
//     console.log(`salary is ${salary}`);
//     break;
// }

// let holidays = 2;
// let money = 0;

// if(holidays === 0) {
//   money = 5000;
//   console.log(`My money is ${money}`);
// }
// else if(holidays === 1 || holidays === 2) {
//   money = 3000;
//   console.log(`My money is ${money}`);
// }
// else if(holidays === 3) {
//   money = 2000;
//   console.log(`My money is ${money}`);
// }
// else if(holidays === 4) {
//   money = 1000;
//   console.log(`My money is ${money}`);
// }
// else if(holidays === 5) {
//   money = 0;
//   console.log(`My money is ${money}`);
// }
// else {
//   money = 0;
//   console.log(`My money is ${money}`);
// }

// let zero = 0;
// let counter = 3;
// let my = ["Ahmed","Mazero","Elham","Osama","Gamal","Ameer"];

// console.log(my.slice(zero,++counter).reverse());
// console.log(my.slice(++zero,--counter).reverse());
// console.log(my[--counter].slice(--zero,counter).concat(my[++zero].slice(++zero)));
// console.log(my[--zero].slice(++counter+zero,++counter + zero) + my[--counter][--zero].toUpperCase());

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "IPhone"];
// let colors = ["Red","Green","Blue"];
// let showCount = 3;

// document.write(`
//   <h1>Show ${showCount} Products</h1>
// `);

//   mainloop:for(let i = 0;i < showCount;i++) {
//     document.write(`<div>`);
//     document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
//     nestedloop:for(let j = 0;j < colors.length;j++) {
//       document.write(`<p>${colors[j]}</p>`);
//     }
//         document.write(colors.join(" | "));
//         document.write(`</div>`);
//   }

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "IPhone"];

// let i = 0;

// while (i < products.length) {
//   console.log(products[i]);
//   i += 1;
// }

// do {
//   console.log(i);
//   i++;
// } while (false);

// console.log(i);

// Loop Challenge--------------------------------

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia","Anwar",];
// let a = 1;

// document.write(`<div>We Have ${myAdmins.indexOf("Stop")} Admins</div> <hr>`);

// for (let i = 0; i < myAdmins.indexOf("Stop"); i++) {
//   document.write(`<div>`);
//   document.write(`The Admin For Team ${i + 1} Is ${myAdmins[i]}
//   <h3>Team Members:</h3>
//   `);
//   for (let j = 0; j < myEmployees.length; j++) {
//     if (myEmployees[j][0] === myAdmins[i][0]) {
//       document.write(`<p>- ${a} ${myEmployees[j]}</p>`);
//       a++;
//     }
//   }
//   a = 1;
//   document.write(`</div>`);
// }

// function sayHello(userName) {
//   console.log(`Hello ${userName}`);
// }

// sayHello("Mohamed");

// function generate(start , end) {
//   for (let i = start; i <= end; i++) {
//     console.log(i);
//     if (i === 15) {
//       return 'Interrupttion';
//     }
//   }
// }

// generate(10,20);

// function sayHello(userName,age = 40) {
//   console.log(`Hello ${userName} you age is ${age}`);
// }

// sayHello("Mohamed",18);

// function calc(...numbers) {
//   console.log(Array.isArray(numbers));

//   sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     sum += numbers[i];
//   }
//   return `result = ${sum}`;
// }

// console.log(calc(10,20,30,40,50,60));

// function showInfo(user = "Un", age = "Un", rate = 0, show = "yes", ...skills) {
//   document.write(`<div>`);
//     document.write(`<h2>Welcome, ${user}</h2>`);
//     document.write(`<p>Age: ${age}</p>`);
//     document.write(`<p>Hour Rate: $${rate}</p>`);
//     if (show === "yes") {
//       if (skills.length > 0) {
//         document.write(`<p>Skills: ${skills.join(' | ')}</p>`);
//       } else {
//         document.write(`you don\`t have Skills`)
//       }
//     } else {
//       document.write(`Skills is hidden`);
//     }
//   document.write(`</div>`);
// }

// showInfo("Mohamed",18,40,"yes","Html","CSS");

// Function - Random Argument Challenge

// function showDetails(name, age, statu) {
//   let a, b, c;

//   typeof name === typeof "string" ? (a = name) :typeof age === "string" ? (a = age) : (a = statu);
//   typeof name === typeof 5 ? (b = name) :typeof age === "number" ? (b = age) : (b = statu);
//   typeof name === typeof true ? (c = name) :typeof age === "bool" ? (c = age) : (c = statu);
//   c === true ?statu = "Available": statu = "Not Available";
//   return `Hello ${a}, Your Age Is ${b},  You Are ${statu} For Hire `;
// }

// document.write(`<div>${showDetails(38, "Osama", true)}</div>`);// "Hello Osama, Your Age Is 38, You Are Available For Hire"
// document.write(`<div>${showDetails(38, "Osama", true)}</div>`); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// document.write(`<div>${showDetails(true, 38, "Osama")}</div>`); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// document.write(`<div>${showDetails(false, "Osama", 38)}</div>`); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// let myNums = [1, 2, 3, 4, 5, 6];

// let newArr = [];

// for (let i = 0; i < myNums.length; i++) {
//   newArr.push(myNums[i] + myNums[i]);
// }
// console.log(newArr);

// let addSelf = myNums.map(function (element,index,arr){
// console.log(`this element ${element}`);
// console.log(`this index ${index}`);
// console.log(`this Arrey ${arr}`);
// console.log(`this argument ${this}`);
// },10);

// let add = myNums.map((a) => a + a);

// console.log(add);

// function addition(ele) {
//   return ele + ele;
// };

// let add = myNums.map(addition);
// console.log(add);

// let swappingCases = "elZERo";
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let ignoreNumbers = "Elz123er4o";

// let sw = swappingCases
//   .split("")
//   .map(function (ele) {
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   })
//   .join("");

// console.log(sw);

// let invert = invertedNumbers.map(function (ele) {
//   return -ele;
// });

// console.log(invert);

// let ig = ignoreNumbers.split("").map(function(ele){
//   return isNaN(ele) === true ? ele : "";
// }).join("");

// console.log(ig);

// let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Israa"];

// let friendsFilter = friends.filter((ele) => ele.startsWith("A"));
// console.log(friendsFilter);

// let numbers = [11, 20, 2, 5, 17, 10];

// let numbersFilter = numbers.filter((evnum) => evnum % 2 === 0);
// console.log(numbersFilter);

// let sentence = "I Love Foood Code Too Playing Much";

// let smallAlpha = sentence
//   .split(" ")
//   .filter((ele) => ele.length <= 4)
//   .join(" ");
// console.log(smallAlpha);
// console.log(smallAlpha);

// let mix = "A13BS2ZX";

// let mixString = mix
//   .split("")
//   .filter((ele) => isNaN(ele))
//   .join("");

// console.log(mixString);

// let mixNumbers = mix.split("").map(function(ele) {
//   return isNaN(ele) === false ? ele*ele : "";
// }).join("")
// console.log(mixNumbers);

// let nums = [10, 20, 15, 30];
// let add = nums.reduce(function (ele, next_ele) {
//   return ele + next_ele;
// });
// console.log(add);

// let add2 = nums.reduce((ele, next_ele) => ele + next_ele,5);
// console.log(add2);

// let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];

// let check = theBiggest.reduce(function (ele, next_ele) {
//   return ele.length >= next_ele.length ? ele : next_ele;
// });
// console.log(check);

// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
// let remove = removeChars
//   .filter(function (ele) {
//     return !ele.startsWith("@");
//   })
//   .reduce((acc,current) => acc + current);

// console.log(remove);

// let alllis = document.querySelectorAll("ul li");
// let allDivs = document.querySelectorAll(".content div");

// alllis.forEach(function (ele) {
//   ele.onclick = function () {
//     alllis.forEach(function (ele) {
//       ele.classList.remove("active");
//     });
//     this.classList.add("active");
//     allDivs.forEach(function (ele) {
//       ele.style.display = "none";
//     });
//   };
// });

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString
//   .split("")
//   .map(function (ele) {
//     return isNaN(ele) ? ele : "";
//   })
//   .filter(function (ele) {
//     return !ele.startsWith(",");
//   })
//   .filter(function (ele) {
//     return !ele.startsWith("_");
//   })
//   .filter(function (ele) {
//     return !ele.startsWith("Z");
//   })
//   .filter(function (ele) {
//     return !ele.startsWith("E");
//   })
//   .reduce((acc, current) => acc + current, "E");

// console.log(
//   solution.slice(solution.indexOf("E"), solution.indexOf("W")) +
//     " " +
//     solution.slice(solution.indexOf("W"), solution.indexOf("S")) +
//     " " +
//     solution.slice(solution.indexOf("S"), solution.length)
// ); // Elzero Web School

// let myVar = "countery";
// let user = {
//   name: "Mohamed",
//   Age: 18,
//   sayHello: "Hello",
//   counteryOF: "Egypt",
//   countery: "Egypt",
// };
// console.log(
//   `${user.sayHello} your name is ${user.name} and your age is ${user.Age} your contery is ${user["counteryOF"]}`
// );
// console.log(user.countery);
// console.log(user[myVar]);

// let user = new Object({
//   age: 20,
//   doubleAge: function () {
//     return this.age * 2;
//   },
// });

// console.log(user);
// console.log(user.age);
// console.log(user.doubleAge());

// let obj = Object.create({});

// obj.name = "mohamed";

// // console.log(obj);

// let copyObj = Object.create(user);

// copyObj.age = 50;

// console.log(copyObj);
// console.log(copyObj.age);
// console.log(copyObj.doubleAge());

// let myElement = document.querySelector(".js");

// console.log(myElement.innerHTML);
// console.log(myElement.textContent);

// myElement.innerHTML = "Text From <span>Main.js</span> File";
// myElement.textContent = "Text From <span>Main.js</span> File";

// document.images[0].src = "https://google.com";
// document.images[0].alt = "My photo";
// document.images[0].title = "That`s photo";
// document.images[0].id = "img";
// document.images[0].className = "images";

// document.links[0].className = "link";

// let myLink = document.querySelector(".link");

// myLink.setAttribute("href", "https://facbook.com");
// myLink.setAttribute("title", "My Profile");

// console.log(myLink.getAttribute("hrerf"));
// console.log(myLink.getAttribute("class"));

// let myP = document.querySelector(".para");

// if (myP.hasAttribute("data-src")) {
//   if (myP.getAttribute("data-src") === "") {
//     myP.removeAttribute("data-src");
//   } else {
//     myP.setAttribute("data-src", "New Value");
//   }
// } else {
//   console.log("Not Found");
// }

// if (myP.hasAttributes()) {
//   console.log(`Has Atrribute`);
// }

// let divn = document.getElementsByTagName("div")[0];

// if (divn.hasAttributes()) {
//   console.log(`Has Attreibutes`);
// } else {
//   console.log(`Not Found Attributes`);
// }

// let myElement = document.createElement("div");
// let myAtrr = document.createAttribute("data-custom");
// let myText = document.createTextNode("Product One");
// let myComment = document.createComment("This Is Div");
// myElement.className = "prodect";
// myElement.setAttributeNode(myAtrr);

// myElement.setAttribute("data-test", "Testing");
// myElement.appendChild(myComment);
// myElement.appendChild(myText);

// document.body.appendChild(myElement);

// console.log(myElement);

// for (let i = 1; i <= 100; i++) {
//   let myElement = document.createElement("div");
//   let myHeadding = document.createElement("h2");
//   let myParagraph = document.createElement("p");
//   myElement.className = "product";

//   let myHeaddingText = document.createTextNode(`Product Title ${i}`);
//   let myParagraphText = document.createTextNode(`Product Description ${i}`);
//   myHeadding.appendChild(myHeaddingText);
//   myParagraph.appendChild(myParagraphText);

//   myElement.appendChild(myHeadding);
//   myElement.appendChild(myParagraph);
//   // console.log(myElement);
//   document.body.appendChild(myElement);
// }

// let btn = document.querySelector("button");
// btn.id = "btn";

// btn.onclick = function () {
//   console.log("click2");
// };

// window.onresize = function () {
//   console.log("Scroll");
// };

// let userInput = document.querySelector("[name='username']");
// let ageInput = document.querySelector("[name='age']");

// document.forms[0].onsubmit = function (e) {
//   let nameValid = false;
//   let ageValid = false;

//   console.log(userInput.value);
//   console.log(userInput.value.length);

//   if (userInput.value !== "" && userInput.value.length <= 10) {
//     nameValid = true;
//   } else {
//     nameValid = false;
//   }

//   if (ageInput.value !== "") {
//     ageValid = true;
//   } else {
//     ageValid = false;
//   }

//   if (nameValid === false || ageValid === false) {
//     e.preventDefault();
//   }
// };

// document.links[0].onclick = function (event) {
//   console.log(event);
//   event.preventDefault();
// };

// let myElement = document.querySelector("div");
// myElement.id = "ele";

// myElement.style.cssText = "font-size: 40px; color: red; font-weight: bold";
// myElement.style.removeProperty("color");
// let element = document.getElementById("my-div");










// Body ========================

document.querySelector("body").style.cssText = "background-color: #eee;";

// Header ============================

let header = document.createElement("header");
header.style.cssText =
  "background-color: #fff; display: flex; align-items: center; justify-content: space-between; height: 10vh; width: 100%; margin: 0; padding: 0; overflow:hidden";

let headerHeadding = document.createElement("h3");
headerHeadding.innerHTML = "E-M_R";
headerHeadding.style.cssText = "color: green; margin-left: 20px";

// Menu ============================

let menu = document.createElement("ul");
menu.style.cssText = "display:flex; list-style-type: none";

// Lists =================================

let list1 = document.createElement("li");
let list2 = document.createElement("li");
let list3 = document.createElement("li");
let list4 = document.createElement("li");

// Links ===============================

let link1 = document.createElement("a");
let link2 = document.createElement("a");
let link3 = document.createElement("a");
let link4 = document.createElement("a");

link1.innerHTML = "Home";
link2.innerHTML = "About";
link3.innerHTML = "Services";
link4.innerHTML = "Contact";

link1.style.cssText = "margin-right: 10px; color: #666; display: inline-block";
link2.style.cssText = "margin-right: 10px; color: #666; display: inline-block";
link3.style.cssText = "margin-right: 10px; color: #666; display: inline-block";
link4.style.cssText = "margin-right: 10px; color: #666; display: inline-block";

// Content =====================

let content = document.createElement("div");
content.style.cssText =
  "display: flex; width: 100%; justify-content: space-between; align-items: center; flex-wrap: wrap; margin-top: 20px; overflow:hidden";

// Elements Of Content ======================

for (let i = 1; i <= 15; i++) {
  // Declration
  let element = document.createElement("div");
  let elementHeadding = document.createElement("h3");
  let elementpara = document.createElement("p");

  // HTML
  elementHeadding.innerHTML = i;
  elementpara.innerHTML = "Product";

  // Style
  element.style.cssText =
    "width: 32%; height: 20%; background-color: #fff; margin-bottom: 15px; border-radius: 4px";
  elementHeadding.style.cssText =
    "width: 100%; text-align:center; font-size: 20px";
  elementpara.style.cssText =
    "width: 100%; text-align:center; color: #666; font-size: 10px";

  // Appends Of Content
  content.appendChild(element);
  element.appendChild(elementHeadding);
  element.appendChild(elementpara);
}

// Footer ================================

let footer = document.createElement("Footer");
let footerPara = document.createElement("p");
footerPara.innerHTML = "Copyright 2021";

footer.style.cssText =
  "width: 100%; height: 10vh; background-color: green; display:flex;justify-content:center;align-items:center; overflow:hidden";
footerPara.style.cssText = "color: #fff;";

// All Appends ===============

header.appendChild(headerHeadding);

header.appendChild(menu);

menu.appendChild(list1);
menu.appendChild(list2);
menu.appendChild(list3);
menu.appendChild(list4);

list1.appendChild(link1);
list2.appendChild(link2);
list3.appendChild(link3);
list4.appendChild(link4);

footer.appendChild(footerPara);

document.body.appendChild(header);
document.body.appendChild(content);
document.body.appendChild(footer);
