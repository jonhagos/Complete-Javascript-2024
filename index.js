// strings and Templets
const niki = "Yohannes";
const job = "DeveloperYohannes";
let lengthjob = job.length;
console.log(lengthjob);

const birthyear = 1980;
const or = 2024;
const infoMe =  `I am ${niki} ${or - birthyear} years old ${job}`;
console.log(infoMe);
console.log(job);
function visNavn(niki){
    document.write(niki)

}
/*
const age = 1;
//const ageIsEnough = age >= 18;
if(age >= 18){
console.log(`she can drive a car`)
}
else{
    const yearsLeft = 18 - age;
    console.log(`She can not start driving , she must wait onther ${yearsLeft} 
    years to drive a car`);
}
const birthYear = 2089;
let century;
if(birthYear > 2000){
  console.log(`He is born in the 21 century`)
}
else if (birthYear < 2000){
    console.log(`He is born in the 20 century`)
}
else{
    console.log(`too old`)
}
if(birthYear >= 2000 ){
     century = 21;
}
else{
    century = 20
}
console.log(century);
const inputYear = 1991
console.log(inputYear - 18 + 6);
console.log(`1` + 1)
console.log(`I am `+ 23  +  ` years old`)
console.log(`I am `+ `23`  +  ` years old`)
console.log(`10 `+ `23 `  +  3);
console.log(`23 `- `10 ` - 3);
console.log(`10 `* `2`);
console.log(`10 `/ `2 ` );
let n = `1` + 1;
n = n -1;
console.log(n)
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(`jonas`));
console.log(Boolean({}));
console.log(Boolean(null));
console.log(Boolean(NaN));
// Boolean folsy values
// 0, ``, undifined, null, NaN

const money = 0;
if(money){
    console.log(`Dont spent it all`);
}
else{
    console.log(`You should get a job`);
}

let player = 100
if(player){
    console.log(`YAY ! player is defined`)
}
else{
    console.log(` player is UNdefined`)
}
const fovorit = Number(prompt("what is your fovorit number"));
console.log(fovorit);
console.log(typeof fovorit);


if(fovorit ===23){
    console.log( " 23 is amazing number !");
}
else if ( fovorit === 7){
    console.log( " 7 is also amazing number !");
}
else if ( fovorit === 9){
    console.log( " 9 is also amazing number !");
}
 else {
    console.log( "the Number is not 23 , 7 or 9");
 }
  if (fovorit !== 23){
    console.log(" It is not equal to 23");
  }

  // logical operations
  const hasDriversLicense = false;
  const hasGodVision = false;
  console.log(hasDriversLicense && hasGodVision);
  console.log(hasDriversLicense || hasGodVision);


  //Swich statment
/*const day = `sunday`;
switch (day) {
case `manday`:
    console.log(`plane course structure`);
    console.log(`Go to coding meetup`);
    break;
case `tuesday`:
    console.log(`prepare theory videos`);
    break;
case `wednesday`:
case `thursday`:
    console.log(`write code examples`);
    break;
case `friday`:
    console.log(`Recorde videos`);
    break;

case `saturday`:
    case `sunday`:
    console.log(`Enjoy the weekend`);
    break;
default:
    console.log(`not valid day`)

}

  //Writing the above code using else if statment
  const day = `manday9`;
  if (day === `manday`){
    console.log(`plane course structure`);
    console.log(`Go to coding meetup`);
  }
  else if (day === `tuesday`){
    
    console.log(`prepare theory videos`);
  }
  else if (day === `wednesday` || day === `thursday` ){
    
    console.log(`write code examples`);
  }
  else if (day === `friday`){
    
    console.log(`Recorde videos`);
  }
  else if (day === `saturday` ||  day === `sunday` ){
    
    console.log(`write code examples`);
  }
  else{
    console.log(`Not a valid day`);
  }*/

//conditional (Ternary) operator

/*const ag = 19;
//ag >= 18 ? console.log(`I like to drink wine`) :
//console.log(`I like to drink water`);

const drink = ag >= 18 ? `wine` : `water`;
console.log(drink);

/*let tip ;
const bill = 20;
let total = bill + tip;
if(bill >= 50 && bill <= 300){
    tip = 0.15 * bill;
    total = bill + tip
console.log(`the bill was ${bill} the tip was ${tip} and the total value ${total}` )
}
else{
    tip = 0.2 * bill;
    console.log(`the bill was ${bill} the tip was ${tip} and the total value ${total}`  )
    
}*/

