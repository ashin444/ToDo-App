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
              output += "<li>"+response[i].title+"</li>";
             
          }
          // console.log(output);
          document.getElementById("demo").innerHTML=output;

      }
  }
  xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
  xhttp.send();
  }