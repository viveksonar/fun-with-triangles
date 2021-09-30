var submitQuiz=document.getElementById("submitQuiz");
var outputQuiz=document.getElementById("output-quiz");

submitQuiz.addEventListener('click',quizHandler);

var ques1=document.querySelectorAll("ques1");
var ques1=document.querySelectorAll("ques2");
var ques1=document.querySelectorAll("ques3");
var ques1=document.querySelectorAll("ques4");
var ques1=document.querySelectorAll("ques5");
var ques1=document.querySelectorAll("ques6");
var score=0;


function optionHandler(x){
    if(x==1){
        score++;
    }

}
function quizHandler(){
    if(score==6){
        outputQuiz.innerText="Hurray! You have marked all the right answers! Your score is "+score+".";
    }
    if(score<6 && score>3){
        outputQuiz.innerText="You can do better! Your score is "+score+".";
    }
    if(score<=3){
        outputQuiz.innerText="You need to work harder! Your score is "+score+".";

    }
    

}