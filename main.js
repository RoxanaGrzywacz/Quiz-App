const questions = [
    {
        question: "PKB w cenach rynkowych jest:",
        answers: ["miarą produkcji krajowej łącznie z podatkami pośrednimi na dobra i usługi" , "miara produkcji krajowej z pominięciem podatków pośrednich" , "miara produkcji krajowej z pominięciem podatków bezpośrednich" , "miernikiem całkowitych dochodów osiąganych przez obywateli danego kraju niezaleznie od miejsca świadczenia usług przez czynniki produkcji"],
        correct: 0
    },
    {
        question: "PKB można obliczyć:",
        answers: ["od strony wydatków","od stronny konsumpcji osobistej","od strony oszczędności","od strony inwestycji"],
        correct: 0
    },
    {
        question: "PNB jest równy:",
        answers: ["PKB w cenach rynkowych","PKB powiększonemu o dochody netto z tytułu własności za granicą","PNN","PNN w cenach czynników wytwórczych"],
        correct: 1
    },
    {
        question: "Eksport netto uległ zmniejszeniu, wobec tego:",
        answers: ["PKB jest większy","PKB jest mniejszy","PKB nie zmienił się","żadna z odpowiedzi nie jest prawidłowa"],
        correct: 1
    },
    {
        question: "Dobra pośrednie to:",
        answers: ["dobra konsumpcyjne","dobra nabyte przez ostatecznego użytkownika","dobra nabyte przez gospodarstwa domowe","dobra stanowiące nakład w innym przedsiębiorstwie"],
        correct: 3
    },
    {
        question: "Na zmiany niminalnego PKB w danym okresie wplywają:",
        answers: ["tylko zmiany cen","tylko zmiany wielkości produkcji","zmiany cen i wielkości produkcji","żadna z powyższych odpowiedzi nie jest prawidłowa"],
        correct: 2
    },
    {
        question: "Metoda sumowania dochodów polega na:",
        answers: ["sumowaniu dochodów z czynników produkcji","sumowaniu dochodów powstających w procesie produkcji i dochodów z tytułu płatności transferowych","żadna z powyższych odpowiedzi nie jest prawidłowa"],
        correct: 0
    },
    {
        question: "Do podatków pośrednich zaliczamy:",
        answers: ["podatek dochodowy od osób fizycznych","podatek VAT i podatek akcyzowy","podatek dochodowy od osób prawnych","żadne z powyzszych"],
        correct: 1
    },
    {
        question: "Postać funkcji konsumpcji przedstawia:",
        answers: ["zależnośc konsumpcji od dochodu równoważącego","zależnośc konsumpcji od dochodu rozporządzalnego","zależność konsumpcji od dochodu narodowego","żadne z powyższych"],
        correct: 1
    },
    {
        question: "Ile gospodarstwa domowe przeznaczą na oszczędności, jeżeli jego dochody wzrosną o 100zł przy KSK=0,6?",
        answers: ["6zł","60zł","40zł","16zł","nie można obliczyć"],
        correct: 2
    },
    {
        question: "Funkcja konsumpcji ma postać C=80+0,8Y. Oszczędności będą równe zero, gdy Y wyniesie:",
        answers: ["100","200","300","400"],
        correct: 3
    },
    {
        question: "Płaca jest:",
        answers: ["ceną siły roboczej","ceną pracy","wynagrodzeniem za pracę zależnym tylko od ilości przepracowanego czasu","wynagrodzeniem za pracę zależnym jedynie od rozmiarów produkcji"],
        correct: 1
    },
    {
        question: "Bezrobotni to:",
        answers: ["niepracujące osoby w wieku produkcyjnym","osoby w wieku produkcyjnym i nieprodukcyjnym, zdolne do pracy, lecz niechętne do jej podjęcia","cześć zasobów siły roboczej"],
        correct: 2
    },
    {
        question: "W skład zasobów siły roboczej wchodzą:",
        answers: ["aktywni i bierni zawodowo","zatrudnieni i bezrobotni","osoby w wieku produkcyjnym oraz pracujące osoby w wieku nieprodukcyjnym","tylko zatrudnieni"],
        correct: 1
    },
    {
        question: "Niewystarczający popyt globalny na dobra powoduje powstawanie:",
        answers: ["bezrobocia frakcyjnego","bezrobocia strukturalnego","bezrobocia koniunkturalnego","bezrobocia sezonowego"],
        correct: 2
    },
    {
        question: "Osoba, która zrezygnowała z jednej pracy i za miesiąc zamierza podjąc nową pracę, należy do zasobu bezrobocia:",
        answers: ["frykcyjnego","strukturalnego","koniunkturalnego","przymusowego"],
        correct: 0
    },
    {
        question: "Gospodarka otwarta to taka, w której zawsze istnieje nadmierne bezrobocie.",
        answers: ["Prawda","Fałsz"],
        correct: 1
    },
    {
        question: "Jeżeli wykwalifikowany pracownik przemysłu spozywczego straci pracę w wyniku zakupu nowoczesnej linii produkcyjnej, a jego umiejętnosci nie pozwola mu znaleźć zatrudnienia gdzie indziej, będzie to przyklad bezrobocia strukturalnego.",
        answers: ["Prawda","Fałsz"],
        correct: 0
    },
    {
        question: "Każde bezrobocie jest zawsze zjawiskiem niepożądanym w gospodarce.",
        answers: ["Prawda","Fałsz"],
        correct: 1
    },
    {
        question: "Bezrobocie frykcyjne występuje w każdej rozwijającej się gospodarce.",
        answers: ["Prawda","Fałsz"],
        correct: 0
    },

];

let currentQuestionIndex = 0;

function loadQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

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
}

function checkAnswer(button, isCorrect) {
    button.classList.add(isCorrect ? 'correct' : 'incorrect');
    document.querySelectorAll('#quiz-container button').forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert("Koniec quizu!");
    }
}

loadQuestion();