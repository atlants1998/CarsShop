import { askQuestion, closeRl } from './functions.js';
import { Car, Person } from './classes.js';
import { urlSplitter,httpserver } from './http_server_functions.js';

import fs from "fs";
import http from "http";

let users = [];
let cars = [];


/* HTTP SERVER */

const server = http.createServer(httpserver(users,cars));

server.listen(8000, () => {
    console.log('server started port: 8000');
});
/* END HTTP SERVER */


//console.log(`users found : ${[...users]}`);

/* async function options() {
    const choise = await askQuestion(
        `
        1 - add user
        2 - display all users
        3 - add New Car
        4 - List Cars
        10- Save & Exit
        Enter Option: `);
    return choise;
} */

/* async function addNewUser() {
    const name = await askQuestion('what name? : ');
    const age = await askQuestion('what age? : ');
    users.push(new Person(name, age));
} */

function SaveToFile(json_data) {
    fs.writeFile('./data.json', json_data, (err, data) => {
        if (err) {
            console.log('error from write file');
        } else {
            console.log('All ok');
        }
    });
}


function ReadFromFile() {
    let file_data = fs.readFileSync('./data.json', 'utf8');
    console.log('Data File ok');
    const parsed = JSON.parse(file_data);
    parsed.forEach((element) => {
        let car = new Car(element.car_manufacturers, element.car_model, element.car_price, element.car_tech);
        cars.push(car);
    });
}


/* async function addNewCar() {
    const manufacturers = await askQuestion('what manufacturers? : ');
    const model = await askQuestion('what Model? : ');
    const price = await askQuestion('what Price? : ');
    const tech = await askQuestion('what Tech? [EV,GAS]: ');
    cars.push(new Car(manufacturers, model, price, tech));
}
 */
/* async function main() {
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
    } else if (user_option == 10) {
        let json_data = JSON.stringify(cars);
        SaveToFile(json_data);
    } else {
        console.warn('N/A Option');
        await main();
    }

    //closeRl(); // نقفل بعد ما نخلص
}
 */

ReadFromFile();

/* main().finally(() => {
    console.log('exting the app');
    closeRl();
});
 */