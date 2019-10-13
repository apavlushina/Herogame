// Write your JS here
//main var and functions to pass the tests
const hero = {
    name: 'Pendalf Blue',
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
        healthValue.textContent = person.health;
    }
    return person;
};

function pickUpItem (person, weapon) {
    person.inventory.push(weapon);
};

function equipWeapon (person) {
    if (person.inventory.length)
    person.weapon = person.inventory[0];
    console.log(person.weapon);
    let newWeapon = document.getElementById('newWeapon');
    newWeapon.innerHTML = '<img class="weapon" src="./img/dagger.jpg" width="40px"></img>';
    
};

function killEnemy () {
    let heroHasWeapon = document.querySelector('.weapon');
    if (heroHasWeapon) {
        enemy.style.display = 'none';
    }
}

let updateWeapon = () => {
    hero.inventory.push(
    {
        type: "dagger",
        damage: 2,
    })
    dagger.style.display = 'none';
    dagger.removeEventListener('click', updateWeapon);

    bag.classList.add('animation');

    let sells = Array.from(document.querySelectorAll('.setup-artifacts-cell'));
    
    sells[2].innerHTML = `<img src="./img/dagger.jpg" alt="dagger" width="45px" height="45px"></img>`;
    sells[3].innerHTML = `2`;


};

const img = document.querySelector('#inn');
img.addEventListener('click', () => rest(hero));


const dagger = document.querySelector('#dagger');
dagger.addEventListener('click', updateWeapon);

const bag = document.querySelector('#bag');
bag.addEventListener('click', function() {equipWeapon(hero)} );

const enemy = document.querySelector('.enemy');
enemy.addEventListener('click', killEnemy);

//popup 

const ESC_KEYCODE = 27;
const ENTER_KEYCODE = 13;


const blockSetup = document.querySelector('.setup');
const setupOpen = document.querySelector('.setup-open');
const setupClose = blockSetup.querySelector('.setup-close');
const inputName = blockSetup.querySelector('.setup-user-name');
const setupSubmitButton = blockSetup.querySelector('.setup-submit');

const onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE && document.activeElement !== inputName) {
    closePopup();
  }
};

const openPopup = function() {
  blockSetup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

const closePopup = function() {
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

setupSubmitButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    let newName = inputName.value;
    inputName.value = newName;
    closePopup();
  })
//popup data

let healthValue = blockSetup.querySelector('.health');

healthValue.textContent = hero.health;



