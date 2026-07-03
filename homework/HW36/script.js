class Worker {
    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }
    get name() {
        return this._name;
    }

    get surname() {
        return this._surname;
    }

    get getFullName() {
        return this._surname + " " + this._name;
    }
    get rate() {
        return this._rate;
    }

    get days() {
        return this._days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}


    class Boss extends Worker {
    constructor(name, surname, rate, days, workers) {
        super(name, surname, rate, days);
        this._workers = workers;
    }

    get workers() {
        return this._workers;
    }

    getSalary() {
        return this.rate * this.days * this.workers;
    }
}

const boss = new Boss('Иван', 'Иванов', 10, 31, 10);
console.log(boss.name);
console.log(boss.surname);
console.log(boss.getFullName);
console.log(boss.rate); // 10
console.log(boss.days); // 31
console.log(boss.workers);10
console.log(boss.getSalary()); // 3100 - 10*31*10