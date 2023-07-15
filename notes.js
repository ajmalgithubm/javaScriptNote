const { set } = require("express/lib/application");

const survey = [
    { name: "Steve", answer: "Yes" },
    { name: "Jessica", answer: "Yes" },
    { name: "Peter", answer: "Yes" },
    { name: "Elaine", answer: "Yes" }
];
let age = [19, 33, 45, 28];
let all_adults = age.every((item, index, array) => {
    return (item > 18)
})
let result = survey.every(isSameAnswer);
function isSameAnswer(el, index, arr) {
    if (index == 0) {
        return true
    } else {
        return el.answer === arr[index - 1].answer;
    }
}
// console.log(result);
if (all_adults) {
    // console.log("All Are the adults....");
} else {
    // console.log("All are Not Adults...");
}

let fruits = ['apple', 'banana', 'pinapple', 'perakka'];
fruits.fill('Strabweey', 0, fruits.length - 1);
//console.log(fruits)

let studentDetails = [
    { name: "Ajmal", age: 22 },
    { name: "Najiya", age: 19 },
    { name: "Ahiyan", age: 5 }
]
studentDetails.forEach((item) => {
    if (item.age >= 18) {
        //console.log(item.name)
    }
})
let adultsList = studentDetails.filter((item) => {
    return (item.age < 10)
})
//console.log(adultsList)

let myNumberList = [2, 44, 56, 78, 200, 450];
let newResult = null;
myNumberList.forEach((item) => {
    if (item >= 150) {
        newResult = item;
        // break; break statement is not usefull in fofrEach loop
    }
})
for (var i = 0; i < myNumberList.length; i++) {
    if (myNumberList[i] > 150) {
        newResult = myNumberList[i];
        break;
    }
}
let numberResult = myNumberList.find((item) => {
    return item > 150
})
let indexOfNumber = myNumberList.findIndex((item) => {
    return item > 150
})
//console.log(newResult)
const myArr = [1, 2, [3, [4, 5, [9, 20]], 7], 8];
const newArr = myArr.flat(3);
//console.log(newArr)
let numberList = [8, 9, 3, 4, 6];
numberList.forEach((item, index, array) => {
    array[index] = item * 10
})
//console.log(numberList)
let myName = 'AJMAL MANKARTHODI';
let myNameList = Array.from(myName);
//console.log(myNameList)


const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
//console.log(fruits1.indexOf("Apple"));
let txt = fruits1.join(' ');


const fruits2 = [
    { name: "Banana", type: 'fruit' },
    { name: "Orange", type: 'fruit' },
    { name: "Apple", type: 'fruit' },
    { name: "Mango", type: 'fruit' }
];
const keys = fruits2.keys();


let fruits3 = fruits2.map((item) => {
    return item;
})
let fruits4 = fruits2.filter((item) => {
    return item === "Apple";
})
fruits2.forEach((item) => {
    //console.log(item)
})
let is_every_fruits = fruits2.every((item, index, array) => {
    if (index === 0) {
        return true
    } else {
        return item.type === array[index - 1].type;
    }
})
let student_details = [
    { name: 'Ajmal M', mark: { maths: 60, physics: 80, chemistry: 100 }, roll_no: 17 },
    { name: 'Najiya M', mark: { maths: 40, physics: 30, chemistry: 70 }, roll_no: 22 },
    { name: 'Ahiyan M', mark: { maths: 60, physics: 60, chemistry: 80 }, roll_no: 2 },
    { name: 'Ivan M', mark: { maths: 60, physics: 60, chemistry: 90 }, roll_no: 45 },
    { name: 'Ami P', mark: { maths: 80, physics: 90, chemistry: 100 }, roll_no: 8 }
]
//let eligible_students = [];
let last_element = student_details.pop();
//console.log(last_element);
//console.log(student_details);
let s = [1, 2, 3];
//s.push(5,6,7);
//console.log(s);

