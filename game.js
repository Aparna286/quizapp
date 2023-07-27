const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const span = document.getElementsByClassName("close")[0];
const confirm =document.getElementById("confirm");
const next =document.getElementById("continue");
const play_again =document.getElementById("play_again");
const mymodal= document.getElementById("myModal");
const game_over = document.getElementById("game_over");
const elem=document.getElementById("animate");
const select=document.getElementsByName("choice");

 
//Max no of questions
const MAX_QUESTION=4

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let correct_q=0;
let wrong_q=0;
let pos=-91



let questions = [
  {
  	//1
    question: "Welcome to your new office. You meet a guy who introduces himself as an IT guy and gives you the IT security guidelines and asks you to sign it before he could give you the access card and credentials. He also mentions that the guidelines would be available in the HR portal",
    options : [
      {
        choice:"You have read such guidelines in your previous organisation. So you just sign the guidelines and get the access card from the admin",
        answer:"w",
        scenario:3,
        response:"All organisation would not have the same security policy and you might end up trouble in the future for not complying with organisation policy"
      },
      {
        choice:"You are running late for a meeting with your manager. So you just sign the guidelines and decide to read it in the HR portal later.",
        answer:"r",
        scenario:3,
        response:"It seems you have signed the guidelines without reading it due to an emergency but should make sure to  read it in the HR portal"
      },
      {
        choice:"You read all the information that you’ve been given and then sign the document. But you are late for the meeting with your manager",
        answer:"r",
        scenario:2,
        response:"You made the right choice in terms of security but your manager would not be happy about you being late for the meeting on the first day"
      }
    ]
  },
    {
    	//2
    question: "You manager is furious about you being late for the meeting and starts yelling at you as soon as you enter his cabin before assigning you with your daily task",
    options : [
      {
        choice:"You should blame the IT guy for stopping you at the entry desk",
        answer:"w",
        scenario:4,
        response:"Your manager must be thinking you are a cry baby. This will have a long time impact on your career"
      },
      {
        choice:"You explain to your manager about not knowing the entry process would take so long and for not having planned for such unexpected delays",
        answer:"r",
        scenario:4,
        response:"Not the best impression you could have made on your first day at work. But this would be best you could have done in this situation"
      },
      {
        choice:"You do not try to reply to him now, as it might aggravate his anger. You just walk away from his cabin",
        answer:"w",
        scenario:4,
        response:"Not responding to your manager's questions will make you look arrogant on your first day at work"
      }
    ]
  },
    {
    	//3
    question: "You had met with your manager on time and she has assigned you with your first task",
    options : [
      {
        choice:"You go to your desk immediately and work on the assigned task hoping to change your manager's impression on you",
        answer:"r",
        scenario:4,
        response:"Nice choice. You can try and change your manager's impression of you"
      },
      {
        choice:"You need a coffee after a long conversation with your manager",
        answer:"w",
        scenario:4,
        response:"After being late to the office on your first day it is not wise to spend time for coffee. Your manager might be furious if he sees you with a cup of coffee"
      },
      {
        choice:"Talk to your colleague about your first meeting with your manager and check with him on how to impress your manager.",
        answer:"w",
        scenario:4,
        response:"Your comments might reach your manager's ears and you might end up in big trouble"
      }
    ]
  },
    {
    	//4
    question: "You go to your desk and log in to your desktop. You are prompted to change your password. However, you are not able to set your new password and you get pop up stating the password does not comply with the password policy",
    options : [
      {
        choice:"Skip the password change process and go to the HR portal to read the IT security guidelines",
        answer:"w",
        scenario:0,
        response:"You would probably not do your mandatory password change and are in a risk of password compromise"
      },
      {
        choice:"Check with your colleague regarding the password policy",
        answer:"w",
        scenario:0,
        response:"Your colleagues' knowledge of the Password policy might not be any better than yours. This is not a very wise choice"
      },
      {
        choice:"Call up the IT helpdesk for assistance with password change",
        answer:"r",
        scenario:0,
        response:"Great choice !! This is the best way for you to handle this situation"
      }//, (uncomment it to add another choice)

      //paste the code for choice///


      /////////////////////
    ]

  }//, uncomment it 

//paste the code for another question











/////////////////////////////////////////////////////////

];

confirm.disabled=true;

startGame = () => {
  questionCounter = 0;
  score = 0;
  getNewQuestion();
};

getNewQuestion = () => {
  if (questionCounter > -1) {
  
 
  currentQuestion = questions[questionCounter];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion.options[number-1].choice;
  });

  acceptingAnswers = true;
}
 
};



function func(event){
  confirm.disabled=false;
 
}

select.forEach(choice => {
  choice.addEventListener('click',func)
})

confirm.onclick = function() {
  
  if(document.querySelector('input[name = choice]:checked'))
  {
          if (!acceptingAnswers) return;
          
          acceptingAnswers = false;
          
          
          const selectedAnswer = document.querySelector('input[name = choice]:checked').value;
          let mtext;

          let result =
            "r" == currentQuestion.options[selectedAnswer-1].answer ? "correct" : "incorrect";
          
       
          
             
          // When the user clicks on the button, open the modal
        
          mtext=currentQuestion.options[selectedAnswer-1].response;
          document.getElementById("modal-text").innerText=mtext; 
          questionCounter=currentQuestion.options[selectedAnswer-1].scenario-1;
           
          if(result=="correct" )
            {
                
                
              document.getElementById("modal-image").src='../img/right.png';
                
              correct_q++;

               
              fin=pos+(180)/MAX_QUESTION;
                
               console.log(questionCounter,wrong_q)
              if(wrong_q==0 && questionCounter<0)
              	fin=89
              
              var id = setInterval(frame, 20);
                function frame() {
                if (pos == fin) {
                  clearInterval(id);
                } else {
                  pos++;
                  
                  document.getElementById('pointer').style.setProperty('--d',pos+'deg')
                     
                }
               }
              
             

               document.getElementsByClassName("modal-content")[0].style.background='#5cd65c';
               
              
               
               
            }
          else{

              wrong_q++;
              document.getElementById("modal-image").src="../img/wrong.png"
              document.getElementsByClassName("modal-content")[0].style.background='#ff6666';
             

              }

                 
               if(questionCounter<0){
               next.dataset.target = "#game_over";
               }
               
                next.onclick = function() {

                  select.forEach(choice =>
                  {
                    choice.checked=false;
                  })
                  
                  confirm.disabled=true;
                  mymodal.style.display = "none";
                  score=((correct_q/(correct_q+wrong_q))*100).toFixed(2)
                  document.getElementById("score").innerHTML=`Your percentage is ${score} %` 
                  getNewQuestion(); 
                  
                  play_again.onclick =function(){
                  window.location.href = "../html/game.html";}
                }
                  
      } 
}
 

startGame();
