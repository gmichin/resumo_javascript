// Locais para ajuda: Google, StackOverflow & MDN

// Para API's publicas pesquisar no google ou github por esse nome
// Exemplo em: https://github.com/public-api-lists/public-api-lists

// NUMEROS ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Para manipulação de números tem a biblioteca Math num geral.
// Exemplo em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math
console.log(Number('23')); // converte para numero
console.log(Number.parseInt('  2.5rem  ')); // converte para inteiro
console.log(Number.parseFloat('  2.5rem  ')); // converte para float
console.log(Number.isNaN(20)); // checando se é NaN
console.log(Number.isFinite(20)); // checando se é um numero
console.log(5 % 2); // retorna a sobra dessa divisão
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DATAS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  return new Intl.DateTimeFormat(locale).format(date);
}; // formata como date. No local de local, vai formar a data para o padrão do local que for colocado. Exemplos: en-US, de-DE
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  // weekday: 'long',
};
labelDate.textContent = new Intl.DateTimeFormat(
  currentAccount.locale,
  options
).format(now); // tem várias opções de formatação

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
}; // formata para número, com estilo(style) do de moeda e o padrão do local(currency). Exemplos: USD, EUR

const date = new Date(acc.movementsDates[i]); //converte a string (em formato de data) para data

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// MENSAGENS//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const answer = Number(prompt('Your answer')); // faz aparecer o prompt e armazena a resposta nessa variavel, nessa linha converte para Number
console.log(); // escrita no console classica
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CONDICIONAIS//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const i = 10;
if (i > 10) console.log('não é maior que 10');
else if (i < 10) console.log('não é menor que 10');
else console.log('é o nº 10');

switch (i) {
  case (i = 10):
    console.log('não é maior que 10');
    break;
  case i < 10:
    console.log('não é menor que 10');
    break;
  default:
    console.log('é o nº 10');
    break;
}

i = 10 ? console.log('não é o nº 10') : console.log('é o nº 10');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LOOPS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
for (i = 0; i < 10; i++) {} // maneira classica de loop
while (i < 10) {} // segunda maneira classica
for (const [i, text] of arr.entries()) {
} // entries faz com que vc possa usar 'i' como indice e text como o conteudo do array
arr.forEach((it, i) => {}); //pode usar apenas it que contem o conteudo do array, mas i é o indice
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//OPERAÇÕES JS///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const rest1 = {
  name: 'Capri',
  numGuests: 20,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
// Designação do operador OU (OR)
rest1.numGuests = rest1.numGuests || 10; // se rest1.numGuests não existir, ele irá retornar 10 (0 tambem conta como não existir)
rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests ||= 10; //mesma coisa que acima
rest2.numGuests ||= 10;
// Designação do operador de anulação (null ou undefined)
rest1.numGuests ??= 10; // se rest1.numGuests for null ou undefined, ai sim ele troca para 10
rest2.numGuests ??= 10;
// Designação do operador E (AND)
rest1.owner = rest1.owner && '<ANONYMOUS>'; // se o rest1.owner existir, ele irá retornar'<ANONYMOUS>'
rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>'; // mesma coisa que acima
rest2.owner &&= '<ANONYMOUS>';
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// MANIPULAÇÃO DE STRINGS ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let variavelLowerCase = text.toLowerCase(); // deixa toda string em letras minúsculas
let variavelUpperCase = text.toUpperCase(); // deixa toda string em letras maiusculas
let variavelSplit = text.split('_'); // separa a string onde tiver esse caractere (no caso "_")
let variavelReplace = second.replace('a', 'b'); // troca todas letras a por b da string
let variavelPadEnd = text.padEnd(20, 'a'); // faz com que o final da string seja completada, no caso, para 20 caracteres, ocupando os espaços com 'a'
let variavelPadStart = text.padStart(20, 'a'); // faz com que o começo da string seja completada, no caso, para 20 caracteres, ocupando os espaços com 'a'
let variavelRepeat = 'a'.repeat(5); // repete tal caractere, no caso, 5 vezes (retorno sera: aaaaa)
let variavelIncludes = text.includes('a'); // Vê se existe esse elemento na string retornando true ou false
text.length; //tamanho da string
text.indexOf('a'); // o primeiro indice que tem uma letra a
text.lastIndexOf('a'); // o ultimo indice que tem uma letra a
text.slice(4, 7); // recorta e mostra apenas o pedaço da string entre os indices 4 e 7
arr1.join(', '); // junta todo array em uma string com ', ' entre eles
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FUNÇÕES //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const function1 = function (up = 10) {}; // No Javascript posso deixar um valor por default no parametro da função
function function2() {}
arrowFunction = () => {};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ES6 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// MANIPULAÇÃO DE ARRAYS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let arr1 = [3, 5, 2, 12, 7];
let arr2 = [4, 1, 15, 8, 3];
let allVariaveis = arr1.concat(arr2); //irá juntar os dois arrays (retorno: 3, 5, 2, 12, 7, 4, 1, 15, 8, 3)
let findVariavel = arr1.find(12); // acha esse elemento no array retornando o mesmo
let procuraVariavel = arr1.find(it => it.includes(it > 4)); //junção dos dois acima que retorna todo número do array maior que 4
let mapVariavel = arr1.map(it => (it <= 2 ? 1 : 2)); // irá mapear o array, nesse caso se o nº for <= 2 então vai virar 1, senão vira 2
let filterVariavel = arr1.filter(it => it >= 2); // irá filtrar o array, nesse caso irá retornar apenas os nº >= 2
let reduceVariavel = arr1.reduce((acc, age) => acc + age, 0); //irá reduzir todo array para um único valor que é a soma de todos os nº
let chainVariavel = arr1
  .map(it => (it <= 2 ? 1 : 2))
  .filter(it => it >= 2)
  .reduce((acc, age) => acc + age, 0); // irá fazer tudo acima em corrente
