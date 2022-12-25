// let winningNumber = 21;
// let usserGuess= +prompt("guesss a number");
// if(usserGuess===winningNumber)
// {
//     console.log("your number is right :");
// }
// else{
//     if(usserGuess<winningNumber)
//     {
//         console.log("too lowww:");
//     }
//     else
//     {
//         console.log("too large");
//     }
// }



// let day=+prompt("guess todays day");
// switch(day){
//     case 0:
//         console.log("sunday");
//         break;
//         case 1:
//         console.log("Monday");
//         break;
//         case 2:
//         console.log("Tuesday");
//         break;
//         case 3:
//         console.log("wednesday");
//         break;
//         case 4:
//         console.log("thrusday");
//         break;
//         case 5:
//         console.log("friday");
//         break;
//         case 6:
//         console.log("saturday");
//         break;
//        default:
//         console.log("invalid day")
        
// }



// let day=+prompt("Guess todays day");
// switch(day){
//     case 0:
//         console.log("sunday");
//     break;
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thrusday");
//          break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//         default:
//             console.log("invalid number")
// }


// let i=1;
// while (i<=3){
//     console.log(i)
//     i++;
// }

// let num =10;
// let total =0;
// let i=0;
//  while (i<=10){
//     total=total+i;
//     i++
//  }
//  console.log(total);

// function sum(a,b){
//  console.log(a+b);
// }
// sum(3,5);


// function sumTwoNumber(num1,num2){
//     return num1 +num2;
// }
//  const sum= sumTwoNumber(,4);
//  console.log(sum);


function isEven(number){
   if( number %2===0 ){
    return true;
   }
   return false;
}
console.log(isEven(7));