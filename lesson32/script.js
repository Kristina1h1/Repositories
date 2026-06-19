// Функция-конструктор


/* function Car(name,year){
    this.name = name;
    this.year = year;
}

Car.prototype.getAge = function(){
    return new Date().getFullYear() - this.year;
}

Car.prototype.color = "black";

let ford = new Car('Ford', 2019);
console.log(ford);
console.log(ford.getAge());
ford.color = "red";
console.log(ford.color);

let bmw = new Car('BMW', 2017);
console.log(bmw);
console.log(bmw.getAge());
console.log(bmw.color); */



/* function User(pName, pAge){
    this.name = pName;
    this.age = pAge;
    this.displayInfo = function(){
        document.writeln("Имя: " + this.name + "; возраст: " + this.age + "<br>")
    }
}
let tom = new User("Tom",26);
tom.displayInfo(); */




/* let form = document.form1; //получили доступ к полям формы
form.addEventListener("submit", event=> {
    event.preventDefault();//отмена действия по умолчанию

    let title = form.title.value;
    let text = form.text.value;
    let description = form.description.value;

    // console.log(title,text);
    saveForm({title: title, description}); //{title: title, text: text}
})

function saveForm(obj){
    let{title, text, description} = obj;

    let formData = {
        date: new Date().toLocaleDateString(),
        title, text, description // obj
    }
console.log("Form data: ", formData);
} */


/* let cardsArray = [
    { name: 'card1', img: 'c0.gif' },
    { name: 'card2', img: 'c1.gif' },
    { name: 'card3', img: 'c2.gif' },
    { name: 'card4', img: 'c3.gif' },
    { name: 'card5', img: 'c4.gif' },
    { name: 'card6', img: 'c5.gif' },
    { name: 'card7', img: 'c6.gif' },
    { name: 'card8', img: 'c7.gif' }
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;

function createBoard() {
    let gameBoard = document.querySelector(".game-board");
    let shuffledCards = [...cardsArray, ...cardsArray].sort(() => 0.5 - Math.random());
    shuffledCards.forEach(card => {
        let cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.dataset.name = card.name;

        let cardImage = document.createElement("img");
        cardImage.src = card.img;
        cardElement.append(cardImage);

        cardElement.addEventListener('click', flipCard);
        gameBoard.append(cardElement);
    })
}
function flipCard() {
    this.classList.add("flipper");
    if (lockBoard) {
        return;
    }
    if (this === firstCard) {
        return;
    }
    this.classList.add("flipper");
    if (!firstCard) {
        firstCard = this;
        return;
    }
    secondCard = this;
    checkForMatch();
}
function checkForMatch() {
    if (firstCard.dataset.name === secondCard.dataset.name) {
        disabledCard();
    } else {
        unflipCards();
    }
};
function disabledCard() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoar();
}

function unflipCards() {
    lockBoard = false;
    setTimeout(() => {
        firstCard.classList.remove("flipper");
        secondCard.classList.remove("flipper");
        resetBoar();
    }, 1000);
}
function resetBoar() {
    [firstCard, secondCard, lockBoard] = [null, null, null];
}
createBoard(); */



// let mas = [5, 3, 2];
// for (let i = 0; i < mas.length; i++) {
//    mas[i] = 0;
// }
// console.log(mas);

const week = {
    name: "John"
}

week.name = "Peter";

// const week = ["qqq", "www"];
// week[0] = "привет";
// week = "Строка"

console.log(week);

