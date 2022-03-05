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

async function doTheJob(){

    try{
        const bestRockBandResponse = await bestRockBand('Kiss');
        console.log(bestRockBandResponse);
        const bestRockSongResponse = await bestRockSong(bestRockBandResponse);
        console.log(bestRockSongResponse);
    } catch (err){
        console.log(err.msg);
    }

}

doTheJob();
