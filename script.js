// things that are needed:
// create button- created in HTML
// make timer that starts when presented with question 
// prompt user through questions and and answers
// when user is incorrect reduce time on timer 
// timer runs out when all questions are answered or when the timer runs out
// store scores with initials on lowocal storage 


//make button clickable 
var startbtn = document.getElementById ("start-button") ; //have to declare no value
console.log(startbtn);
startbtn.addEventListener("click", startGame)
var timerInterval;
var questionIndex = 0;

//things to loop through
var quizSection = document.getElementById ("quiz-things");
var welcomeSection = document.getElementById ("Welcome");
var currentScore = 75; //put in html
var timer = document.getElementById("timer");
var timerLength = 75;
var currentTime;

















var quizQuestions ={
    poistion: 0,
    list: [
        {
            question: "Who is the manager? ",    
            choice: ["Jim",
                     "Michael", //correct answer
                     "Pam", 
                    " Darryl",
                
            ],
                answer:1
              
        },
        {
            question: "Who is fire guy?",
            choices: ["Jim", 
                      "Roy",
                     " Madge", 
                      "Ryan",// correct answer
            ],
                answer: 3

        },
        {
            question:"When Dwight isn't working in the paper biz, what does he do? ",
            choices: [ "A Samurai", 
                       "A farmer",
                       "A volunteer sheriff",
                       "All of the above",//correct answer 

            ],
                answer: 3
        }, 
        {
            question: "Accounting has: Ocar, Keven AND ___?",
            choices: ["The warehouse guys",
                      "Michael",
                      "Angela",//correct answer
                      "Meredith", 

            ],
                answer: 2
        }       
    ]
            
}

//function to start the game 
function startGame() {
    console.log("yes");
    //start the timer
    
    //hide welcome section
    welcomeSection.classList.add("hidden");
    quizSection.classList.remove("hidden");

    currentTime = setInterval(startTimer, 1000);
    timer.textContent = timerLength; 
    
    
    
    //show the question 
    showQuesion( ); 

}

//display question
function showQuesion(){
    console.log(quizQuestions.list[questionIndex]);
    
    
    


    

}

//check answers
function checkAnswer(){
    //use same logic as above- access something from current question. copy above 

}

//start timer
function startTimer(){
    //create interval
    timerLength--;

    timer.textContent=timerLength;
    if (timerLength === 0){
        endGame()
    }
    


    

}

//stop timer
function stopTimer(){

}

//end the game
function endGame(){

}

















// Questons:
// Who is the manager?Answers: Jim, Michael, Pam, Darryl 
// Who is fire guy? Answers: Jim, Roy, Madge, Ryan 
// When Dwight isn't working in the paper biz, what does he do? Answer: A Samurai, A farmer, A volunteer sheriff, All of the above
// Accounting has: Ocar, Keven AND ___? Answers: The warehouse guys, Michael, Angela, Meredith 
// Who is Big Tuna? Answers: Stanley, Creed, Jim, Andy 