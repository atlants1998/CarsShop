// functions.js
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
            // متقفلش rl هنا
        });
    });
}

// خلي عندك دالة علشان تقفل الـ rl بعدين من index.js
export function closeRl() {
    rl.close();
}
