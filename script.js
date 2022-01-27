/* const numberOfPassagers = 10;
for (i = 0; i < numberOfPassagers; i++) {
  console.log('Passager embarqué !');
}

console.log('Tous les passagers sont embarqués'); */

const passengers = ['Will Alexander', ' Sarah Kate', ' Audrey Simon', ' Tao Perkington'];
for (let i in passengers) {
  document.getElementById('numberOfPassengers').innerHTML = passengers;
}

const passengers2 = [
  {
    name: 'Will Alexander',
    ticketNumber: 209542,
  },

  {
    name: 'Sarah Kate',
    ticketNumber: 169336,
  },

  {
    name: 'Audrey Simon',
    ticketNumber: 779042,
  },

  {
    name: 'Tao Perkington',
    ticketNumber: 703911,
  },
];

for (let passenger of passengers2) {
  let result = `Le passager du nom ${passenger.name} embarque avec comme numéro ${passenger.ticketNumber}`;
  //console.log(result);
  document.getElementById('numberOfPassengers3').innerHTML += `<br> ${result}.`;
}

//------------------------------------------

//------------------------------------------------

let online = true;
let message = '';

if (online) {
  message = 'Utilisateur en ligne !';
} else {
  message = 'Utilisateur hors ligne !';
}

//----------------------------------------
//------------------------------------------

//console.log(message);
let passengersBoarded = 0;

if (passengersBoarded <= 10) {
  passengersBoarded += 10;
} else {
  passengersBoarded -= passengersBoarded - 10;
}
//console.log(passengersBoarded);
//------------------------------------------
//------------------------------------------

let passengersRemaining = true;
let planeIsFull = false;

let continueBoarding = false;

if (passengersRemaining || planeIsFull) {
  continueBoarding = true;
}
//console.log(continueBoarding);

//------------------------------------------
//------------------------------------------

const user = {
  name: 'Will Alexander',
  nationality: 'Scottish',
  accountLevel: 'premium',
};

let welcomeMessage = '';

switch (user.accountLevel) {
  case 'Will Alexander':
    welcomeMessage = 'Hi Will!';
    break;
  case 'Scottish':
    welcomeMessage = 'Och aye the noo!';
    break;
  case 'normal':
    welcomeMessage = 'Welcome back!';
    break;
  case 'premium':
    welcomeMessage = 'Welcome power user!';
    break;
  default:
    welcomeMessage = 'Hello there!';
}
//console.log(welcomeMessage);

//------------------------------------------
//------------------------------------------

let vipStatus = '';

let guest = {
  name: 'Sarah Kate',
  age: 21,
  ticket: true,
  guestType: 'artist',
};

switch (guest.guestType) {
  case 'artist':
    vipStatus = 'Normal';
  case 'star':
    vipStatus = 'Important';
    break;
  case 'presidential':
    vipStatus = 'Mega-important';
    break;
  default:
    vipStatus = 'None';
}
//console.log(vipStatus);

//------------------------------------------
//------------------------------------------

for (let i = 0; i < 5; i++) {
  //console.log('Oh hey!');
}

//------------------------------------------
//------------------------------------------

const passengers3 = ['Will Alexander', 'Sarah Kate', 'Audrey Simon', 'Tao Perkington'];

let passengersBoarded3 = 10;

for (let i in passengers) {
  passengersBoarded++;
  //console.log(passengersBoarded3);
}

//------------------------------------------
//------------------------------------------

const guests = [
  {
    name: 'Will Alexander',
    vip: false,
  },
  {
    name: 'Sarah Kate',
    vip: true,
  },
  {
    name: 'Audrey Simon',
    vip: true,
  },
  {
    name: 'Tao Perkington',
    vip: false,
  },
];

let vips = 0;
let normies = 0;

for (let guest of guests) {
  if (guest.vip) {
    vips++;
  }
}

//console.log(vips);

//------------------------------------------
//------------------------------------------

let guestsSeated = 5;

let seatsRemaining = 10;
let guestsRemaining = 7;

while (seatsRemaining > 0 && guestsRemaining > 0) {
  guestsSeated++;
  seatsRemaining--;
  guestsRemaining--;
}
//console.log(guestsSeated);

//------------------------------------------
//------------------------------------------

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  showBalance() {
    //console.log(`Solde: ${this.balance} EUR`);
  }
}

const newAccount = new BankAccount('Will Alexander', 500);

newAccount.showBalance();

//------------------------------------------
//------------------------------------------

