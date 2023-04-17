// create an object of key-value pairs
let contacts = {
    bff: 1234567,
    mom: 5555555,
    bro: 1592467
}

//log all
console.log(contacts);

//access a specific entry by its key (name)
console.log(contacts.bff);

//can't access if the key doesn't exist
console.log(contacts.myself);

//add a new entry
contacts.sis = 3456677;
console.log(contacts.sis);

//update an entry
contacts.bff = 1111111;
console.log(contacts)

//delete an entry
delete contacts.mom;
console.log(contacts);

//is there a key called __ in there?
console.log("bff" in contacts);
console.log("myself" in contacts);

//objects are like arrays - pass by reference (location) not by value

//notice the following
let a = {
    value:20
};
let b = a;
let c = {
    value:20
};

console.log(a==b); //same object, as b points to a
console.log(a==c); //different objects with same value
console.log(b==c); //different objects with same value
console.log(a.value == c.value); //the value is the same, but not the object

//numbers are passed by value, not by reference. Similar for strings and booleans.
//create 5 objects below:

let dog = {
    dogName: 'Zelda',
    breed: 'Terrier',
    age: 9,
    size: 'medium',
    barks: true
};
console.log(dog);

let drink = {
    brand: 'celsius',
    flavor: 'mango dragonfruit',
    sparkling: true,
    size: '12 fl oz',
    blackLid: true
};
console.log(drink);

let phone = {
    supplier: 'apple',
    color: 'white',
    model: '13',
    case: true,
    storage: '128 gb'
};
console.log(phone);

let room = {
    walls: 'purple'
    ledLights: true,
    windows: 2,
    posters: true,
    tv: 62
}
console.log(room);

let laptop = {
    processor: 'i5',
    ram: 8,
    display: '16 inch',
    storage: '256 gb',
    brand: 'asus'
}
console.log(laptop);

