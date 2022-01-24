const newItems = ['banana', 'strawberry', 'peach'];


//TODO: 2D arrays

newItems.push('apple');

newItems[4] = 'kiwi';

//newItems = ['banana']; // Not allowed
//newItems = []; // Not allowed

newItems.push('banana')

console.log(newItems);

//find

/* const found = newItems.find((element, i ) => {
    console.log(i, element);
    return element == 'banana'
}); */

const found = newItems.find(element => element == 'peach');

console.log(found);

//findIndex:

const foundIndex = newItems.findIndex(element => element == 'banana');

console.log(foundIndex);

//filter:

const filteredFound = newItems.filter(fruit => fruit == 'banana');

console.log(filteredFound);

//reverse

newItems.reverse();

console.log(newItems);

///////

const myNewArr = new Array('Tchibo', 'Jacobs', 'Nescafe');
const testA = ['Tchibo', 'Jacobs', 'Nescafe'];
console.log(typeof(myNewArr));
console.log(typeof(testA));

console.log(myNewArr);

const doIHaveArray = Array.isArray([]);//true

console.log(doIHaveArray);

console.log(Array.isArray({0:'abc'}));//false
console.log(Array.isArray(myNewArr));//treu
console.log(Array.isArray(filteredFound));//true

//////////////////

/* const another = {}; */

const myCoffee = {
    water: 200,
    milk: 30,
    beans: 'strong',
    /* something: another     */
}
/* 
another.key = myCoffee; 

console.log(another, myCoffee);*/

const aboutCoffee = Object.keys(myCoffee);
console.log(aboutCoffee);

const aboutCoffeeThings = Object.values(myCoffee);
console.log(aboutCoffeeThings);

/////////////////////////////////////////////////////////
//Destructuring:
//Concept
let brands = ['BMW', 'Porsche', 'Skoda', 'Lada'];
/* 
let car1;
let car2;
let car3;
let car4;
this block is same as the line below.
 */
let car1, car2, car3, car4;

car1 = brands[0];
car2 = brands[1];
car3 = brands[2];
car4 = brands[3];

brands.pop();
brands.pop();
brands.push('Mercedes');

console.log(car1);
console.log(car2);
console.log(car3);//Mercedes //Skoda
console.log(car4);
car4 = 'Suzuki';
console.log(car4);
console.log(brands);
/* -------------------------------------------------------------------------- */

let garage = [
    {
        brand:'BMW', 
        engine:3
    },
    {
        brand:'Porsche', 
        engine:5
    }, 
    {
        brand:'Skoda', 
        engine:2
    }, 
    {
        brand:'Lada', 
        engine:1
    }
];

let auto1, auto2, auto3, auto4;

auto1 = garage[0];
auto2 = garage[1];
auto3 = garage[2];
auto4 = garage[3];

garage.pop();

console.log(auto1);
console.log(auto2);
console.log(auto3);
console.log(auto4); //undefined //obeject for lada // delete engine

delete auto1.brand;
delete auto1.engine;

console.log(garage);
console.log(auto4);

//Syntax:
const testArr = ['fox', 'rabbit', 'dog', 'cat', 'lion']
let x,y,z, others;
[x,y,,z, ...others] = testArr;

console.log(x);
console.log(y);
console.log(z);
console.log(others);

/*
const testArr = ['fox']
let x,y,z;
[x,y] = testArr;

console.log(x);//fox
console.log(y);//undefined
console.log(z);/undefined
*/


/*
const testArr = ['fox', 'rabbit', 'dog']
let x,y,z;
[x,y] = testArr;

console.log(x);//fox
console.log(y);//rabbit
console.log(z);//undefined

*/

//Destuctring Objects 
//Syntax & Concept

let myCar = {
    brand: 'Bentley',
    engine: 5000,
    color: 'white',
    seats: 'lether',
    panaroma: true
}

let abc, engine, color, seats, brand;
/*
order of variables is not important 
but variable names have to be same as keys
*/
({abc, engine, color, seats, brand} = myCar);
/* 
The code line 200 makes the as same as the block below
abc = myCar.abc;
engine = myCar.engine;
color = myCar.color;
seats = myCar.seats;
brand = myCar.brand;
 */
console.log(abc);//undefined
console.log(engine);
console.log(color);
console.log(seats);
console.log(brand);

//Remember: We can create objects with variables as key and value.
let a = 1, b = 2, c = 3;

let newestObj = {a,b,c}

console.log(newestObj);

///////////////////////////////////////
//Capitalise the value without updating the object
console.log(myCar.color[0].toLocaleUpperCase()+myCar.color.slice(1));

console.log(myCar.color);


///////////////////////////////////////
//Destructuring others with ...

let panaroma, rest;

({panaroma, ...rest} = myCar);

console.log(panaroma);
console.log(rest);

///////////////////////////////////////
//Destructring array to use items as parameters

const coffeeMachine = (coffeAmount, waterAmount, milk) => {
    const coffee = {
        coffeAmount, 
        waterAmount, 
        milk
    }
    return coffee;
}

console.log(coffeeMachine('20g', '200ml', true));

const myCoffeeRecepie = ['50g', '100ml', false];

console.log(coffeeMachine(...myCoffeeRecepie));
///////////////////////////////////////
//Callback Functions

const gift = (event, person) => {
    return {event, person, gift: 'Some gift'};
}

const party = (event, person) => {
    return {event, person, people: 'Essence', foods: 'Some foods', musics: 'Some Music', isAlcohol: false}
}

const celebrate = (event, person, celebrationType) => {
    console.log(`Hey ${person} congrats for the ${event}!
    Here you are:`)
    console.log(celebrationType(event, person));
}

celebrate('birthday', 'Bülent', gift);

celebrate('birthday', 'Bülent', party);

celebrate('birthday', 'Bülent', (event, person) => {
    return {event, person, isOnline: true}
});

console.log(gift);

//Example2

const sum = (a, b, dci) => {
    const result = a + b;
    //log the result
    //alert the result
    //console.log(result);
    dci('Calculation is done');
    return result;
}

const display = (item) => {
    console.log(item);
    alert(item);
}

sum(3,5, display);

//Example3

const pc = (electricity, inputs, slot) => {
    if (electricity) {
        if (inputs) {
            return slot(electricity);
        } else {
            return 'PC needs all inputs to run!'
        }
    } else {
        return `Pc doesn't work!`;
    }
}


const cdWriter = (electricity) =>{
    if (electricity) {
        return 'Burn CD'
    } 
}

const blueRayWriter = (electricity) =>{
    if (electricity) {
        return 'Blueray is ready'
    } 
}

console.log(cdWriter);
console.log(blueRayWriter(true));

alert(pc(true, true, blueRayWriter));

const myTestO = () => {
    return 'Hello World'
}

const myTestO2 = myTestO;

console.log(myTestO2());