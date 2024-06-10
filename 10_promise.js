
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = async () => {
    setTimeout(() => {
        console.log("J'ai attendu 2 secondes");
    }, 2000);
};
sleep();

module.exports = {sleep};