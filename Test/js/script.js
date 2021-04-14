var x = "Hello world";

function sum(a,b) {
    return a+b;
}

// console.log(sum(5,6));


var y;
console.log(y);

if (y == undefined) {
    console.log("y is undefined");
}


var company = new Object();
company.name = "Alojz";

function makeMultiplier(x) {
    var myFunct = function(number) {
        return x*number;
    };
    return myFunct;
}

doubleIt = makeMultiplier(2);
console.log(doubleIt(20));

trippleIt = makeMultiplier(3);
console.log(trippleIt(70));

// Trieda - má veľké prvé písmeno
class Circle {
    constructor(radius) {
        this.radius = radius; // Vytvorenie property v rámci triedy
    }
    // Vytvoríme metódu triedy circle
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}


// Vytvoríme si 2 inštancie triedy a vypíšeme do konzoly, aby sme sa pozreli, ako majú uložené properties a metódy
var myCircle = new Circle(10);
console.log(myCircle);
var myOtherCircle = new Circle(20);
console.log(myOtherCircle);

var myArray = new Array();

myArray[0] = "Hello";
myArray[1] = 7;
myArray[2] = {name: "Michal", age: 32};
myArray[10] = "TEST";
console.log(myArray);

