function reverseString(str){
    let arrayStr = str.split("");
    console.log(arrayStr);

    let reverseArray = arrayStr.reverse();
    console.log(reverseArray);


    return reverseArray.join("");

    // o código acima pode ser resumido a esta linha
    // return str.split('').reverse().join('');  

}

console.log(reverseString("este é um exercicio"));