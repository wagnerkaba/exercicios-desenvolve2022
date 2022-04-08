export const removeDatasRepetidas = (datas) => {

    const datasUnicas = [];
    datas.forEach((data)=>{

        //The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
        if(datasUnicas.indexOf(data.dataFormatada) === -1){
            datasUnicas.push(data.dataFormatada);
        }
    })
    return datasUnicas;
}

export const ordenaDatas = (arrayDeDatas) => {

    // Array.prototype.sort() aceita arrow function como parâmetro
    // vide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    arrayDeDatas.sort( (data1,data2)=> {
        const primeiraData = moment(data1, 'DD/MM/YYYY').format('YYYYMMDD');
        const segundaData = moment(data2, 'DD/MM/YYYY').format('YYYYMMDD');
        return primeiraData - segundaData;

    })
}