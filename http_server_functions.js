import { Car, Person } from './classes.js';
import fs from "fs";

function getDataNow() {
    let now = new Date();
    now = now.toISOString()
    //console.log(now); 
    return now;
}
// http_server_functions.js
export function httpserver(users, cars) {
    return function (req, res) {
        //console.log(req.url);
        //console.log(req.headers); // Show all request headers

        if (req.url.includes("JdKdhJuC")) {
            let values = urlSplitter(req.url);

            if (values.api_key == '12345612300') {
                res.write('Welcome Admin\n');

                switch (values.action) {
                    case 'add_user':
                        res.write(`User ${values.user_name} created With ${values.age} Years old\n`);
                        users.push(new Person(values.user_name, values.age));
                        break;
                    case 'display_all_users':
                        res.write("display_all_users:\n");
                        res.write(JSON.stringify(users, null, 2) + '\n');
                        users.forEach((element, index) => {
                            res.write(`User id : ${index} || ${element.info()}\n`);
                        });
                        console.log('End display_all_users: ',getDataNow());
                        break;

                    case 'add_New_Car':
                        break;

                    case 'List_Cars':
                        res.write("List all cars:\n");
                        res.write(JSON.stringify(cars, null, 2) + '\n');
                        cars.forEach((element, index) => {
                            console.log(`Car id : ${index} || ${element.info()}`);
                        });
                        break;

                    case 'Save_&_Exit':
                        break;

                    default:
                        res.end('hello deafualt case');
                        break;
                }
            } else {
                res.statusCode = 401;
                res.statusMessage = 'no Auth For you';
                res.end();
                return;
            }
            res.end('END OF API');
        } else {
            res.end('hello deafualt if');
        }
    }

}



export function urlSplitter(url) {
    let reg = /(?<key>[^?&=]+)=(?<value>.*?)(?=(?:&[^?&=]+=|$))/g;

    let match2 = '';
    let result = {}
    while (match2 = reg.exec(url)) {
        //console.log(match2);
        //console.log(match2.groups.key, match2.groups.value);
        result[match2.groups.key] = match2.groups.value;
    }
    //console.log(result.series_name);
    return result;

}