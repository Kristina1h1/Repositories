/* let area = document.getElementById("area");
let curPlayer = document.getElementById("curPlayer");
let cell;

let player = 'x';
let stat = {
    'x': 0,
    'o': 0,
    'd': 0
}

let winIndex = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

for (let i = 1; i <= 9; i++) {
    area.innerHTML += "<div class = 'cell' data-pos='" + i + "'>";
}

cell = document.querySelectorAll(".cell");

for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener("click", cellClick);
}

function cellClick() {
    let data = [];

    if (!this.innerHTML) {
        this.innerHTML = player;
    } else {
        alert("Ячейка занята");
        return;
    }

    for (let i in cell) {
        if (cell[i].innerHTML == player) {
            data.push(cell[i].getAttribute("data-pos"));
        }
    }

    if (checkWin(data)) {
        stat[player] += 1;
        updateStat();
        alert("Выиграл: " + player);
        
    } else {
        let draw = true;
        for (let i in cell) {
            if (cell[i].innerHTML == '') {
                draw = false;
            }
        } if (draw) {
            stat.d += 1;
            restart("Ничья");
            return;
        }
    }

    player = player == 'x' ? "o" : "x";
    curPlayer.innerHTML = player.toUpperCase();

    console.log(data);
}

function checkWin(data) {
    console.log("!!!!");

    for (let i in winIndex) {
        let win = true;
        for (let j in winIndex[i]) {
            let id = String(winIndex[i][j]);
            let ind = data.indexOf(id);

            if (ind == -1) {
                win = false;
            }
        }
        if (win) {
            return true;
        }

    }
    return false;
}

function restart(text) {
    alert(text);
    for (let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = "";
    } 
    updateStat();
}

function updateStat() {
    document.getElementById("sX").innerHTML = stat.x;
    document.getElementById("sO").innerHTML = stat.o;
    document.getElementById("sD").innerHTML = stat.d;
} */

/* let car = {
    name: "Volvo",
    year: 2019,
    colors: {
        first: "yellow",
        second: "blue"
    },
    color: [
        "black",
        "white",
        "red",
        "blue"
    ],
    hello: function () {
        document.writeln("Привет<br>");
    }
};

console.log(car);
document.writeln(car.name + " " + car.color[1] + " " + car.colors.second); //свойство
car.hello(); //метод
hello();
// let fill = car.color.filter(function (elem) {
//     return elem.length < 5;
// });
// document.writeln(fill + "<br>");
// let mas = car.color.map(function (elem, index, all) {
//     return index + ") + elem + " массив: " + all + "<br>";
// });
// document.writeln("<br>" + mas + "</br>");
// let mas1 = car.color.map(elem => elem.toUpperCase());
// document.writeln("<br>" + mas1 + "</br>"); */




/* let calc = {
    num1:5,
    num2:6,
    calculate: function(){
        this.res = this.num1 * this.num2;
    }
}
calc.calculate();
document.writeln(calc.res); */


/* let x = 15, y = 10;

let coords = {
    x:x,
    y:y,
    calcSq: function(){
        document.writeln(this.x * this.y);
}
}
coords.calcSq(); */



let user = {
    login: {
        firstName: 'Kate',
        lastName: "Pavlova"
    },
    psw: 'qwerty',
    role: 'guest'
}

let log = user.login.firstName;
console.log(log);

let {login: {firstName: f, lastName: l}, ...q} = user;
document.writeln(f + " " + l + " " + q.psw + " " + q.role);



/* //дз
// Создать объект, который выиграл автомобиль (цвет случайным образом). 
// В объекте хранится имя, массив цветов и марка автомобиля (свойства объекта). 
// Вывод информации будет в методе
// Игорь выиграл красный Bentley


let winner = {
    name: "Игорь",
    colors: ["красный", "синий", "черный", "белый", "серебристый"],
    brand: "Bentley",
    getInfo: function() {
        let randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
        return this.name + " выиграл " + randomColor + " " + this.brand;
    }
};

console.log(winner.getInfo()); */


