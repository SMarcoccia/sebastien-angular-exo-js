
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = (ms) => new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("J'ai attendu 2 sec");
    }, ms);
});

sleep(2000).then((res)=>{
    console.log(res);
})


module.exports = {sleep};