

const myPromise = new Promise( (resolve, reject)=> {
    setTimeout(() => {
        // resolve(100); 
        reject('se perdio')
    }, 2000);

});

myPromise.then((myMoney) => {
        console.log(`Tengo mi dinero${myMoney}`)
    }).catch( reason => {
        console.warn(reason)
    })

    