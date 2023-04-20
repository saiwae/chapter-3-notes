const readline= require('readline-sync');

let diceRolled = [];
let character = {
    //empty to start
}

createChar(diceRolled);

function rolld6(){
    return Math.ceil(Math.random()*6);
}

function rollDice(amount, list) {
    for (let i=0; i<amount; i++){
        let roll= rolld6();
        console.log(`You rolled a ${roll}`);
        list.push(roll);
    }
}

function sum(list) {
    let sum = 0;
    for (let i=0; i<list.length ; i++){
        sum += list[i]
    }
    return sum;
}

function rollStat(list){
    list = [];
    rollDice(4, list);
    return sum(list);
}

function createChar(character, list){
    character.name = readline.question("Enter character name: ");
    console.log("Rolling STR");
    character.strength = rollStat(list);
    console.log("Rolling DEX");
    character.dexterity = rollStat(list)
    console.log("Rolling CON");
    character.constitution = rollStat(list);
    console.log("Rolling INT");
    character.intelligence = rollStat(list);
    console.log("Rolling WIS");
    character.wisdom = rollStat(list);
    console.log("Rolling CHA");
    character.charisma = rollStat(list);
    console.log("Rolling KIN");
    character.kindness = rollStat(list);
    console.log("Rolling BRA");
    character.brave = rollStat(list);
    console.log("Rolling MAN");
    character.manners = rollStat(list);
    console.log(character)
}

function displayChar(char) {
    console.log('----------------------');
    console.log(`Name: ${char.name}`);
    console.log(`Name: ${char.strength}`);
    console.log(`Name: ${char.dexterity}`);
    console.log(`Name: ${char.constitution}`);
    console.log(`Name: ${char.intelligence}`);
    console.log(`Name: ${char.wisdom}`);
    console.log(`Name: ${char.charisma}`);
    console.log(`Name: ${char.kindness}`);
    console.log(`Name: ${char.brave}`);
    console.log(`Name: ${char.manners}`);
}