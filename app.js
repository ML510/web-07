
// function calcbutton(){
//     let num01 = document.getElementById("num01").value;
//     let num02 = document.getElementById("num01").value;

//     let label = document.getElementById("label");

//     label.innerHTML= num01 + num02;


// }

//-------------------------Seen The Consol------------------------ 
// let num01 = "";
// let num02 = "";

// num01 = new Number("10");
// num02 = new Number("13");

// num01 = new Number(10);
// num02 = new Number(13);

// console.log(num01+num02);


// console.log(typeof num01);
// console.log(typeof num02);

//====================================================================

function calcbutton() {

let num01;
let num02;


    num01 = new Number(document.getElementById("num01").value);
    num02 = new Number(document.getElementById("num02").value);

    let op = document.getElementById("op").value;
    let label = document.getElementById("label");

    console.log(num01+num02);
    console.log(op);

    switch (op) {
        case "+": label.innerHTML = num01+num02; break;
        case "-": label.innerHTML = num01-num02; break;
        case "*": label.innerHTML = num01*num02; break;
        case "/": label.innerHTML = num01/num02; break;
    }

}



