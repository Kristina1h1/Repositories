class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    perimeter() {
        return this.sideA + this.sideB + this.sideC;
    }

    area() {
        const p = this.perimeter() / 2;
        return Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
    }
}

const circle = new Circle(5);
console.log("Круг радиусом 5:");
console.log("Площадь:", circle.area().toFixed(2));
console.log("Периметр:", circle.perimeter().toFixed(2));

console.log();

const triangle = new Triangle(3, 4, 5);
console.log("Треугольник со сторонами 3, 4, 5:");
console.log("Периметр:", triangle.perimeter());
console.log("Площадь:", triangle.area().toFixed(2));