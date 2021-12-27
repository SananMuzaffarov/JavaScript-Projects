var Output = document.getElementById('Output');
     
    function pushBtn(obj) {
         
        var pushed = obj.innerHTML;
         
        if (pushed == '=') {
            Output.innerHTML = eval(Output.innerHTML);
        } 
        else if (pushed == 'AC') {
            Output.innerHTML = '0';
        } 
        else{
            if (Output.innerHTML == '0') {
                Output.innerHTML = pushed;  
            } 
            else{
                Output.innerHTML += pushed;   
            }
        }
    }