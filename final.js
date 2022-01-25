//Methods
//Syntax & Concept

const test = false;

const myObject = {
    drink: 'coke',
    getDrink: function() {
        if (test) {
            const preferedDrink = prompt(`What would you like to drink?`);
            alert(`Here you're your ${preferedDrink}`);
        } else {
            console.log(this.drink); 
            //console.log(this === window); //true in arrow func, false in function keyword
            //drink is not defined 
            //this.drink is undefined if the method defined as arrow function
            //this.drink works just if method defined with function keyword
        }
    }
}

console.log(myObject.drink);
console.log(myObject.getDrink);

//getDrink(); //getDrink is not defined
myObject.getDrink();

//Parent scope variables are reachable from methods
//"this" keyword in general called as context


////////////////////////////////////////////////////////////////////////////
//Spread operators (Shallow clonning)
//There could be referance cloning.

const testArray = ['apple', 'banana', 'cherry'];

console.log(testArray);
console.log(...testArray);

const myNewArray = [...testArray]; // Shallow clonning
console.log(myNewArray);

const myMirrorArray = testArray; //Cloning the referanse
console.log(myMirrorArray);

myMirrorArray.push('Ananas');
myNewArray.push('Mango');
testArray.push('Orange');

console.log('testArray',testArray);
console.log('myNewArray', myNewArray);
console.log('myMirrorArray', myMirrorArray);

const myBox = [
    {
        brand: 'Milka', 
        type: 'Milk bar'
    },
    {
        brand: 'Kinder', 
        type: 'Riegel'
    },
    {
        brand: 'Kider', 
        type: 'Surprise'
    },
];

const newBox = [...myBox];

newBox.pop()


newBox[0].shape = 'ball';

// Deep Cloning:
// There's no any referance cloning.

const chocoBox = JSON.parse(JSON.stringify(myBox));

chocoBox[0].shape = 'triangle';

console.log(myBox, newBox, chocoBox);

//Recursive functions for deep cloning

const clone = array => array.map(item => Array.isArray(item)?clone(item):item);

const testArr = [100, 321, 'Hello World', ['apple', 'banana'], [1,2,3]];

const cloneTest = clone(testArr);

testArr.pop();

console.log(testArr, cloneTest);


/////////////////////////////////////////////////////
// Spread operators in objects

const myTestObj = {
    fruit: 'apple',
    count: 5,
    origin: 'Netherlands'
}

const myMirrorObj = myTestObj;

const myCopyObj = {...myTestObj, color: 'green'};

myMirrorObj.count = 1;

console.log(myTestObj, myMirrorObj, myCopyObj);

/////////////////////////////////////////////////////
//Nested Objects and Arrays

const dciCourses = [
    {
        courseName: 'WebDev', 
        classes: [
            {
                name: 'Essence', 
                attendees: [
                    'Abdulhakeem', 
                    'Allan', 
                    'Andrija', 
                    'Anne', 
                    'Carlos'
                ]
            }, 
            {
                name: 'WD-E06-01', 
                attendees: [
                    'Steve', 
                    'Newton', 
                    'Einstein'
                ]
            }
        ]
    },
    {
        courseName: 'Online Marketing', 
        classes: [
            {
                name: 'OM-E05-01', 
                attendees: [
                    'Bill', 
                    'Jhon', 
                    'Deon', 
                    'Imelda', 
                    'El Patron'
                ]
            }
        ]
    }
];