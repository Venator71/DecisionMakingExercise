let randomNum = Math.floor((Math.random()*6)+1);

console.log(randomNum);
if (randomNum ===3 || randomNum ===2){
    console.log("Equal to 2 or 3");
} else if(randomNum === 1){
console.log("Equal to 1");
} else {
    console.log("Greater than or equal to 4");
};

if (randomNum !==3){
    console.log("Not equal to 3");
} else {
console.log("Equal to 3");
};

if (randomNum !==3 ){
    if (randomNum !==5){
    console.log("Not equal to 3 AND Not equal to 5");}
}else {
console.log();
};

if (randomNum === 2 || randomNum === 4 ){
        console.log('Equal to 2 or equal to 4');
    }else {
    console.log();
};

// Bonus 

let bonus = (randomNum >= 4) ? "Greater Than or equal to 4" : "Less than 4";

console.log(bonus);


switch (randomNum){
    case 1 :
        console.log("One");
        break;

    case 2 :
        console.log("Two");
        break;
        
    case 3 :
        console.log("Three");
        break;

    case 4 :
        console.log("Four");
        break;

    case 5 :
        console.log("Five");
        break; }