arr1 = arr1.slice(1, -2); // irá cortar um pedaço (retorno: 5, 2)
arr1.includes(3); // Vê se existe esse elemento no array retornando true ou false
arr1.push(10); // adiciona o elemento no array
arr1.remove(10); //remove o elemento do array
arr1.pop(); //remove o ultimo elemento do array
arr1.join(', '); // junta tudo em uma string com ', ' entre eles
arr1.some(it => it > 4 && it < 7); // Vê se existe algum elemento no array que atende essas condições retornando true ou false
arr1.sort((a, b) => a - b); //organiza o array em ordem crescente. Para ser descrescente colocar b - a

// Convert map to array
console.log([...map]); // o '...' (spread) inclui todos os valores do array
// console.log(question.entries());
console.log([...map.keys()]);
console.log([...map.values()]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// MAP //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const map = new Map([
  [1, 'Exemplo 1'],
  [2, 'Exemplo 2'],
  [2, 'Exemplo 2'],
]);

console.log(Object.entries(objeto)); // Convertendo objeto para map
const objetoMap = new Map(Object.entries(objeto));
console.log(hoursMap);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// OBJETO ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const objeto = {
  nomeDoObjeto1: {
    valor: 12,
  },
  nomeDoObjeto2: {
    valor: 11,
  },
};
console.log(objeto.nomeDoObjeto3?.valor); // o '?' é um tipo de condicional que somente se existir (neste caso) nomeDoObjeto irá procurar seu valor
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SET ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(new Set('Jonas')); // faz um Set com as 5 letras do nome Jonas, todas separadas
console.log(ordersSet.size); // indica o tamanho do Set (sem repetir)
console.log(ordersSet.has('Pizza')); //indica se tem "Pizza"
ordersSet.add('Garlic Bread'); //adiciona
ordersSet.delete('Risotto'); //remove

const rest = new Map();
console.log(rest.set(2, 'Lisbon, Portugal')); //atribui a rest
rest.set('name', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']); //cria name para armazenar todas as strings
console.log(rest.get('name')); // retornar name
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//JSON //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const json = {
  'exemplo 1': 'exemplo',
  'exemplo 2': 2,
};
const uniqueEvents = [...new Set(gameEvents.values())]; // mostra todos valores (2º campo) sem repetir
const notUniqueEvents = [...gameEvents.keys()]; // mostra todos valores (1º campo) repetindo
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DOM //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let valueVariavel = document.querySelector(
  '.nome_da_classe ou #nome_do_id'
).value; // armazena nessa variavel o valor do campo selecionado
const slides = document.querySelectorAll('.nome_da_classe ou #nome_do_id'); //pega todas classes ou ids com esse nome
const variavel = document.querySelector('.nome_da_classe ou #nome_do_id'); // seleção da classe ou id html a ser manipulado
variavel.getAttribute('href'); // pega esse atributo em específico
variavel.classList.add('hidden'); // o "hidden" é um trecho do html que esconde o conteúdo e .add adiciona o "hidden"
variavel.classList.contains('hidden'); // .contains vê e contém tal entrada, retornando true ou false
variavel.classList.toggle('hidden'); // adiciona e remove

