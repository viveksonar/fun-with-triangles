var outputHypo=document.getElementById("output-hypo");

 var inputA=document.getElementById("input-a");
 var inputB=document.getElementById("input-b");
 var submitHypotenuse=document.getElementById("submit-hypotenuse");

 submitHypotenuse.addEventListener('click',clickHypotenuseHandler);


 function clickHypotenuseHandler(){
    console.log("reached");
    var a=inputA.value;
     var prod1=a*a;
     var b=inputB.value;
     var prod2=b*b;
     var c=Math.sqrt(prod2+prod1);
    outputHypo.innerText=c;
   

}