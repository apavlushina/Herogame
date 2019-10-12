// Write your JS here
//main var and functions to pass the tests
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

//popup 

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;


var blockSetup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = blockSetup.querySelector('.setup-close');
var inputName = blockSetup.querySelector('.setup-user-name');

var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE && document.activeElement !== inputName) {
    closePopup();
  }
};

var openPopup = function() {
  blockSetup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
  blockSetup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
  closePopup();
})


