function validate(){
    if(username.value=="admin" && password.value=="12345"){
        return true;
         }

    else {
        alert("email id or password is wrong");
        return false;  
            }

}

// function validate(usrnm,psswrd,callback){
//   if(username.value=="admin" && password.value=="12345"){
//       return true;
//        }

//   else {
//       alert("email id or password is wrong");
//       return false;  
//           }

// }

// validate(usrnm,psswrd,display);