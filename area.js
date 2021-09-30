 var area1Btn=document.getElementById("calArea1");
 var area2Btn=document.getElementById("calArea2");
 var area3Btn=document.getElementById("calArea3");
 var area4Btn=document.getElementById("calArea4");
 
 area1Btn.addEventListener('click',area1Calculate);
 
 area2Btn.addEventListener('click',area2Calculate);

 area3Btn.addEventListener('click',area3Calculate);

 area4Btn.addEventListener('click',area4Calculate);



 var outputArea1=document.getElementById("output-area1");
 var outputArea2=document.getElementById("output-area2");
 var outputArea3=document.getElementById("output-area3");
 var outputArea4=document.getElementById("output-area4");


 function area1Calculate(){
   var b=document.getElementById("base").value;
   var h=document.getElementById("height").value;
   var c=(b*h)/2;
   outputArea1.innerText=c;

 }

 function area2Calculate(){
   var a=document.getElementById("one").value;
   var b=document.getElementById("two").value;
   var c=document.getElementById("three").value;
   var s=a+b+c;
   var ans=Math.sqrt(s*(s-a)*(s-b)*(s-c));
   outputArea2.innerText=ans;

 }

 function area3Calculate(){
   var b=document.getElementById("first").value;
   var c=document.getElementById("second").value;
   var s=document.getElementById("angle").value;
   var ans=b*c*(Math.sin(s*Math.PI/180.0));
   outputArea3.innerText=ans;

 }

function area4Calculate(){
  var a=document.getElementById("side").value;
  var ans=(1.732*(a*a))/4;
  outputArea4.innerText=ans;
}
var radioBtns=document.querySelectorAll("areaCal");

function areaHandler(x){
  if(x==1){
    document.querySelector(".area1").style.display="block";
    document.querySelector(".area2").style.display="none";
    document.querySelector(".area3").style.display="none";
    document.querySelector(".area4").style.display="none";
  }
  if(x==2){
    document.querySelector(".area2").style.display="block";
    document.querySelector(".area1").style.display="none";
    document.querySelector(".area3").style.display="none";
    document.querySelector(".area4").style.display="none";
  }
  if(x==3){
    document.querySelector(".area3").style.display="block";
    document.querySelector(".area1").style.display="none";
    document.querySelector(".area2").style.display="none";
    document.querySelector(".area4").style.display="none";
  }
  if(x==4){
    document.querySelector(".area4").style.display="block";
    document.querySelector(".area1").style.display="none";
    document.querySelector(".area2").style.display="none";
    document.querySelector(".area3").style.display="none";
 
  }
  
   
}
