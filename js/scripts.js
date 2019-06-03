var sideA=parseInt(prompt("Input Value: sideA"));
var sideB=parseInt(prompt("Input Value: sideB"));
var sideC=parseInt(prompt("Input Value: sideC"));


if (sideA==sideB & sideA==sideC) { 
    alert("Equilateral Triangle!!!");
} 
else if (sideA==sideB | sideA==sideC |sideB==sideC); {
    alert("This is an Isosceles triangle!!!")
} 
else if (sideA!=sideB & sideA!=sideC & sideB!=sideC) && ((sideA+sideB)>sideC | (sideB+sideC)>sideA | (sideA+sideC)>sideB); {
    alert("Voila! Its a Scalene triangle!!")
} 
else if ((sideA+sideB)<=sideC || (sideB+sideC)<=sideA || (sideC+sideA)<=sideB); {
    alert("Ooops! This is not a triangle!!")
}
else (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)); {
    alert("No values entred!!!")
}
    
