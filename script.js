
            // Module 19 ***

// function multiply(num1, num2){
//    var result = num1 * num2;
//    return result;
// }
// console.log("5 x 15 = " + multiply(5, 15));



                     // 9 er nameata   **
   // var z = 1;
   // for(var i=9; i<=90; i++){
   //    if(i % 9 == 0){
   //       console.log("9 x " + z + " = " + i);
   //       z= z+1;
   //    }
   // }


                  // input toUpperCase and toLowerCase   **
   // function names (yName){
   //    var result = yName.toUpperCase(); 
   //    return result;
   // }
   // console.log(names('Sayed'));


         // celsius to fahrenhite **
/*   function celsius (z){
      var x = z * 9 / 5;
      var y = x + 32;
      console.log(z + " celsius = " + y +" fahrenhite");
   }
   celsius(1);
*/

            // grade calculation    **
/*   function number (num){
      if(num >=80){
         console.log("Your grade (A+)");
      }
      else if(num >=70){
         console.log("Your grade (A-)");
      }
      else if(num >=60){
         console.log("Your grade (A)");
      }
      else if(num >=50){
         console.log("Your grade (B)");
      }
      else if(num >=40){
         console.log("Your grade (C)");
      }
      else if(num >=33){
         console.log("Your grade (D)");
      }
      else{
         console.log("Your are fail...");
      }
   }
   number(99)
*/

   // simple interest formula     **
 /*   function findInterest(p, r, t){
       let x = p * r * t;
       let result = x / 100;
       return result;
    }                // amount , interest % , time Y
    let karim = findInterest(150000, 14, 2)
    console.log("Karim have to pay interest amount is : " + karim);
*/



   //  let num = -61;
   //  let output = Math.abs(num);
   //  console.log(output);

   // let num = 35.4353;
   // let output = Math.ceil(num);
   // let output = Math.floor(num);
   // let output = Math.round(num);
   // console.log(output);
                                          // random number *
   // for(let i=0; i<10; i++){
   //    let random = Math.random() * 6;
   //    let output = Math.round(random);
   //    console.log(output);
   // }


               // task: find the lowest element of an array 
   function lowestNum(num){
      let lowest = num[0];
      for(let x=0; x<num.length; x++){
         let y = num[x];
         if(y < lowest){
            lowest = y;
         }
      }
      return lowest;
   }
   let number = [25, 50,12, 55, 120];
   let result = lowestNum(number);
   console.log(result);

   //                   // fibonacci   *
   // let fibo = [0, 1];
   // for(let i = 2; i<=10; i++){
   //    fibo[i] = fibo[i - 1] + fibo[i - 2];
   //    console.log(fibo);
   // }









