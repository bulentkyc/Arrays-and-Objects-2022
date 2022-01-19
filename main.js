const newItems = ['banana', 'strawberry', 'peach'];


//TODO: 2D arrays

newItems.push('apple');

newItems[4] = 'kiwi';

//newItems = ['banana']; // Not allowed
//newItems = []; // Not allowed

newItems.push('banana')

console.log(newItems);

//find

const found = newItems.find((element, i ) => {
    console.log(i, element);
    return element == 'banana'
});

//const found = newItems.find(element => element == 'peach');

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

console.log(brands);
