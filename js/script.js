// getting elemet from html

var operations= document.getElementsByClassName("operation")
var numbers= document.getElementsByClassName("number");
var deleteBtn= document.getElementById("delete");
var deleteAll= document.getElementById("delete-all");
var previousOparand=document.querySelector(".previous-oparand");
var currentOparand=document.querySelector(".current-oparand");
var equal=document.getElementById("equal");

// getting numbers and put it on current oparand
function gettingNumbers(clickNum){
    for(var number of numbers){
         var clickNum= clickNum;
        number.addEventListener("click",(e)=>{
           
             clickNum +=e.target.innerText;

            //  deleting last item for fix
             deleteBtn.onclick=()=>{
               clickNum= clickNum.replace(clickNum[clickNum.length-1],"")
               currentOparand.innerText=clickNum;
               console.log(clickNum);
               sendinqToPrevious(clickNum);rld[84]
             }

            
            currentOparand.innerText=clickNum;
            sendinqToPrevious(clickNum);
            
        })
        
        
    }
}

var clicks=""
 gettingNumbers(clicks);

// sending to previous opanrand

function sendinqToPrevious(clickNum){
    
    for(var operation of operations){
        operation.addEventListener("click",(e)=>{
          var operationSign=e.target.innerText; 
     
         var numOperation=clickNum+operationSign
         previousOparand.innerText=numOperation;
         currentOparand.innerText="";
         clickNum.innerText="";
         
    //  calling the getting num again for current oparandi
         var clicks=""
 gettingNumbers(clicks);
        
        })
        
    }

    
}

numberOperations();

function numberOperations(){
    var operation;
    for(var operationItem of operations){
        operationItem.addEventListener("click",(e)=>{
            operation=e.target.innerText;
         });
    }
    console.log(operation);
    
    equal.addEventListener("click",()=>{
        let previousNum=previousOparand.innerText;
        previousNum= parseFloat(previousNum.replace("+",""))
        let currentNum= parseFloat(currentOparand.innerText);
        
        console.log(operation);
        previousOparand.innerText= previousOparand.innerText+currentOparand.innerText;
        var result;
        console.log("clicked")
          if(operation=="+"){
            result=previousNum+currentNum;
            console.log(result)
          }else if(operation=="*"){
              result=previousNum*currentNum
          }else if(operation=="-"){
            result=previousNum-currentNum
        }else if(operation=="/"){
            result=previousNum/currentNum
        }
       
         currentOparand.innerText=result;
        
    })
}

deleteAll.onclick=()=>{
    previousOparand.innerText=""
    currentOparand.innerText=""
    var clicks=""
    gettingNumbers(clicks);
}