let substract_value = s.reduceRight((item, num) => {
    return item - num;
})
//console.log(substract_value)
let substractValue = 0;
s.forEach((item, index, aray) => {
    if (index === aray.length - 1) {
        substractValue -= item;
    } else {
        substractValue += item;
    }
})
//console.log(substractValue)
s = [1, 2, 3, 4, 5, 6, 7, 18];
//let c = s.reverse()
//console.log(s);
//console.log("array c :"+c);
//let fisrt_value =  s.shift()
//console.log(fisrt_value);
fruits = ['Apple', "Mango", "Grapes", "PinaApple", 'WaterMelon'];

let newFruits = fruits.map((item, index, array) => {
    return item
})
newFruits.reverse()
//console.log(newFruits);
//console.log(fruits);
//fruits.unshift("Lemon","Banana");
//console.log(fruits)
//fruits.sort();
//fruits.reverse()
//console.log(fruits)
//txt = fruits.join('+')
//console.log(txt);
//console.log(fruits)
//fruits.splice(2,1,'Kiwi','Orange');
//console.log(fruits);
//let sliced_value = fruits.slice(1,4)
//console.log(sliced_value);
let check_mango_available = fruits.find((item) => {
    return item === "Mango";
})

let some_condition = fruits.some((item) => {
    return item === "Mango";
})
//console.log(check_mango_available, some_condition);
s = [4, 12, 16, 20, 22];
let check_number_include_inList = (num) => {
    const value = s.some((item) => {
        return item > num;
    })
    return value
}
//console.log(check_number_include_inList(44));
let getFormatDate = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (day < 10 && month < 10) {
        return '0' + month + '/' + '0' + day + '/' + year
    } else if (month < 10 && day > 10) {
        return '0' + month + '/' + day + '/' + year
    } else if (day < 10 && month > 10) {
        return month + '/' + '0' + day + '/' + year
    }
    return month + '/' + day + '/' + year
}
//console.log(getFormatDate());
const person = {
};
fruits = ['Apple', 'Banana', "Pineapple", "Mango", "Robust"];
let keys1 = person.toString();
person.firstName = 'Ajmal';
person.lastName = 'M';
person.age = 22;
person.roll_number = 17;
person.fullName = () => {
    return person.firstName + ' ' + person.lastName;
}
s = ["Ajmal", 'ami', 'ahi'];
let name = 'Ajmal M';
// delete person.age;    delete property of the object by keyWord Delete 
//delete person.fullName;
for (let x in person) {
    // console.log(person[x])
}
//It is a common practice to declare objects with the const keyword.

//JavaScript objects are containers for named values, called properties and methods.

// Nested Object object has value is an another object
const myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}
//console.log(myObj?.cars?.car3)
for (let index in myObj.cars) {
    for (let property_car in myObj.cars[index]) {
        if (property_car === 'name') {
            // console.log(myObj.cars[index].name)
        } else {
            for (let index_model in myObj.cars[index].models) {
                //  console.log(myObj.cars[index].models[index_model]);
            }
        }
    }
}
for (let index in myObj.cars) {
    //console.log(myObj.cars[index].name);
    for (let model_index in myObj.cars[index].models) {
        //console.log(myObj.cars[index].models[model_index])
    }
}
// Built in Object Method
txt = 'hello world';
txt.toUpperCase();
//console.log(txt)
let values = Object.values(myObj);
//console.log(values);
//JavaScript can secure better data quality when using getters and setters.
let person3 = {
    firstName: 'AJMAL',
    lastName: 'M',
    language: 'MALAYALAM',
    getFirstName: function () {
        return this.firstName
    },
    setFirstName: function (name) {
        this.firstName = name;
    }


}
//console.log(person3.firstName)
function person_information(first, last, age, num) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.rollNumber = num;
}
var myObj1 = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}
//Iterating Over a String
let num_list = [100, 23, 123, 450, 435];
//for(let x of myObj1){
//myObj1 is not iterable
//}
for (let x in num_list) {
    //console.log(num_list[x])
}

function myNumbers() {
    let n = 0;
    return {
        next: function () {
            n += 10;
            return { value: n, done: false };
        }
    };
}

// Create Iterable
//const n1 = myNumbers();
//console.log(n1.next()); // Returns 10
//console.log(n1.next()); // Returns 20
//console.log(n1.next()); // Returns 30

