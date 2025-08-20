export class Person {
    user_name = '';
    user_age = '';

    constructor(name, age) {
        this.user_name = name;
        this.user_age = age;
    }

    info = function () {
        let data = `Name = ${[this.user_name]} , Age = ${this.user_age}`;
        return data;
    }

}

export class Car {
    car_manufacturers = '';
    car_model = '';
    car_price = '';
    car_tech = '';


    constructor(manufacturers, model, price, tech) {
        this.car_manufacturers = manufacturers;
        this.car_model = model;
        this.car_price = price;
        this.car_tech = tech;

    }

    info = function () {
        let data = `${[this.car_manufacturers]} , Model = ${this.car_model} , ${this.car_tech} => ${this.car_price}$`;
        return data;
    }

}