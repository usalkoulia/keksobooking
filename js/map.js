// 1. Написать массив, состоящий из 8 объектов

//  1.2 Написать объект, каждый из которых должен состоять из ключей:
//    1.2.1 Ключ "author"
//      1.2.1.1 генерация значения свойства `avatar`: создать функцию, которая будет возвращать строку, в которой будет присутствовать случайное число от 1 до 8. Строка вида `img/avatars/user{{чиселко с нулем спереди}}.png`; (done)

//    1.2.2 Ключ "offer" - объект, состоящий из ключей:
//      1.2.2.1 генерация значения свойства `title`: создать функцию, которая будет возвращать строку (done)
//        1.2.2.1.1 написать массив из указанных строк ["Большая уютная квартира", "Маленькая неуютная квартира", "Огромный прекрасный дворец", "Маленький ужасный дворец", "Красивый гостевой домик", "Некрасивый негостеприимный домик", "Уютное бунгало далеко от моря", "Неуютное бунгало по колено в воде"]
//        1.2.2.1.2 написать функцию, возвращающую случайный элемент из этого массива

//      1.2.2.2 генерация значения свойства `address`: создать фунцию, которая будет возвращать строку с числом вида "{{location.x}}, {{location.y}}"

//      1.2.2.3 генерация значения свойства `price`: создать функцию, которая будет возвращать случайное число от 1000 до 1 000 000. (done)

//      1.2.2.4 генерация значения свойства `type`: создать функцию, которая будет возвращать строку (done)
//        1.2.2.4.1 написать массив из указанных строк [palace, flat, ho use, bungalo]
//        1.2.2.4.2 написать функцию, возвращающую случайный элемент из этого массива

//      1.2.2.5 генерация значения свойства `rooms`: создать функцию, которая будет возвращать случайное число от 1 до 5 (done)

//      1.2.2.6 генерация значения свойства `guests`: создать функцию, которая будет возвращать случайное число от 1 до 5 (done)

//      1.2.2.7 генерация значения свойства `checkin`: создать функцию, которая будет возвращать строку (done)
//        1.2.2.7.1 написать массив из указанных строк [12:00, 13:00, 14:00]
//        1.2.2.7.2 написать функцию, возвращающую случайный элемент из этого массива

//      1.2.2.8 генерация значения свойства `checkout`: создать функцию, которая будет возвращать строку (done)
//        1.2.2.8.1 написать массив из указанных строк [12:00, 13:00, 14:00]
//        1.2.2.8.2 написать функцию, возвращающую случайный элемент из этого массива

//      1.2.2.9 генерация значения свойства `features`: создать функцию, которая будет возвращать массив строк (done)
//        1.2.2.9.1 написать массив из указанных строк ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"]
//        1.2.2.9.2 написать функцию, возвращающую случайный элемент из этого массива
//        1.2.2.9.3 написать функцию, которая будет возвращать массив из ??? элементов, каждый элемнет будет создаваться с помощью функции описанной в 1.2.2.9.2

//      1.2.2.10 генерация значения свойства `description`: пустая строка (done)

//      1.2.2.11 генерация значения свойства `photos`: создать функцию, которая будет возвращать массив строк (done)
//        1.2.2.11.1 написать массив из указанных строк ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github .io/assets/images/tokyo/hotel3.jpg"]
//        1.2.2.11.2 написать функцию, возвращающую случайный элемент из этого массива
//        1.2.2.11.3 написать функцию, которая будет возвращать массив из ??? элементов, каждый элемнет будет создаваться с помощью функции описанной в 1.2.2.11.2

//    1.2.3 Ключ "location" - объект, состоящий из ключей:
//      1.2.3.1 генерация значения свойства `x`: создать функцию, которая будет возвращать случайное число от 130 до 630
//      1.2.3.2 генерация значения свойства `y`: создать функцию, которая будет возвращать случайное число от 130 до 630

function random(min, max) {
  var randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;

  return randomNumber;
}

//  1.2.1.1
function generateAvatar() {
  var randomNumber = random(1, 8);

  return "img/avatars/user0" + randomNumber + ".png";
}

// 1.2.2.1
var TITLE = [
  "Большая уютная квартира",
  "Маленькая неуютная квартира",
  "Огромный прекрасный дворец",
  "Маленький ужасный дворец",
  "Красивый гостевой домик",
  "Некрасивый негостеприимный домик",
  "Уютное бунгало далеко от моря",
  "Неуютное бунгало по колено в воде"
];

function randomArrayElement(array) {
  var randomIndex = random(0, array.length - 1);
  var randomElement = array[randomIndex];

  return randomElement;
}

function generateTitle() {
  var randomElement = randomArrayElement(TITLE);

  return randomElement;
}

