// QUESTION 1 - Here is a sample html file with a submit button. Now modify the style of the paragraph text through javascript code.
function clickMe(){
    document.getElementById("firstQuestion").style.color = "red";
}

// QUESTION 2 - Write a JavaScript function to get the values of First and Last name of the following form.
function getFormvalue(){
  var x=document.getElementById("form");
  for(var i=0;i<x.length;i++){
   if(x.elements[i].value!='Submit'){  
      document.write(x.elements[i].value);
    }  
   }
}

// QUESTION 3 - 3. Write a JavaScript program to set the background color of a paragraph.
function changeBack(){
    document.getElementById("as").style.background = "red";
    document.getElementById("sa").style.background = "yellow";
}

// QUESTION 4 - Here is a sample html file with a submit button. Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the specified link.
function getInfos(){
 var a = document.getElementById("khzr").href;
 var b = document.getElementById("khzr").hreflang;   
 var c = document.getElementById("khzr").rel; 
 var d = document.getElementById("khzr").target; 
 var e = document.getElementById("khzr").type; 
 document.write(a);
}

// QUESTION 5 - Write a JavaScript function to add rows to a table.
function extraRow(){
    var x = document.getElementById("Table").insertRow(0);
    var y = x.insertCell(0);
    var z = x.insertCell(1);
    y.innerHTML="1";
    z.innerHTML="2";
}