/*const bill = 40;


  
  const tip = bill <= 300 && bill >= 50 ? bill *0.15 : bill * 0.2 ;
  let total = bill + tip;
  console.log(`the bill was ${bill} the tip was ${tip} and the total value is ${total}`);
 
  
  (bill >= 50 && bill <= 300)?console.log(`the bill was ${bill} the tip was ${tip} and the total value is ${total}`)  : console.log (`the bil was ${bill} the tip was ${0.2*bill} and the total 
  value is ${total}`);

 // `use strict`;       ASK PRADIP WHAT IS THE PURPOSE OF ? DOES IT COMTIMUE IN THE 
                         //NEW RELEASES?
  let hasdriverslicense = false;
  const passTest = true;
  if(passTest) hasdriverslicense = true;
  if(hasdriverslicense) console.log(` I can drive`)

  const interface = `audio`
  const private = 566;
  // const if = 23;

  //fUNCTIONS
  function logger(){
    console.log(`my name is Jonas`);//  Why couldnot get the methods 
    //when I run it "logger"    ASK PRADIP
    }


 
  logger();
  logger();
  logger();
  //logger();

  function fruitProcessor(apples, oranges){
        console.log(apples, oranges);
        const juice = ` juice with ${apples} and ${oranges} oranges.`;
        return juice;
  }
  fruitProcessor(5, 8);
  const appleJuice = fruitProcessor(5, 8);

  console.log(appleJuice);
  console.log(fruitProcessor(5, 8));
  const appleOrangJuice = fruitProcessor(2, 4);
  console.log(appleOrangJuice);
  console.log(appleOrangJuice);
 
  
//Function declaration 
function calcAge1(birthYear){
return  2037 - birthYear;
}
const age1 = calcAge1(1991);

//Function  expression

const calcage2 = function(birthYear){
  return  2037 - birthYear;
}
const age2 = calcage2(1990);
console.log(age1, age2);

//Arrow functiions
function calcAge1(birthYear){
  return  2037 - birthYear;
  }
  const age3 = calcAge1(2000);
  console.log(age3);

  // to write the above function in an arrow form
   const calkageArrow = birthyeal => 2037 - birthyeal;
   const age4 = calkageArrow(2030);
   console.log(age4);

   const yearsUntilRetirment =  yeakil => {
    const age = 2037 - yeakil;
    const retirment = 65 - age;
    return retirment;

   }
   
   /*const yearsUntilRetirment = ( yeakil, firstname)  => {
    const age = 2037 - yeakil;
    const retirment = 65 - age;
    return ` ${firstname} retires in ${retirment} years ` ;
   }
   console.log(yearsUntilRetirment(1990, `Yohannes`));
   console.log(yearsUntilRetirment(2010, `Yoel`));*/

   // function calling other function
/*function cutFruit(fruit){
  return fruit * 10;
}

   function fruitProcessor(apples, oranges){
    const applePieces = cutFruit(apples);
    const orangePieces = cutFruit(oranges);
    //console.log(apples, oranges);
    const juice = ` juice with ${applePieces} pieces of apple and ${orangePieces} pieces of  oranges.`;
    return juice;
}
console.log(fruitProcessor(5, 8));

const calcAgeFun = function(bi){
  return 2037 - bi;
}

const yearsUntilRetirment = function( yeakil, firtName) {
  const age = calcAgeFun(yeakil);
  const retirment = 65 - age;
  //return ` ${firtName} retires in ${retirment} years ` ;
  if (retirment > 0){
    console.log(` ${firtName} retires in ${retirment} years `)
    return retirment;
  }
  else{
    console.log(` ${firtName} is already retired`)
    return "Yohannes";
  }
 
 }
 console.log(yearsUntilRetirment(2000, "Jonas"))
 console.log(yearsUntilRetirment(1970, "mike"))

 //Arrays   
 /*const friends = ["micheal", "Nice", "Peter"];
 console.log(friends);

 const years = new Array(1991,1992,2008,2009,2024);
 console.log(years);
 console.log(friends[0]);
 console.log(friends[1]);
 console.log(friends[2]);
 console.log(years[3]);
 console.log(years[4]);
 console.log(friends.length);
 console.log(years.length);
 friends[0]= "Yeakil";
 console.log(friends);

 const lastName = "hagos";
 const quazien = ["lemlem", lastName, 1991, 2023 -2000, "Teacher" , friends,
      years ];
      console.log(quazien);

      const calcage3 = function(birthYear){
        return  2037 - birthYear;
      }
      const year = new Array(1991,1992,2008,2009,2024);
      const oge1 = calcage3(year[0]);
      const oge2 = calcage3(year[1]);
      const oge3 = calcage3(year[2]);
      const oge4 = calcage3(year[year.length - 1]);
      const oge5 = calcage3(year[4]);
console.log(oge1, oge2, oge3, oge4, oge5);*/

