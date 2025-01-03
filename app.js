
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

    console.log(num01 + num02);
    console.log(op);

    switch (op) {
        case "+": label.innerHTML = num01 + num02; break;
        case "-": label.innerHTML = num01 - num02; break;
        case "*": label.innerHTML = num01 * num02; break;
        case "/": label.innerHTML = num01 / num02; break;
    }

}

//---------------------------------------------------------------------------------------------------------

function click9() {
    document.getElementById("n01").value = 9;

}

function click8() {
    document.getElementById("n01").value = 8

}

//--------------------------------------------------------------------------------------------------

function ab(x, y) {
    return x + y;
}

let num = ab(10, 20);

console.log(num);

//------------------------------------------------------------------------------------------------

function sample() {
    console.log("heloo");
}

sample();

//--------------------------------------------------------------------------------------------

const customer = {
    name: "Mahesh",
    age: 12,
    run: function () {
        console.log("Run...")
    }
}

customer.run();

//---------------------------------------------Functions------------------------------------

function sample() {
    console.log("Heloo...");
}

//-- i --->                 ----------------------i---------------------
let sam = function () {
    console.log("Heloo...")
}

//-- ii --->                ----------------------ii-------------------
let samp = () => {
    console.log("Heloo...");
}

//-- iii --->                           ----------iii-----------------
let sampl = () => console.log("Heloo...");


//-- iv --->                            ----------iv---------------
const customer01 = {
    name: "Mahesh",
    age: 12,
    run: () => console.log("Heloo...")
}

const customerArray = [
    {
        name: "Nimal",
        age: 12,
        address: "Kurunegala"
    },

    {
        name: "Nimal",
        age: 12,
        address: "Kurunegala"
    },

    {
        name: "Nimal",
        age: 12,
        address: "Kurunegala"
    },

    {
        name: "Nimal",
        age: 12,
        address: "Kurunegala"
    },

    {
        name: "Nimal",
        age: 12,
        address: "Kurunegala"
    }
]

function addCustomer() {

    let name = document.getElementById("userNmae").value;
    let age = document.getElementById("userAge").value;
    let address = document.getElementById("userAddress").value;

    customerArray.push({
        name,
        age,
        address
    })

    console.log("Add Customer");
}


console.log(customerArray);

//----------------------------------------------***********************************------------------------
let numbers = [11, 33, 23, 56, 41, 89, 90, 65, 78];

console.log(numbers.sort());

console.log(numbers.push(500));
console.log(numbers);

console.log(numbers.length);

console.log(numbers.pop());
console.log(numbers);

console.log(numbers.shift());
console.log(numbers);

console.log(numbers.toString());

