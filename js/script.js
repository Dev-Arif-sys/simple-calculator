// getting elemet from html


var calculator= document.getElementById("calculator")
var previousOparand=document.querySelector(".previous-oparand");
var currentOparand=document.querySelector(".current-oparand");
var equal=document.getElementById("equal");
let displayValue= "";
calculator.onclick=(e)=>{
    var buttonText=e.target.innerText;
   
    if(e.target.className=="operation"){
        displayValue +=buttonText;

         previousOparand.innerText=displayValue;
        console.log(displayValue);
    }else if(buttonText=="AC"){
        previousOparand.innerText=""
        currentOparand.innerText=""
        displayValue="";
    }else if(buttonText=="="){
        currentOparand.innerText=eval(displayValue);
    }else if(buttonText=="Del"){
        displayValue= displayValue.replace(displayValue[displayValue.length-1],"")
        previousOparand.innerText=displayValue;
    }
    else{
        displayValue +=buttonText;
        previousOparand.innerText=displayValue;
    }
}