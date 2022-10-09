let WrongNumber = false;
const MyNumber = 3;
const number = prompt("Please guess a number between 1 and 10");

if (+number === MyNumber){
    WrongNumber = true;
    console.log("Yes");
}

else{
    console.log("No");
}

// 1



function convert(arr3){
    let sum = 0;
    for(let i = 0; i < arr3.length; i++){
        if(arr3[i] < 0){
            sum = sum + arr3[i];
            
        }
    }
    return sum ;
}

console.log(convert ([ 3, 4, -5, 6, -7, ]));


// 2




function samOfTwoAarrays(){
    const arreys = [ 4, -5, -10, 2, ];
    const arreys2 = [ 6, 9, 14, -1, 8, ];
    const OfArreys = arreys.concat(arreys2);
    return OfArreys ;
}
console.log(samOfTwoAarrays());

// 3


const number1 = parseInt(prompt("Enter a natural number:"));
let number2 = 0;
for( let i = 1 ; i <= number1; i++){
    if (number1 > 0){
        console.log("1,2,3,4,5");
}
    number2 += i;
}

//4



function removeStringSpaces1(){
    const array = [4, 2, 10, -4, 13, 19, 344 -4, 1, -6, -8, 2, -2];
    let a = 0 ;
    let b = 0 ;
    for(let i = 0; i < array.length; i++){
         if(array[i] < 0){
          a = a + array[i];
         }
         if(array[i] > 0){
             b = b + 1;
         }
     } 
      console.log(`[${b} , ${a} ]`);
 }
 removeStringSpaces1();

 //6


 function removeStringSpaces2(){
    let CodeNames = ["hello", 45, -3, null, true, undefined, false,{age: 40} ] ;
    let Mathematics = Math.floor(Math.random() * 7);
    console.log(CodeNames[Mathematics]);
}
removeStringSpaces2()

//7