const quizeData = [
    {
        question: "Q1: What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
       
      
        answer: "ans4"
    },
    {
        question: "Q2: The city known as the IT capital of India is",
        a: 'Bangalore',
        b: 'Mumbai',
        c: 'Karachi',
        d: 'Hyderabad',
      
        answer: "ans1"

    },

    {
        question: "Q3: SMPS stands for ?",
        a: "Switched mode power supply",
        b: "Store mode poer supply",
        c: "Start mode power supply",
        d: "Single mode power supply",
        answer: "ans1"

    },

    {
        question: "Q4:Best Quality graphics is produce by?",
        a: "Laser",
        b: "Plotter",
        c: "Dot Matrix",
        d: "None",
        answer: "ans2"

    },
 
    {
        question: "Q5: MS- word is an example of?",
        a: "An operating system",
        b: "A processing device",
        c: " An input device",
        d: "Application software",
        answer: "ans4"

    },

];


const question = document.querySelector('.question');
const test1 = document.querySelector('#test1');
const test2 = document.querySelector('#test2');
const test3 = document.querySelector('#test3');
const test4 = document.querySelector('#test4');
const submit = document.querySelector('#submit');


const answers = document.querySelectorAll('.answer');

const showscore = document.querySelector('#showscore');

let questionCount = 0;
let score = 0;
// deselectAnswers();
// const loadQuestion = () => {
    function loadQuestion() {
        deselectAnswers();
   
      //  question.innerHTML= quizeDB[0].Question;
    const questionList = quizeData[questionCount];
    question.innerHTML = quizeData[questionCount].question;

    
    question.innerText = questionList.question;
    test1.innerText = questionList.a;
    test2.innerText = questionList.b;
    test3.innerText = questionList.c;
    test4.innerText = questionList.d;
  
}
loadQuestion();

// const getCheckAnswer = () => {
    function getCheckAnswer(){
    let answer;
    answers.forEach((curAnsElem) => 
    {
        if (curAnsElem.checked) 
        {
        answer = curAnsElem.id;
    }
  
});
return answer;
    };

    function deselectAnswers() {
        answers.forEach((curAnsElem) => {
            curAnsElem.checked = false;
        });
    }


submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    /// compare 
    if(checkedAnswer  === quizeData[questionCount].answer){
    score++;
    };

    // chnage the quest
    questionCount++;

if(questionCount < quizeData.length){
    loadQuestion();
}
else{
    showscore.innerHTML = `

    <h3>You answered correctly at ${score}/${ quizeData.length}</h3>
                
<button class="btn" onclick="location.reload()">Reload</button>
`;


 showscore.classList.remove('ScoreArea');


}

});



// load




