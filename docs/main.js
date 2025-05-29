const questions = [
    {
        question: "Miejsce na pytanie:",
        answers: ["odpowiedź 1" , "odpowiedź 2" , "odpowiedź 3" , " odpowiedź 4"],
        correct: 0
    },
    


];

let currentQuestionIndex = 0;
let correctAnswers = 0;

function loadQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = ''; // Czyścimy kontener przed załadowaniem nowego pytania

    const questionData = questions[currentQuestionIndex];
    const questionElement = document.createElement('p');
    questionElement.textContent = questionData.question;
    quizContainer.appendChild(questionElement);

    questionData.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.onclick = () => checkAnswer(button, index === questionData.correct);
        quizContainer.appendChild(button);
    });
    
    /*// Dodajemy przycisk "Następne pytanie", który początkowo jest wyłączony
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Następne pytanie';
    nextButton.onclick = nextQuestion; // Umożliwia przejście do następnego pytania
    nextButton.disabled = true; // Na początku jest wyłączony
    quizContainer.appendChild(nextButton);*/
}

function checkAnswer(button, isCorrect) {
    const buttons = document.querySelectorAll('#quiz-container button');

    buttons.forEach((btn, index) => {
        btn.disabled = true; // Dezaktywujemy wszystkie przyciski po odpowiedzi
        if (index === questions[currentQuestionIndex].correct) {
            btn.classList.add('correct'); // Podświetlamy prawidłową odpowiedź
        }
    });

    if (!isCorrect) {
        button.classList.add('incorrect'); // Podświetlamy błędną odpowiedź
    }

    if (isCorrect) {
        correctAnswers++; // Zwiększamy licznik poprawnych odpowiedzi
    }

    // Aktywujemy przycisk "Następne pytanie" po udzieleniu odpowiedzi
    document.querySelector('#quiz-container button:last-child').disabled = false;
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++; // Zwiększamy indeks pytania
        loadQuestion(); // Ładujemy kolejne pytanie
    } else {
        showResults(); // Jeśli to ostatnie pytanie, pokazujemy wynik
    }
}

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = ''; // Czyścimy kontener

    // Wyświetlamy wynik
    const resultText = document.createElement('p');
    resultText.textContent = `Twój wynik: ${correctAnswers} z ${questions.length}`;
    quizContainer.appendChild(resultText);

    // Dodajemy przycisk do zresetowania quizu
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Zacznij od nowa';
    restartButton.onclick = restartQuiz;
    quizContainer.appendChild(restartButton);
}

function restartQuiz() {
    currentQuestionIndex = 0; // Resetujemy indeks pytania
    correctAnswers = 0; // Resetujemy licznik poprawnych odpowiedzi
    loadQuestion(); // Ładujemy pierwsze pytanie
}

loadQuestion(); // Ładowanie pierwszego pytania na początku

