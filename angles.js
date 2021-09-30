var input1=document.getElementById("input-text1");
var input2=document.getElementById("input-text2");
var input3=document.getElementById("input-text3");

var outputAngles=document.getElementById("output-angles");

var submitangles=document.getElementById("submit-angles");






function clickAngleHandler(){
    if(Number(input1.value)+Number(input2.value)+Number(input3.value)===180){
        outputAngles.innerText="Hurray! You can make a triangle with these angles."
    }
    else{
        outputAngles.innerText="Oops! These angles cannot make a triangle."
        
    }

}
// 

submitangles.addEventListener('click',clickAngleHandler);



