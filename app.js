



enterName=document.getElementById("enterName")
enterRollNumm=document.getElementById("enterRollNumm")

function checking(){
if((enterName.value != "") && (enterRollNum.value != "")){
 btnClick=document.getElementById("btnClick");
btnClick.disabled=false;
}
}
var questions=[
    {
      question: "Html Stands For  _____________________",
      options: [
        "Hyper Text Makeup Language",
        "html",
        "Case Cading Style Sheet",
        "Hypertext markup language",
      ],
      correctAns: "Hypertext markup language",
    },
    {
      question: "Css Stands For _______________________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "Js Stands For _______________________",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "Dom Stands For _______________________",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "Document Object Model",
    },
    {
      question: "Ram Stands For _______________________",
      options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
      correctAns: "Random Acccess Memory",
    },
    {
      question: "Rom Stands For _______________________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory",
      ],
      correctAns: "Read Only Memory",
    }
  ]

var questionDisplay=document.getElementById("questionDisplay");
var optionDisplay=document.getElementById("optionDisplay");
var index=0; 
var mark=0;

questionDisplay.innerHTML=questions[index].question;

optionDisplay.innerHTML="";
for(var i=0; i<questions[index].options.length;i++){
  optionDisplay.innerHTML += `
  
  <div class="offset-md-4 col-sm-4 my-1"><button onclick="correct('${questions[index].options[i]}','${questions[index].correctAns}')" class='optionButton' )">${questions[index].options[i]}</button></div>
  
  `
}

function next(){
    questionDisplay.innerHTML=questions[index].question;

optionDisplay.innerHTML="";
for(var i=0; i<questions[index].options.length;i++){
  optionDisplay.innerHTML += `
  
  <div class="offset-md-4 col-sm-4 my-1"><button onclick="correct('${questions[index].options[i]}' ,'${questions[index].correctAns}')" class='optionButton' ">${questions[index].options[i]}</button></div>
  
  `
}


}

function correct(a , b){

  if(index!=questions.length-1){
  if(a==b){
    mark++;
    index++;
    next();
    

  }
  else{
    index++;
    next();
  }
}
else{
  if(a==b){
    mark++
  }
  percentage=(mark/6)*100
  percentage=Math.floor(percentage)
 parent=document.getElementById("parent")
 parent.innerHTML=`
 <div class="row  mx-0 customMargin">
        <div class="offset-sm-4 col-4 rounded afterQuiz">

         <p class="afterQuizPara">YOUR SCORE IS<br>${mark}<br>Percentage is ${percentage}</p>
        </div>
    </div>
 
 
 `
}



}


function nextPage(){

anchorTag=document.getElementById("anchorTag");
anchorTag.attributes[1].nodeValue = "homepage.html";
anchorTag.click();

}

