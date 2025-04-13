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
    {
        question: "Stopa bezrobocia to stosunek liczby bezrobotnych do liczby poszukujących pracę",
        answers: ["Prawda","Fałsz"],
        correct: 1
    },
    {
        question: "Bezrobotni absolwenci tworzą bezrobocie strukturalne",
        answers: ["Prawda","Fałsz"],
        correct: 1
    },
    {
        question: "Jeżeli w wyniku recesji spadnie sprzedaż materiałów budowlanych i sprzedawca zostanie zwolniony to będzie to przykład bezrobocia koniunkturalnego",
        answers: ["Prawda","Fałsz"],
        correct: 0
    },
    {
        question: "Bezrobocie strukturalne nie jest przykładem bezrobocia naturalnego.",
        answers: ["Prawda","Fałsz"],
        correct: 0
    },
    {
        question: "Każdy, kto nie pracuje jest bezrobotnym.",
        answers: ["Prawda","Fałsz"],
        correct: 1
    },
    {
        question: "Inflacja jest:",
        answers: ["zjawiskiem związanym tylko z gospodarką rynkową","zjawiskiem związanym tylko z gospodarką centralnie sterowaną","zjawiskiem związanym tylko z gospodarką naturalną","żadna z powyższych odpowiedz nie jest prawidłowa"],
        correct: 3
    },
    {
        question: "Na inflacji tracą",
        answers: ["banki udzielające pożyczek o stałej stopie oprocentowania","banki udzielające pożyczek o zmiennej stopie oprocentowania","dłużnicy, którzy zaciagneli kredyt o stałej stopie oprocentowania","żadna z powyższych odpowiedzi nie jest prawidłowa"],
        correct: 0
    },
    {
        question: "Przyczyną inflacji popytowej jest",
        answers: ["wzrost wynagrodzeń","wzrost kosztów wytwarzania","wzrost hurtowych cen żywności","żadna z powyższych odpowiedzi nie jest prawidłowa"],
        correct: 3
    },
    {
        question: "Inflacja pojawia sie dopiero wtedy, gdy w dłuższym okresie czasu wzrośnie ogólny poziom cen",
        answers: ["Prawda","Fałsz"],
        correct: 0
    },
    {
        question: "Gdy ceny rosną w tempie 350% rocznie to w gospodarce występuje hiperinflacja",
        answers: ["Prawda","Fałsz"],
        correct: 0
    },
    {
        question: "Inflacja popytowa jest efektem nadwyżki podaży globalnej nad popytem zagregowanym",
        answers: ["Prawda","Fałsz"],
        correct: 1
    },
    {
        question: "Na inflacji tracą kredytobiorcy, którzy zaciagneli kredyty o stałej stopie oprocentowania.",
        answers: ["Prawda","Fałsz"],
        correct: 1
    },
    {
        question: "Inflacja osłabia skłonnośc do oszczędzania",
        answers: ["Prawda","Fałsz"],
        correct: 0
    },
    {
        question: "Inflacja kosztowa jest wynikiem wzrostu kosztów produkcji w gospodarce",
        answers: ["Prawda","Fałsz"],
        correct: 0
    },
    {
        question: "Kurs walutowy oznacza:",
        answers: ["spadek wartości waluty krajowej","wartość importu dóbr w stosunku do wartości eksportu","cenę waluty obcej wyrażonej w walucie krajowej","cenę dóbr i usług wyprodukowanych w krajowej gospodarce przeliczonej na euro"],
        correct: 2
    },
    {
        question: "Podstawowe funkcje kursu walutowego to:",
        answers: ["funkcja informacyjna i cenotwórcza","funkcja informacyjna i redystrybucyjna","fynkcja informacyjna i stabilizacyjna","funkcja stabilizacyjna i alokacyjna"],
        correct: 0
    },
    {
        question: "Kursy kupna oraz sprzedaży charakteryzują się tym, że:",
        answers: ["kurs kupna jest większy od kursu sprzedaży","kurs kupna jest równy kursowi sprzedaży","kurs kupna jest niższy od kursu sprzedaży","kurs kupna zmienia się niezależnie od kursu sprzedaży"],
        correct: 2
    },
    {
        question: "Umocnienie się waluty krajowej w sysyemie kursów stałych nosi nazwę:",
        answers: ["dewaluacji","rewaluacji","deprecjacji","aprecjacji"],
        correct: 1
    },
    {
        question: "Osłabienie się waluty krajowej w systemie kursów płynnych nosi nazwę:",
        answers: ["dewaluacji","rewaluacji","deprecjacji","aprecjacji"],
        correct: 2
    },
    {
        question: "Jeżeli przed rokiem kurs dolara wynosił 1 USD = 3,75 PLN a rok później 1 USD = 4,5 PLN to nastąpiła:",
        answers: ["aprecjacja złotego","deprecjacja dolara","deprecjacja złotego","dewaluacja dolara"],
        correct: 2
    },
    {
        question: "Wspólna europejska waluta euro zastąpiła już waluty narodowe w:",
        answers: ["12 państwach UE","15 państwach UE","17 państwach UE","20 państwach UE"],
        correct: 3
    },
    {
        question: "Które z poniższych rodzajów bezrobocia jest bezrobociem strukturalnym:",
        answers: ["bezrobocie wynikające ze zmniejszenia produkcji w przemyśle tekstylnym na skutek zamontowania nowej linii produkcyjnej","osoby niepełnosprawne, niezdolne do pracy zawodowej","bezrobocie wynikające z faktu, że poziom płac realnych jest wyższy od poziomu zapewniającego równowagę rynku pracy","bezrobocie wynikające ze zbyt wolnego dostosowania się rynku pracy do spadku popytu globalnego"],
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