// 1.2.2.2
function generateAddressPart() {
  var randomNumber = random(130, 630);

  return randomNumber;
}

// 1.2.2.3
function generatePrice() {
  var randomNumber = random(1000, 1000000);

  return randomNumber;
}

//1.2.2.4
var TYPE = [
  "palace",
  "flat",
  "ho use",
  "bungalo"
];

function generateType() {
  var randomElement = randomArrayElement(TYPE);

  return randomElement;
}

//1.2.2.5
function generateRooms() {
  var randomNumber = random(1, 5);

  return randomNumber;
}

//1.2.2.6
function generateGuests() {
  var randomNumber = random(1, 5);

  return randomNumber;
}

//1.2.2.7
var CHECKTIME = [
  "12:00",
  "13:00",
  "14:00"
];

function generateChecktime() {
  var randomElement = randomArrayElement(CHECKTIME);

  return randomElement;
}

//1.2.2.9

var FEATURES = [
  "wifi",
  "dishwasher",
  "parking",
  "washer",
  "elevator"
];

function generateFeatures() {
  var result = [];

  for (var i = 0; i < FEATURES.length; i++) {

    if (Math.random() > 0.5) {
      // достать итый элемент исходного массива FEATURES
      var element = FEATURES[i];

      // положить этот элемент в результирующий массив
      result[i] = element;
    }

  }

  return result;
}

//1.2.2.10
function generateDescription() {
  return "";
}

//1.2.2.11
var PHOTOS = [
  "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
  "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
  "http://o0.github .io/assets/images/tokyo/hotel3.jpg"
];

// функция-сравниватель для функции сортировки
// рандомно возвращает -1 и 1, что позволяет
// из сортировки массива сделать рандомизацию массива
function comparator() {
  if (Math.random() > 0.5) {
    return -1;
  } else {
    return +1;
  }
}

function generatePhotos() {
  var randomizedArray = PHOTOS.sort(comparator);

  return randomizedArray;
}

var result = [];

for (var i = 0; i < 8; i++) {
  var x = generateAddressPart();
  var y = generateAddressPart();

  var item = {
    author: {
      avatar: generateAvatar()
    },
    offer: {
      title: generateTitle(),
      address: x + ", " + y,
      price: generatePrice(),
      type: generateType(),
      rooms: generateRooms(),
      guests: generateGuests(),
      checkin: generateChecktime(),
      checkout: generateChecktime(),
      features: generateFeatures(),
      description: generateDescription(),
      photos: generatePhotos()
    },
    location: {
      x: x,
      y: y,
    }
  };

  result[i] = item;
}

// временно убрать класс у карты

var mapDeleteClass = document.querySelector(".map");

mapDeleteClass.classList.remove("map--faded");

// 2: использовать сгенерированные данные для создания дом-элемнетов и вставки их в дом-дерево;
// темплейт с меткой карты
var mapPins = document.querySelector(".map__pins");
var mapPin = document.querySelector("#pin")
  .content
  .querySelector(".map__pin");

// цикл, в котором вставляются картинки (0..25)
for (var i = 0; i < result.length; i++) {
  // склонированный темплейт
  var mapPinElement = mapPin.cloneNode(true);
  // и-тый элемент массива со сгенерированными элементами
  var mapPinObject = result[i];

  // вставка данных
  mapPinElement.style = "left: " + mapPinObject.location.x + "px; top: " + mapPinObject.location.y + "px";
  mapPinElement.querySelector('img').alt = mapPinObject.offer.title;
  mapPinElement.querySelector("img").src = mapPinObject.author.avatar;

  // вставка в разметку
  mapPins.appendChild(mapPinElement);
}

// темплейт блока объявления
var mapCard = document.querySelector("#card")
  .content
  .querySelector(".map__card");

var mapCardElement = mapCard.cloneNode(true);

// достать из массива со сгенерированными картинками нулевой элемент
var firstElement = result[0];

mapCardElement.querySelector(".popup__title").textContent = firstElement.offer.title;
mapCardElement.querySelector(".popup__text--address").textContent = firstElement.offer.address;
mapCardElement.querySelector(".popup__text--price").textContent = firstElement.offer.price + "₽/ночь";
mapCardElement.querySelector(".popup__text--type").textContent = firstElement.offer.type;
mapCardElement.querySelector(".popup__text--capacity").textContent = firstElement.offer.rooms + " комнаты для " + firstElement.offer.guests + " гостей";
mapCardElement.querySelector(".popup__text--time").textContent = "Заезд после " + firstElement.offer.checkin + ", выезд до " + firstElement.offer.checkout;
mapCardElement.querySelector(".popup__text--features").textContent = firstElement.offer.type;
