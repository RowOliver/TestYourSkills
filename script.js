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

var quizSection = document.getElementById ("quiz-things");
var welcomeSection = document.getElementById ("Welcome");
var currentScore = 75; //put in html

var quizQuestions ={
    poistion: 0,
    list: [
        {
            question: " What is an object?",    
            choice: [
                "A standalone enitiy",// correct answer
                "A ball",
                "A method",
                "Google it",
            ],
                answer:0
              
        },
        {
            question:"What breaks a code in JavaScript?",
            choices: [
                "A very large error",
                 "Feeding it after midnight",
                 "A very,very small error",// correct answer
                "Google it",

            ],
                answer: 2

        },
        {
            question:" "
        }       
    ]
            
}

//function to start the game 
function startGame() {
    console.log("yes");
    //start the timer
    startTimer( );
    //hide welcome section
    welcomeSection.classList.add("hidden");
    quizSection.classList.remove("hidden");

    //show the question 

    //render the current question
    renderQuesion( ); 

}
//end the game
function endGame(){

}

//display question
function renderQuesion(){
    console.log(quizQuestions.list[0]);

}

//check answers
function checkAnswer(){

}

//start timer
function startTimer(){
    //create interval
    timerInterval = setInterval(function(){
        currentScore = currentScore - 1;
        if (currentScore == 0) {
            endGame( );

        }

    },1000)


}

//stop timer
function stopTimer(){

}

















// Questons:
// What is an object? Answer: 
// What breaks a code in JS? answer: some kind of puncuation
// What is a variable? Answers: an empty container, a JS property, an allgrebreic term, anything that can vary
// How long does it take to learn JavaScript? Answers: 1 month, 1 year, 10 years, when the light turns on
// What is a string? Answer: fibrouris material, what causes a function, data respresented in text form, google it
// What is an array? Answer: 