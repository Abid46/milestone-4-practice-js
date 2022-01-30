
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
   function celsius (z){
      var x = z * 9 / 5;
      var y = x + 32;
      console.log(z + " celsius = " + y +" fahrenhite");
   }
   celsius(1);


            // grade calculation    **
   function number (num){
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


   // simple interest formula     **
    function findInterest(p, r, t){
       let x = p * r * t;
       let result = x / 100;
       return result;
    }                // amount , interest % , time Y
    let karim = findInterest(150000, 14, 2)
    console.log("Karim have to pay interest amount is : " + karim);









