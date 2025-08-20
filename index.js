import { askQuestion, closeRl } from './functions.js';
import { Car,Person } from './classes.js';

let users = [];
let cars = [];

//console.log(`users found : ${[...users]}`);

async function options() {
    const choise = await askQuestion(
        `
        1 - add user
        2 - display all users
        3 - add New Car
        4 - List Cars
        Enter Option: `);
    return choise;
}

async function addNewUser() {
    const name = await askQuestion('what name? : ');
    const age = await askQuestion('what age? : ');
    users.push(new Person(name, age));
}

async function addNewCar() {
    const manufacturers = await askQuestion('what manufacturers? : ');
    const model = await askQuestion('what Model? : ');
    const price = await askQuestion('what Price? : ');
    const tech = await askQuestion('what Tech? [EV,GAS]: ');
    cars.push(new Car(manufacturers, model, price, tech));
}

async function main() {
    let user_option = await options();

    if (user_option == 1) {
        await addNewUser()
            .finally(async () => {
                console.warn('User Added');
                await main();
            });
    } else if (user_option == 2) {
        users.forEach((element, index) => {
            console.log(`User id : ${index} || ${element.info()}`);
        });
        await main();
    } else if (user_option == 3) {
        await addNewCar()
            .finally(async () => {
                console.warn('Car Added');
                await main();
            });
    } else if (user_option == 4) {
        cars.forEach((element, index) => {
            console.log(`Car id : ${index} || ${element.info()}`);
        });
        await main();
    } else {
        console.warn('N/A Option');
        await main();
    }

    //closeRl(); // نقفل بعد ما نخلص
}

main().finally(() => {
    closeRl();
});
