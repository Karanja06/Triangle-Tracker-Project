var sideA=parseInt(prompt("Input Value: sideA"));
var sideB=parseInt(prompt("Input Value: sideB"));
var sideC=parseInt(prompt("Input Value: sideC"));


if (sideA==sideB & sideA==sideC) { 
    console.log("Equilateral Triangle!!!");
} else if (sideA==sideB | sideA==sideC |sideB==sideC) {
    console.log("This is an Isosceles triangle!!!")
} else if (sideA!=sideB & sideA!=sideC & sideB!=sideC) {
    console.log("Voila! Its a Scalene triangle!!")
} else if (sideA+sideB>sideC | sideB+sideC>sideA | sideA+sideC>sideB) {
console.log("Voila! Its a Scalene triangle!!")
} else {
    console.log("Ooops! This is not a triangle!!")
}
