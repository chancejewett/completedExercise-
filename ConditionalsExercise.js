//1a
let randomNum =Math.floor((Math.random() *5) +1);

console.log(randomNum)
//1b

if (randomNum >= 4){
    console.log("equal to or greater than 4");
}else if (randomNum >= 2 ){
    console.log("equal to or greater than 2");
}else{
    console.log("equal to 1");
}
//1C
if (randomNum != 3){
    console.log("NOT equal to 3");
}
//1D

if(randomNum != 3 || randomNum != 5){
    console.log("Not equal to 3 AND not equal to 5")
}

//1e
if(randomNum === 2 || randomNum ===4){
    console.log("Equal to 2 OR equal to 4")
}