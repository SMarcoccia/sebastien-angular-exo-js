
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = async (time) => {
    setTimeout(() => {
        console.log("J'ai attendu 2 secondes");
    }, time);
};

sleep(2000);

module.exports = {sleep};