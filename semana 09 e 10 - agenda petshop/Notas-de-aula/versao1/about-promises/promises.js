// Async / Await SIMPLES e DESCOMPLICADO no JavaScript 
// https://www.youtube.com/watch?v=h0sNAXE1ozo

function bestRockBand(band) {
    return new Promise((resolve, reject) => {
        if (band == 'Queen') {
            resolve({
                success: true,
                bandName: band,
                msg: band + ' is the best rock band ever!'
            })
        } else {
            reject({
                succes: false,
                msg: "I'm not so sure!"
            })
        }
    }
    );
}

function bestRockSong(response) {
    return new Promise((resolve, reject) => {
        if (response.success) {
            resolve('Bohemian Rhapsody by ' + response.bandName);
        } else {
            reject('Do you know Queen?');
        }

    });
}

// O código abaixo pode ficar complicado por haver necessidade de criar um monte de "then"
// Para tornar o código mais limpo, foi criado o async/await. Vide arquivo async-await.js

bestRockBand('Queen')
    .then(response => {
        console.log('Checking for the answer...');
        return bestRockSong(response);

    })
    .then(response => {
        console.log("Finding the best song...");
        console.log(response);
    })
    .catch(err =>{
        console.log(err.msg);
    })

