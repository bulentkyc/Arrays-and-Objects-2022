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

const doIHaveArray = Array.isArray({0:'abc'});

console.log(doIHaveArray);

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



