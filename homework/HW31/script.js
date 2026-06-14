let winner = {
    name: "Игорь",
    colors: ["красный", "синий", "черный", "белый", "серебристый"],
    brand: "Bentley",
    getInfo: function() {
        let randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
        return this.name + " выиграл " + randomColor + " " + this.brand;
    }
};

console.log(winner.getInfo());