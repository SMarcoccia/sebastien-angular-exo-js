
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("J'ai attendu 2 sec");
    }, 2000);
});
console.log(sleep);

module.exports = {sleep};