// Array methods
//add element
/*const friends = ["micheal", "Nice", "Peter"];
friends.push("UNESCO");
 console.log(friends);
 const newLength = friends.push("UNHCR");
 console.log(newLength);
friends.unshift("john");
console.log(friends);
// Remove element
 friends.pop();
 friends.pop();

 console.log(friends);
 friends.shift();
 console.log(friends);

 console.log(friends.indexOf("Nice"));
 console.log(friends.indexOf("bob"));

 
 console.log(friends.includes("Nice"));
 console.log(friends.includes("bob"));

 /*function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}*/

/*showMessage(); // Hello, I'm JavaScript!
let jhon = " I am original JavaScript";*/

//alert( message ); // <-- Error! The variable is local to the function

//alert(jhon);

// outer variables
/*let userName = "john";
function visFunction(){
  let message = "hello , " + userName;
  alert(message);
}
visFunction();*/

/*let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}
//alert(userName);
showMessage();

alert( userName );*/

/*function checkAge(age){
  if(age >= 18){
    return true;

  }else{
    return confirm("Do you have permission from your parents ?");

  }
}
let age = prompt("How old are you", 18);
if(checkAge(age)){
  alert("access granted");

}
else{
  alert("access denied");
}

function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }
  

  alert( "Showing you the movie" ); 
}
showMovie(age);*/

/*function checkAge(age) {
  if (age > 18) {
    return true;
   
  } else {
    // ...
    return confirm('Did parents allow you?');
 
  }
 
}

checkAge(7);*/
/*function checkAge(age){
  return(age > 19 ) ? true : confirm ("Did parents alllow you");
}

checkAge(56);*/

//const tip = bill <= 300 && bill >= 50 ? bill *0.15 : bill * 0.2 ;

/*function minVal(a, b){
  if (a >= b){
    return b;
  }
  else{
    return a;
  }
}
 minVal(89, 9);
 minVal(4,9)*/

 /*function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
min(2,4);*/

// objects
/*const yohannesArray =[
   'Hagos',
   'alena',
   2024-1980,
   'developer',
   ['michi', 'minaj']
];
console.log(yohannesArray[0]);
console.log(yohannesArray[4]);
console.log(yohannesArray[2]);*/

/*const yohannesObject = {
    firstName:'Yohannes',
    lastName: 'Gebre',
    age: 44,
    job: 'Teacher',
    friends: ['michi', 'minaj']

};*/

/*console.log(yohannesObject);
console.log(yohannesObject.lastName);
console.log(yohannesObject['lastName']);
console.log(yohannesObject['job']);
const nameKey = 'Name';
console.log(yohannesObject['first' + nameKey]);
console.log(yohannesObject['last' + nameKey]);
const interestedIn = prompt('what do you want to know about yohannes ? choose between firstName, lastName, age, job, friends');
//console.log(yohannesObject.interestedIn);
console.log(yohannesObject[interestedIn]);
 if (yohannesObject[interestedIn]){
  console.log(yohannesObject[interestedIn])
 }
 else{
  console.log('wrong request! choose between firstName, lastName, age, job, friends')
 }
 yohannesObject.location = 'Asmara';
 yohannesObject['facebook'] = 'GeologyJohn';
 console.log(yohannesObject);
 console.log('${yohannesObject.firstName} has ${yohannesObject.friends.length} and his best friend is ${yohannesObject.friends[0]}');
 console.log(`${yohannesObject.firstName} has ${yohannesObject.friends.length} and his best friend is ${yohannesObject.friends[0]}`);

 console.log(yohannesObject);*/


