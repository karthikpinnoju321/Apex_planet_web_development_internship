// Quiz

const quiz=[

{
question:"Which language is used for webpage styling?",
answers:["HTML","CSS","Python","Java"],
correct:1
},

{
question:"Which method fetches API data?",
answers:["getData()","fetch()","axios()","http()"],
correct:1
},

{
question:"Which tag links JavaScript?",
answers:["<style>","<script>","<link>","<js>"],
correct:1
}

];

let index=0;
let score=0;

const question=document.getElementById("question");
const answers=document.getElementById("answers");
const nextBtn=document.getElementById("nextBtn");
const scoreText=document.getElementById("score");

loadQuiz();

function loadQuiz(){

let q=quiz[index];

question.innerHTML=q.question;

answers.innerHTML="";

q.answers.forEach((answer,i)=>{

const btn=document.createElement("button");

btn.className="answer";

btn.innerHTML=answer;

btn.onclick=()=>{

if(i===q.correct){

score++;

}

nextBtn.style.display="block";

};

answers.appendChild(btn);

});

nextBtn.style.display="none";

}

nextBtn.onclick=()=>{

index++;

if(index<quiz.length){

loadQuiz();

}else{

question.innerHTML="Quiz Completed 🎉";

answers.innerHTML="";

scoreText.innerHTML="Your Score : "+score+" / "+quiz.length;

nextBtn.style.display="none";

}

};

// API

async function getJoke(){

const response=await fetch("https://official-joke-api.appspot.com/random_joke");

const data=await response.json();

document.getElementById("joke").innerHTML=data.setup+"<br><br>"+data.punchline;

}
