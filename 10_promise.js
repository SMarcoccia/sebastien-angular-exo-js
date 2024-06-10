
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = async () => {
    return new Promise((res, rej)=>{
        setTimeout(() => {
            console.log("J'ai attendu 2 secondes");
        }, 2000);
    })
};

//const sleep = ms => new Promise(r => setTimeout(r, ms));
sleep(2000);

module.exports = {sleep};