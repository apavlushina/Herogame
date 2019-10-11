// Write your JS here
const hero = {
    name: 'Harry Potter',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "magic stick",
        damage: 2,
    }
};

function rest (person) {
    if (person.health == 10) {
        return alert("your health is good!");
    } else {
        person.health = 10;
    }
    return person;
};

function pickUpItem (person, weapon) {
    person.inventory.push(weapon);
};

function equipWeapon (person) {
    if (person.inventory.length)
    person.weapon = person.inventory[0];
};

let updateWeapon = () => {
    hero.inventory.push(
    {
        type: "dagger",
        damage: 2,
    })
};

let img = document.querySelector('#inn');
img.addEventListener('click', () => hero.health = 10);


let dagger = document.querySelector('#dagger');
dagger.addEventListener('click', updateWeapon);
console.log(dagger);

let bag = document.querySelector('#bag');
bag.addEventListener('click', function() {equipWeapon(hero)} );