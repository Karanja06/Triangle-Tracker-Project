var sideA=parseInt(prompt("Input Value: sideA"));
var sideB=parseInt(prompt("Input Value: sideB"));
var sideC=parseInt(prompt("Input Value: sideC"));


if (sideA===sideB && sideA===sideC) { 
    alert("Equilateral Triangle!!!");
} 
else if (sideA===sideB || sideA===sideC || sideB===sideC) {
    alert("This is an Isosceles triangle!!!");
} 
else if (sideA!=sideB && sideA!=sideC && sideB!=sideC) {
    alert("Voila! Its a Scalene triangle!!");
} 
else {
        alert("Ooops! This is not a triangle!!");
    }