// Deletando elementos (inicio)
variavel.classList.remove('hidden'); // classList seleciona a classe a ser manipulada e .remove remove o "hidden
variavel.parentElement.removeChild(message);

// Criando ou inserindo elementos
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
message.insertAdjacentHTML('beforeend', `<button></button>`);

const openModal = function (e) {
  e.preventDefault(); //previne que ocorra o "default" evento
};
variavel.addEventListener('click', closeModal); // addEventListener adiciona um evento, e em 'click' pode ser colocado outros eventos
variavel.addEventListener('click', function () {}); // podemos colocar uma função pronta como acima ou criar uma nova

// Scrolling
// const section1 = document.querySelector('#section--1');
// const s1coords = section1.getBoundingClientRect();
// window.scrollTo(
//   s1coords.left + window.pageXOffset,
//   s1coords.top + window.pageYOffset
// );

// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: 'smooth',
// });
variavel.scrollIntoView({ behavior: 'smooth' });

// Styles: posso colocar todas variaveis de css
variavel.style.backgroundColor = '#37383d';
variavel.style.width = '120%';

// Attributes: posso pegar todos atributos de tal elemento
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);
console.log(logo.src);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FETCH & PROMISSES ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// promisses são literalmente promessas. Um espaço reservado para o resultado futuro de uma operação assíncrona
// Prometendo setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'), // entrada para um sucesso da promise
  Promise.reject('ERROR'), // entrada para um erro da promise
  Promise.resolve('Another success'), // entrada para outro sucesso da promise
]).then(res => console.log(res)); // escreve a entrada resultado da promise
// pode ser feito dessa forma também
Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  }) // .then é uma promise
  .then(() => {
    console.log('2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => console.log('4 second passed'));
// promise de funções
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url)
    .then(response => {
      // ao fazer fetch, se é retornado uma promise
      // irá fazer uma busca por essa url
      if (!response.ok) throw new Error(`${errorMsg} (${response.status})`); // throw new Error uma resposta para erro manual, um tipo de catch

      return response.json();
    })
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    }) //o catch pega qualquer erro que ocorra anteriormente na corrente de promises
    .finally(() => {
      countriesContainer.style.opacity = 1;
    }); // o finally é uma função que não importa o que aconteça anteriormente, ele sempre irá ocorrer
};
// promise com try / catch
// async coloca a função com uma função assíncriona e faz ela automaticamente retornar uma promise
const whereAmI = async function () {
  //try pode ser um .then
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`); //await faz com que o código espere o resultado dessa promise que é o fetch no caso
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );

    // BUG in video:
    // if (!resGeo.ok) throw new Error('Problem getting country');

    // FIX:
    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    // catch igual ao outro
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PROGRAMAÇÃO ORIENTEADA A OBJETOS (POO) OU EM INGLÊS OBJECT ORIENTED PROGRAMMING (OOP) ////////////////////////////////////////////////////
// ES6 Classes

// Expressão de classes
const PersonClexpression = class {};
// declaração de classes. Um prototype é criado automaticamente
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  } // construtor
  // metodos intancias
  // os métodos irão ser adicionados nas propriedades de prototype
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  // pega as propriedades
  get speedUS() {
    return this.speed / 1.6;
  }

  // prepara propriedades existentes
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  // metodo estatico
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}
// extends significa herança que herda as propriedade, nesse caso, de CarCl
class EVCl extends CarCl {
  #charge; // deixou charge privado (ENCAPSULAMENTO)
  constructor(make, speed, charge) {
    super(make, speed); // set as propriedades herdadas
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}
const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// ao chamar uma função como rivian.accelerate() nós abstraimos o que ocorreu dentro da função accelerate() (ABSTRAÇÃO)
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();
// e ao fazer uma corrente de funções utilizando abstração, encapsulamento e herança nós realizamos o POLIMORFISMO

console.log(rivian.speedUS);

// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
console.log(steven);
steven.calcAge();
console.log(steven.__proto__ === PersonProto); // um objeto criado é igual o prototype

const steven = PersonProto;
console.log(steven);
steven.name = 'Steven';
steven.__proto__.birthYear = 2002; // esse birthYear não irá aparecer pois esta escondido dentro de prototype
console.log(steven); // contudo em prototype existem todas as função e mais name e birthYear
steven.calcAge(); // aqui irá retornar um birthYear pois existe birthYear, mas não em "steven"
console.log(steven.__proto__ === PersonProto); // aqui ja não seriam a mesma coisa
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