/*const yohannesObject = {
    firstName:'Yohannes',
    lastName: 'Gebre',
    birthyear: 2000,
    job: 'Teacher',
    friends: ['michi', 'minaj'],
    hasDriverlicence: false,
    //calcAge: function(birthyear){
     // return 2037 - birthyear;
     calcAge: function(){
      //console.log(this);
      this.age = 2037 - this.birthyear;
      return this.age;
    },
    getSummary: function(){
      return `${this.firstName} is a ${this.calcAge()}  years old ${this.job} , and he has ${this.hasDriverlicence ? `a` : `no`} drivesrs licence`
    }
   


};
console.log(yohannesObject.calcAge());
//console.log(yohannesObject.age);
//console.log(yohannesObject.age);
console.log(yohannesObject.getSummary());*/

//challenge # 1 Variables
/*const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const BMIMark = (massMark/(heightMark*heightMark));
const BMIJohn = (massJohn/(heightJohn*heightJohn));
console.log(BMIMark);
console.log(BMIJohn);
let markHigherBMI = BMIMark > BMIJohn;
/*if(BMIMark > BMIJohn){
markHigherBMI = true;
}
else{
    markHigherBMI = false;
}
console.log(markHigherBMI);

// strings and Templets
const niki = "Yohannes";
const job = "Developer";
const birthyear = 1980;
const or = 2024;
const infoMe =  `I am ${niki}`;
console.log(infoMe);
 
// challenge 3 Javascript fundamentals part 2 Object*/
 /*const mark ={
  fullName: 'mark Millers',
  mass: 78,
  height: 1.69,
  calcBMI: function(){
    this.bmi = (this.mass)/(this.height * this.height)
    return this.bmi;
  }
}

const john ={
  fullName: 'john Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function(){
    this.bmi = (this.mass)/(this.height * this.height)
    return this.bmi;
  }
}
mark.calcBMI();
john.calcBMI();

if(mark.bmi > john.bmi){
  console.log(`${mark.fullName}s BMI (${mark.bmi}) is higher than ${john.fullName}s (${john.bmi})!`);
}
else{
  console.log(`${john.fullName}s BMI (${john.bmi}) is higher than ${mark.fullName}s (${mark.bmi})!`);
}*/

//loops

/*for(let rep = 1; rep <= 3; rep++){
console.log(`lifting weights repetition ${rep}`);
}

const yohannesArray =[
  'Hagos',
  'alena',
  2024-1980,
  'developer',
  ['michi', 'minaj'],
  true
];
const types = [];

for(let i = 0; i < yohannesArray.length; i++){
  console.log(yohannesArray[i], typeof yohannesArray[i]);
  types[i] = typeof yohannesArray[i];
}

console.log(types);
 const years =[1991,2007,1969,2020];
 const age = [];

 for(i = 0; i < years.length; i++){
      age.push(2037 - years[i]);
 }
 console.log(age);

 // continue and break
//continue
console.log('.........Only Strings........');
 for(let i = 0; i < yohannesArray.length; i++){
  if (typeof yohannesArray[i] !== 'string') continue;
  console.log(yohannesArray[i], typeof yohannesArray[i]);
 
 }

 //break
 console.log('.........Break with  numbers........');
 for(let i = 0; i < yohannesArray.length; i++){
  if (typeof yohannesArray[i] === 'number') break;
  console.log(yohannesArray[i], typeof yohannesArray[i]);

 }

 //looping backwords
 for(let i = yohannesArray.length - 1; i >= 0; i--){
    console.log(i, yohannesArray[i]);
    console.log(yohannesArray);

 }
 / forl oop insisde for loop
for(let exer = 1; exer < 4; exer++){
  console.log(` ......starting exercise ${exer}`);

  for(let rep = 1; rep <= 5; rep++){
console.log(`exercise ${ exer}:lifting weights repetition ${rep}`);
}
}*/

// while loop

for(let rep = 1; rep <= 2; rep++){
console.log(`for lifting weights repetition ${rep}`);
}

 let r = 1;
 while  (r <= 6){
  console.log(`while lifting weights repetition ${r}`);
 r++;
 }


 let dice = Math.trunc(Math.random() * 6) + 1;
 while(dice !== 6){
   console.log(` you rolled a ${dice}`);
   dice = Math.trunc(Math.random() * 6) + 1;
   if (dice === 6) console.log('loop is ended');

 }
 
 function getCount(str){
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
    for(var i = 0; i < str.length;i++){
      for(var j = 0; j < vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
 }
 getCount(Yohannes);
 getCount(aaaiuiui);