//const letters = new set(); // initialize The Object Of The set
//letters.add('a');
//letters.add('b'); // add elements into The Letters
//onsole.log(letters);
var letters = new Set(["a", "b", "c"]);
letters.add("d");
letters.add("a");
//console.log(letters.has("K"))
//letters.delete("a");
//console.log(letters.keys());
letters.forEach((item) => {
    //console.log(item)
})
function myFunction(a, b) {
    return a * b;
}
let product_two_number = (a, b) => a * b;
//console.log(product_two_number(10,20));

function sum(...args) {
    console.log("This is args " + args);
    console.log(typeof (args))
    for (let arg in args) {
        console.log(arg)
    }
}
//sum([1,2,3,4,5])
function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
}

// This creates a new object
const my_object = new myFunction("John", "Doe");

// This will return "John"
//console.log(my_object.lastName);

let person10 = {
    fullName: function (countery) {
        return this.firstName + ' ' + this.lastName + ' ' + countery;
    }
}
let person1 = {
    firstName: 'Akhil',
    lastName: 'pp'
}
let person2 = {
    firstName: 'Akshay',
    lastName: 'suresh'
}
//console.log(person10.fullName.call(person1, "india"));
//console.log(person10.fullName.call(person2, "canada"))
// array de structuring 
let animals = ['Cat', 'Dog', 'Elephant', 'zibra', 'tiger', 'lion', 'giraffe'];
const animalObj = {
    name: 'Cat',
    age: 2
};
[a, b, ...c] = animals;
//{name, age } = animalObj;
//let animalName = animalObj.name;
//let animalAge = animalObj.age;

// This proccess Done Object destructuring.. 
//JavaScript Object Destructuring is the syntax for extracting values from an object property and assigning them to a variable.
// The destructuring is also possible for JavaScript Arrays
let { name: animalName, age: animalAge, details = `Name:${animalName} Age:${animalAge}` } = animalObj;
//age_ = 20;
//console.log(animalName, animalAge, details);
//console.log(animalObj);
//console.log(animalObj);
//console.log(animalName);
//console.log(animalAge);
student_details = [
    { name: 'Ajmal M', mark: { maths: 60, physics: 80, chemistry: 100 }, roll_no: 17 },
    { name: 'Najiya M', mark: { maths: 20, physics: 80, chemistry: 70 }, roll_no: 22 },
    { name: 'Ahiyan M', mark: { maths: 60, physics: 60, chemistry: 80 }, roll_no: 2 },
    { name: 'Ivan M', mark: { maths: 60, physics: 60, chemistry: 90 }, roll_no: 45 },
    { name: 'Ami P', mark: { maths: 80, physics: 90, chemistry: 100 }, roll_no: 8 }
];
let studentQualifiedList = {
    qualified: [],
    unQualified: []
};
for (let { name: studentName, mark: studentMarks } of student_details) {
    let isEligible = true;
    for (let subject in studentMarks) {
        if (studentMarks[subject] < 50) {
            isEligible = false;
            break;
        }
    }
    if (isEligible) {
        studentQualifiedList.qualified.push(studentName);
    } else {
        studentQualifiedList.unQualified.push(studentName);
    }

}

//console.log(studentQualifiedList)
let user = {
    name: 'Johne',
    address: '15th Park Banglore',
    age: 22,
    department: {
        name: 'Sales',
        shift: 'Morning',
        address: {
            city: 'Banglore',
            street: '7th Residency Street',
            zip: 589845
        }
    }
}
let { department: { address: { zip: pinCode } } } = user;
let { department: { address: { city: Town } } } = user
const getValue = (value) => {
    let { [value]: returnValue } = user;
    return returnValue;
}
const getLogDetails = ({ name, age }, key) => {
    const { [key]: personAddress } = user;
    console.log(`Name: ${name}, age:${age}, address:${personAddress}`);
}
const getUser = () => {
    return (
        {
            name: 'Alex',
            age: 33,
            address: 'Banglore North'
        }
    )
}
//const {name:personName, age:personAge }= getUser();
//console.log(personName, personAge);
const users = [
    {
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    },
    {
        'name': 'Bob',
        'address': 'Canada',
        'age': 53
    },
    {
        'name': 'Carl',
        'address': 'Bangalore',
        'age': 26
    }
];

