const questions = [
    { question: "Кое от изброените е твърдо вещество?", answers: ["Лед", "Вода", "Въздух"], correct: 0 },
    { question: "Коя от следните характеристики се отнася за течностите?", answers: ["Запазват формата си", "Приемат формата на съда", "Летят във въздуха"], correct: 1 },
    { question: "Кое от изброените е газообразно вещество?", answers: ["Въздух", "Дърво", "Пясък"], correct: 0 },
    { question: "Как се наричат вещества, които се разтварят във вода?", answers: ["Неразтворими", "Разтворими", "Твърди"], correct: 1 },
    { question: "Кое от изброените вещества е течност?", answers: ["Масло", "Желязо", "Водна пара"], correct: 0 },
    { question: "Какво се случва с водата, когато се нагрее над 100°C?", answers: ["Замръзва", "Изпарява се", "Става на лед"], correct: 1 },
    { question: "Кой е процесът, при който твърдо вещество преминава в течно?", answers: ["Изпарение", "Замръзване", "Топене"], correct: 2 },
    { question: "Какво ще стане с едно кубче лед, ако го оставим на стайна температура?", answers: ["Ще се изпари", "Ще се разтопи", "Ще се втвърди"], correct: 1 },
    { question: "Коя от характеристиките се отнася за газовете?", answers: ["Запазват формата си", "Приемат формата на съда", "Не могат да се движат"], correct: 1 },
    { question: "Кое е най-характерно за твърдите вещества?", answers: ["Приемат формата на съда", "Могат да се променят лесно", "Запазват формата си"], correct: 2 }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const nextButton = document.getElementById('next-button');

    questionElement.textContent = questions[currentQuestion].question;
    answersElement.innerHTML = '';

    questions[currentQuestion].answers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.classList.add('answer');
        answerDiv.textContent = answer;
        answerDiv.onclick = () => selectAnswer(index);
        answersElement.appendChild(answerDiv);
    });

    nextButton.style.display = 'none';
}

function selectAnswer(index) {
    const answerElements = document.querySelectorAll('.answer');
    const nextButton = document.getElementById('next-button');

    if (index === questions[currentQuestion].correct) {
        answerElements[index].classList.add('correct');
        score++;
        document.getElementById('score').textContent = score;
    } else {
        answerElements[index].classList.add('incorrect');
        answerElements[questions[currentQuestion].correct].classList.add('correct');
    }

    answerElements.forEach((el) => (el.onclick = null));
    nextButton.style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    let resultMessage;

    if (score >= 9) {
        resultMessage = `Вие събрахте общо ${score} точки. Справихте се отлично! 😊`;
    } else if (score >= 7) {
        resultMessage = `Вие събрахте общо ${score} точки. Справихте се много добре! 😊`;
    } else if (score >= 5) {
        resultMessage = `Вие събрахте общо ${score} точки. Справихте се добре! 😊`;
    } else {
        resultMessage = `Вие събрахте общо ${score} точки. Прочети още по темата и играй отново! 😞`;
    }

    quizContainer.innerHTML = `<h2>${resultMessage}</h2>`;
}

window.onload = loadQuestion;
