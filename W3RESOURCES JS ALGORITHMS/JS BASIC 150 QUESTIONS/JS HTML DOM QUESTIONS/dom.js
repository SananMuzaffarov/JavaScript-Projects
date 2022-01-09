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