for ({ name, age } of users) {
   // console.log(`Name: ${name} Age:${age}`)
}
// Spread Oprator Create a Clone of an Object
user = {
    name: 'Johne',
    address: '15th Park Banglore',
    age: 22,
    department: {
        name: 'Sales',
        shift: 'Morning',
        address: {
            city: 'Banglore',
            street: '7th Residency Street',
            zip: 589845
        }
    }
};
let cloneObject = {...user};
//console.log(cloneObject);
//console.log(cloneObject == user);
//Add Properties to Objects
let updatedObject = {...user,salary:22000}
//console.log(updatedObject);
//console.log(user);
let upadtesProperty = {...user,name:'Alex'};
//console.log(upadtesProperty);
//console.log(user);
user = {
    name: 'Johne',
    address: '15th Park Banglore',
    age: 22,
    department: {
        name: 'Sales',
        shift: 'Morning',
        address: {
            city: 'Banglore',
            street: '7th Residency Street',
            zip: 589845
        }
    }
};
const updateDepartment = {
    ...user,
    department : {
        ...user.department,
        address:{
            ...user.department.address,
            phone:98786545
        }
    }
};
const {
    department:{
        address:{
            phone:phoneNumber
        }
    }
} = updateDepartment;

//console.log(phoneNumber)
// Merge Two Object
const employeeProduction = {
    1 : {
        name : 'rakesh',
        age : 25
    },
    2:{
        name:'abinav',
        age:43
    }
}
const employeeDesign = {
    1:{
        name:'Ashfaq',
        age:66
    },
    7:{
        name :'Ajed',
        age:34
    },
    8:{
        name:'highj',
        age:56
    }
}
const totalEmployee = {...employeeDesign, ...employeeProduction};
//console.log(totalEmployee)
//the rest parameter helps collect them together

user = {
    name: 'Johne',
    address: '15th Park Banglore',
    age: 22,
    department: {
        name: 'Sales',
        shift: 'Morning',
        address: {
            city: 'Banglore',
            street: '7th Residency Street',
            zip: 589845
        }
    }
};
const {name : userName, ...balanceObj} = user;
//console.log(userName);
//console.log(balanceObj);
//What Does "Non-Blocking" Mean?
//When a programming language is said to be non - blocking,
//it means that the language does not wait for a specific previous instruction to finish executing before
// it moves to the next one
//What Does "Non-Blocking" Mean?
//When a programming language is said to be non - blocking, it means that the language does not wait for
//a specific previous instruction to finish executing before it moves to the next one
//What Does "Asynchronous" Mean?
//JavaScript is also asynchronous(async),
//which means that it can handle a large number of tasks at a time
//A callback is any function that is a parameter of an async function,
// which the async function invokes to complete its operation.
//To call an async function, you had to pass a callback as an argument like this:
function callback(result) {
    // Use the result from the Async operation
}
//randomAsyncOperation((response) => callback(response));
//If the promise is successful, it will produce a resolved value
//To create a promise, you need to create an instance object using the Promise constructor function
//The Promise constructor function takes in one parameter.
//That parameter is a function that defines when to resolve the new promise, and
//optionally when to reject it.
//Here is yet another example showing how you can resolve or reject a promise based on the conditions you set
const promise = new Promise((resolve, reject) => {
    const num = Math.random();
    if (num >= 0.5) {
        resolve("Promise is fulfilled!");
    } else {
        reject("Promise failed!");
    }
}).then(handleResolve, handleRejecte);
function handleResolve(value){
    //console.log(value)
}
function handleRejecte(error){
    //console.log(error);
}
//Promise.resolve("Successful").then((result) => console.log(result));
txt = 'tex';
var num = 6;
const string = `Something ${txt ==='text'?"text":"none"}`;
//console.log(string);
/*dosomething(result => {
    doSomethingElse(anotherResult => {
        doSomethingElseAgain(yetAnotherResult => {
            console.log(result)
        })
    })
})*/
const doSomething = async () => {
    const data = await getData();
    //console.log(data);
}
fetch('https://dummyjson.com/products').then((data) => {
    return data.json()
}).then((data) => {
    console.log(data.products[0].images[0])
})