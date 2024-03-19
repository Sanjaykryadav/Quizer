const StartBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const MainContainer = document.querySelector('.Main-Container');
const ContinueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const hide=document.querySelector('.hide');
const Name = document.getElementById('name');
const Try = document.getElementById('try');

const UserName = document.querySelector('.user-name');
const Heading = document.querySelector('.heading');
var x = document.getElementById("check").required;





StartBtn.onclick = ()=>{
    popupInfo.classList.add('active');
    MainContainer.classList.add('active')

}
exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    MainContainer.classList.remove('active');

}

ContinueBtn.onclick = () =>{  
    quizSection.classList.add('active');
    startScreen.classList.remove('active');
    popupInfo.classList.remove('active');
    MainContainer.classList.remove('active');
    //console.log(Name.value)
    UserName.innerHTML= "Hi, "+Name.value;
    Heading.innerText= "Welcome, "+ Name.value;
}
 Try.onclick = () =>{
    quiz.classList.remove('active');
    endScreen.classList.add("hide");
    score=0;
    finalScore.innerHTML = score;
    totalScore.innerHTML = `/ ${questions.length}`;
    
     
    //startScreen.classList.remove('active');
    startQuiz();
    

    
    

}

// inpute and user Name section js
