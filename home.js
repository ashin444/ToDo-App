function ajax(){
    
    //creating an XHR object
    var xhttp = new XMLHttpRequest();
    //preventlistner
    xhttp.onreadystatechange = function(){
        //condition
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            // console.log(response);
            var output = "";
            for(var i=0;i<response.length;i++){
             output += "<input type='checkbox' id='checkbox'>" +response[i].title+ '<br>';
             
            }
            // console.log(output);
            document.getElementById("demo").innerHTML=output;
           
        }
         // checking checkbox
         var check = document.querySelectorAll('input[type="checkbox"]:checked');
              if(check.length==5){
                  alert("Congrats. 5 Task have been successfully completed.");
              }
              
                 
                   
  
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    }
  
  
  //   document.getElementById("").style.textDecoration = "line-through ";
   
   
  
  
  
  
  