class Book {
  constructor(title, author, description, pages, currentPage, read) {
    (this.title = title), (this.author = author), (this.description = description), (this.pages = pages), (this.currentPage = currentPage), (this.read = read);
  }
  readBook(page) {
    if (page < 1 || page > this.pages) {
      return 0;
    }
    if (page >= 1 && pages < this.pages) {
      this.currentPage = page;
      return 1;
    }
    if (page === this.pages) {
      this.currentPage = page;
      this.read = true;
      return 1;
    }
  }
}

const livre = new Book("J'apprend le JavaScript", 'Arnaud Grandpierre', "C'est long ....", 350, 1, false);
const livre2 = new Book('Je test le JavaScript', 'Arnaud Grandpierre', "C'est dur ....", 480, 1, false);
const livre3 = new Book('Je maîtrise le JavaScript', 'Arnaud Grandpierre', 'Je vais y arriver !', 500, 1, false);

/* livre.readBook(page); */

const books = [livre, livre2, livre3];

//------------------------------------------
//------------------------------------------

/* let elt = document.body;
elt.addEventListener('mousemove', function (event) {
  const x = event.offsetX; // Coordonnée X de la souris dans l'élément
  const y = event.offsetY; // Coordonnée Y de la souris dans l'élément
  console.log(x);
  console.log(y);
}); */

//------------------------------------------
//------------------------------------------

const input = document.getElementById('name');
const name2 = document.getElementById('res-name');

input.addEventListener('input', (e) => {
  name2.innerText = e.target.value;
});

const gender = document.getElementById('gender');
const gender2 = document.getElementById('res-gender');

gender.addEventListener('change', (e) => {
  gender2.innerText = e.target.value;
});

const mouseX = document.getElementById('mouse-x');
const mouseY = document.getElementById('mouse-y');
const result = document.getElementById('result');

result.addEventListener('mousemove', (e) => {
  mouseX.innerText = e.offsetX;
  mouseY.innerText = e.offsetY;
});

//------------------------------------------
//------------------------------------------

const fetch2 = fetch('https://mockbin.com/request?greetings=salut');
//console.log(fetch2);

fetch2
  .then((res) => res.json())
  .then((data) => {
    let data2 = data.queryString.greetings;
    //console.log(data2);
    const askHello = document.getElementById('ask-hello');
    askHello.addEventListener('click', () => {
      let helloResult = document.getElementById('hello-result');
      helloResult.innerHTML = data2;
    });
  });

//------------------------------------------
//------------- 3ème Exercice sur les formulaires---------------
//------------------------------------------

function getCodeValidation() {
  return document.getElementById('code-validation');
}

function disableSubmit(disabled) {
  if (disabled) {
    document.getElementById('submit-btn').setAttribute('disabled', true);
  } else {
    document.getElementById('submit-btn').removeAttribute('disabled');
  }
}

document.getElementById('code').addEventListener('input', (e) => {
  if (/^CODE-/.test(e.target.value)) {
    getCodeValidation().innerText = 'Code validé !';
    disableSubmit(false);
  } else {
    getCodeValidation().innerText = 'Code invalide !';
    disableSubmit(true);
  }
});

//------------------------------------------
//------------- Fin 3ème Exercice sur les formulaires---------------
//------------------------------------------

//------------------------------------------
//------------- 4ème Exercice : Envoyez des données avec une requête POST---------------
//------------------------------------------

function send(e) {
  e.preventDefault();
  fetch('https://mockbin.com/request', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value: document.getElementById('value').value }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((value) => {
      document.getElementById('result2').innerText = value.postData.text;
    });
}

document.getElementById('form').addEventListener('submit', send);
//------------------------------------------
//------------- Fin 4ème Exercice : Envoyez des données avec une requête POST---------------
//------------------------------------------

//------------------------------------------
//------------- 5ème Exercice : Gérez du code asynchrone---------------
//------------------------------------------
async function getNumber1() {
  return 10;
}

async function getNumber2() {
  return 4;
}

async function compute() {
  const value1 = await getNumber1();
  const value2 = await getNumber2();
  const valueTotal = value1 + value2;
  document.getElementById('result3').innerHTML = valueTotal;
  return valueTotal;
}
compute();

//------------------------------------------
//------------- Fin 5ème Exercice : Gérez du code asynchrone---------------
//------------------------------------------

//------------------------------------------
//------------- 6ème Exercice : ---------------
//------------------------------------------

//------------------------------------------
//------------- 6ème Exercice : ---------------
//------------------------------------------
