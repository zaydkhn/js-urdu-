const quizData = [
    {
        question: "Who won the FIFA World Cup in 2018?",
        a: "Brazil",
        b: "Germany",
        c: "France",
        d: "Argentina",
        correct: "c"
    },
    {
        question: "Which country has won the most FIFA World Cups?",
        a: "Germany",
        b: "Argentina",
        c: "Brazil",
        d: "Italy",
        correct: "c"
    },
    {
        question: "Which player holds the record for the most goals in FIFA World Cup history?",
        a: "Cristiano Ronaldo",
        b: "Pele",
        c: "Miroslav Klose",
        d: "Diego Maradona",
        correct: "c"
    },
    {
        question: "Which club has won the most UEFA Champions League titles?",
        a: "Manchester United",
        b: "Real Madrid",
        c: "Barcelona",
        d: "AC Milan",
        correct: "b"
    },
    {
        question: "Who won the Ballon d'Or in 2022?",
        a: "Lionel Messi",
        b: "Robert Lewandowski",
        c: "Karim Benzema",
        d: "Cristiano Ronaldo",
        correct: "c"
    },
    {
        question: "Which country hosted the 2014 FIFA World Cup?",
        a: "Brazil",
        b: "South Africa",
        c: "Russia",
        d: "Germany",
        correct: "a"
    },
    {
        question: "Which football club is known as 'The Red Devils'?",
        a: "Liverpool",
        b: "Manchester United",
        c: "Arsenal",
        d: "Chelsea",
        correct: "b"
    },
    {
        question: "Who is the all-time top scorer for Barcelona?",
        a: "Neymar",
        b: "Ronaldinho",
        c: "Lionel Messi",
        d: "Luis Suarez",
        correct: "c"
    },
    {
        question: "Which player has the most appearances in the Premier League?",
        a: "Frank Lampard",
        b: "Ryan Giggs",
        c: "Gareth Barry",
        d: "Steven Gerrard",
        correct: "c"
    },
    {
        question: "Which country won the first ever FIFA World Cup in 1930?",
        a: "Argentina",
        b: "Uruguay",
        c: "Italy",
        d: "Brazil",
        correct: "b"
    },
    {
        question: "Who is the all-time top scorer for the Portuguese national team?",
        a: "Eusebio",
        b: "Cristiano Ronaldo",
        c: "Luis Figo",
        d: "Nuno Gomes",
        correct: "b"
    },
    {
        question: "Which English football club plays its home matches at Anfield?",
        a: "Manchester United",
        b: "Liverpool",
        c: "Chelsea",
        d: "Arsenal",
        correct: "b"
    },
    {
        question: "Which player scored the 'Hand of God' goal in the 1986 World Cup?",
        a: "Pele",
        b: "Zinedine Zidane",
        c: "Diego Maradona",
        d: "Johan Cruyff",
        correct: "c"
    },
    {
        question: "Which Italian club is known as 'The Old Lady'?",
        a: "Juventus",
        b: "Inter Milan",
        c: "AC Milan",
        d: "Napoli",
        correct: "a"
    },
    {
        question: "Which country won Euro 2020?",
        a: "England",
        b: "Spain",
        c: "Italy",
        d: "Germany",
        correct: "c"
    },
    {
        question: "Which player won the Golden Boot in the 2018 FIFA World Cup?",
        a: "Cristiano Ronaldo",
        b: "Lionel Messi",
        c: "Harry Kane",
        d: "Kylian Mbappe",
        correct: "c"
    },
    {
        question: "Who is the youngest player to score in a World Cup final?",
        a: "Pele",
        b: "Kylian Mbappe",
        c: "Diego Maradona",
        d: "Johan Cruyff",
        correct: "a"
    },
    {
        question: "Which country has won the most UEFA European Championship titles?",
        a: "Germany",
        b: "Spain",
        c: "France",
        d: "Italy",
        correct: "a"
    },
    {
        question: "Who scored the winning goal in the 2014 FIFA World Cup final?",
        a: "Mario Gotze",
        b: "Lionel Messi",
        c: "Neymar",
        d: "Thomas Muller",
        correct: "a"
    },
    {
        question: "Which football club has the nickname 'The Blues'?",
        a: "Manchester City",
        b: "Chelsea",
        c: "Everton",
        d: "Leicester City",
        correct: "b"
    }
];

const quiz = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const resultsEl = document.getElementById('results');
let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    const currentData = quizData[currentQuiz];
    quiz.innerHTML = `
        <h2>${currentData.question}</h2>
        <div class="options">
            <label><input type="radio" name="answer" value="a"> ${currentData.a}</label>
            <label><input type="radio" name="answer" value="b"> ${currentData.b}</label>
            <label><input type="radio" name="answer" value="c"> ${currentData.c}</label>
            <label><input type="radio" name="answer" value="d"> ${currentData.d}</label>
        </div>
    `;
}

function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer;
    answers.forEach(answer => {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    });
    return selectedAnswer;
}

submitBtn.addEventListener('click', () => {
    const selectedAnswer = getSelected();
    if (selectedAnswer) {
        if (selectedAnswer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly!</h2>`;
            submitBtn.style.display = 'none';
        }
    }
});

loadQuiz();
