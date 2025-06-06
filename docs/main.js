const questions = [
    {
        question: "Rekurencja w niektórych sytuacjach jest naturalnym sposobem budowy algorytmu",
        answers: ["Prawda" , "Fałsz"],
        correct: 0,
        explanation: "Rekurencja jest techniką programowania w której funkcja wywołuje samą siebie. Może być używana do rozwiązywania problemów, które mają strukturę podobną do problemów dla których można zastosować tę samym logikę w takich przypadkach rekurencja może być naturalnym sposobem budowania algorytmów"
    },
    
    {
        question: "Sortowanie przez wybieranie jest bardzo szybki ",
        answers: ["Prawda" , "Fałsz"],
        correct: 1,
        explanation: "Algorytm sortowanie przez wybieranie nie jest bardzo szybki a raczej należy do prostych algorytmów sortowania o mniej efektywnej złożoności czasowej. Sortowanie przez wybieranie działa w sposób integracyjny. Algorytm przychodzi przez listę danych i w każdym kroku znajduje najmniejszy lub największy element i umieszczonego na odpowiedniej pozycji. Proces ten powtarza się dla kolejnych elementów aż cała lista zostanie posortowana"
    },

     {
        question: "Największe liczby całkowite dostępne standardowo mają 18 cyfr  ",
        answers: ["Prawda" , "Fałsz"],
        correct: 1,
        explanation: "Największe liczby całkowite dostępne standardowo w C++ mogą mieć znacznie więcej niż 18 cyfr. W języku C++ typy danych całkowitoliczbowe takie jak int long int i long long int mają zdefiniowany minimalny i maksymalny zakres wartości które mogą przechowywać. Zakresy te są zależne od implementacji ale zwykle są dużo większe niż liczby o 18 cyfr."
     },

      {
        question: "Jeśli program implementujące jakiś program nie zatrzyma się to prawdopodobnie jest to błąd programisty ",
        answers: ["Prawda" , "Fałsz"],
        correct: 0,
        explanation: "Kiedy program wykonuje się w nieskończoną pętlę lub zawiesza się w nieskończoność to wskazuje na błąd w logice programu lub niedostateczne zarządzanie przepływem wykonania. Programista odpowiedzialny za implementację algorytmu powinien zapewnić że program zatrzymuje się po wykonaniu swojego zadania."
     },

      {
        question: "Algorytmy sortowania porównują się za pomocą testów w których wykorzystuje się generatory liczb pseudolosowych ",
        answers: ["Prawda" , "Fałsz"],
        correct: 0,
        explanation: "Testy sortowania służą do ceny wydajności i skuteczności różnych algorytmów sortowania. Aby przeprowadzić takie testy generuje się zestaw danych które są losowe lub mają określone właściwości takie jak dane posortowane prawie posortowane odwrócone i tak dalej."
     },

      {
        question: "Dla danych losowych QuickSort zwykle okazuje się najszybszy ",
        answers: ["Prawda" , "Fałsz"],
        correct: 0,
        explanation: "QuickSort jest algorytmem sortowania opartym na porównaniu. Działa na zasadzie podziału zbioru danych na mniejsze podzbiory z sortowania tych podzbioru i łączenia ich w celu uzyskania posortowanego wyniku. Algorytm Quicksort wybiera jeden element jako i porządkuje pozostałe elementy względem tego pivota następnie rekurencyjnie sortuje mniejsze elementy od pivota i większe elementy od pivota."
     },

      {
        question: "Jeśli w trakcie działania programu liczba typu interfejs przekroczy swój zakres zostanie wyświetlony komunikat o błędzie ",
        answers: ["Prawda" , "Fałsz"],
        correct: 1,
        explanation: "Typ int ma określony zakres wartości który może być reprezentowany. W językach programowania takich jak C/C++ czy Java, zakres int zależy od implementacji ale zazwyczaj wynosi od -2147483648 do 2147483648."
     },

     {
        question: "Ograniczeniem rekurencji jest wielkość pamięci stosu systemu komputerowego ",
        answers: ["Prawda" , "Fałsz"],
        correct: 0,
        explanation: "Rekurencja to technika programowania w której funkcja wywołuje samą siebie. Każde wywołanie rekurencyjne powoduje utworzenia nowego stosu który zawiera informacje o bieżącym wywołaniu funkcji takie jak lokalne zmienne argumenty funkcji I adres powrotu. Gdy funkcja rekurencyjne ona wykonuje się te informacje są przechowywane na stosie."
     },

     {
        question: "String jest tablicą znaków ",
        answers: ["Prawda" , "Fałsz"],
        correct: 0,
        explanation: "W większości języków programowania, w tym językach takich jak C/C++, Java czy Python string jest reprezentowany jako tablice znaków. String to sekwencja znaków taka jak „Hello World!” aby przechować tę sekwencję znaków pamięci można użyć tablicy gdzie każdy element tablicy reprezentuje pojedynczo"
     },

     {
        question: "Tablice jako strukturę danych ma wiele zalet że prawdopodobnie jest najczęściej używane do przechowywania danych ",
        answers: ["Prawda" , "Fałsz"],
        correct: 0,
        explanation: ""
     },

     {
        question: "Dokładność obliczenia liczby typu double to 6 cyfr ",
        answers: ["Prawda" , "Fałsz"],
        correct: 1,
        explanation: "Liczba typu double (w językach takich jak C++, Java czy Python) ma dokładność rzędu 15–17 cyfr znaczących, nie 6. Typ float (pojedyncza precyzja) ma około 6–7 cyfr znaczących. Typ double (podwójna precyzja) ma około 15–17 cyfr znaczących."
     },

     {
        question: "Algorytm sortowania przez kopcowanie ma złożoność O(n^2) ",
        answers: ["Prawda" , "Fałsz"],
        correct: 1,
        explanation: "Sortowanie przez kopcowanie wykorzystuje strukturę danych zwanej kopcem (heap) która jest specjalnym rodzajem drzewa binarnego w tym algorytmie najpierw tworzy się kopiec na podstawie danych wyjściowych a następnie wykonuje się operacje usuwania korzenia kopca i umieszczania go na odpowiednich pozycjach co prowadzi do posortowania danych."
     },

     {
        question: "O(n^2)+O(nlogn)=O(n^2) ",
        answers: ["Prawda" , "Fałsz"],
        correct: 1,
        explanation: "W matematyce O(n^2) oznacza złożoność kwadratową a O(n log n) oznacza złożoność n log n. Gdy te 2 składniki są dodawane nie można uprościć do O(n^2)."
     },

     {
        question: "Stos jest listą ",
        answers: ["Prawda" , "Fałsz"],
        correct: 0,
        explanation: "Stos można zaimplementować jako listę zwłaszcza w kontekście struktur danych w stos której elementy są przechowywane w sposób LIFO last in first out co oznacza że ostatni element który został dodany do stosu jest pierwszy który zostanie usunięty."
     },

     {
        question: "Sortowanie przez zliczanie wymaga utworzenia dodatkowej tablicy do zapisania posortowanych danych ",
        answers: ["Prawda" , "Fałsz"],
        correct: 0,
        explanation: "Sortowanie przez zliczanie wymagał tworzenia dodatkowej tablicy do zapisania posortowanych danych sortowanie przez zliczanie jest algorytmem sortowania który opiera się na zliczaniu wystąpień poszczególnych elementów i konstruowaniu na tej podstawie wynikowej posortowanych sekwencji."
     },

     {
        question: "Algorytm sortowanie przez scalanie może być użyty w sytuacji gdy dane komputera nie mieszczą się w pamięci ",
        answers: ["Prawda" , "Fałsz"],
        correct: 0,
        explanation: "Algorytm sortowanie przez scalanie może być użyty w sytuacji gdy dane komputera nie mieszczą się w pamięci operacyjnej jest to możliwe dzięki technice nazywanej zewnętrznym sortowaniem przez scalanie która polega na podziale danych na mniejsze bloki które są sortowane i scalanie w późniejszym etapie."
     },

     {
        question: "Do sortowania danych tekstowych dobrym będzie algorytm kubełkowy ",
        answers: ["Prawda" , "Fałsz"],
        correct: 0,
        explanation: "Algorytm kubełkowy może być dobrym wyborem do sortowania danych tekstowych algorytm kubełkowy jest szczególnie przydatny w przypadku gdy dane wyjściowe mają równomierne rozkład i można je podzielić na przydziały lub kubełki. W przypadku sortowania danych tekstowych można przyporządkować każdej literze alfabetu określony zakres wartości liczbowych lub indeksu a następnie umieścić elementy w odpowiednich kubełka och na podstawie ich wartości liczbowych lub indeksów."
     },

     {
        question: "Sortowanie stabilne związane jest z kolejnością równych sobie elementów ",
        answers: ["Prawda" , "Fałsz"],
        correct: 0,
        explanation: "Sortowanie stabilne oznacza że jeśli 2 elementy mają te samą wartość to po sortowaniu ich względem pewnego kryterium ich względna kolejność zostanie zachowana jeśli mamy 2 więc tej kopii element tej samej wartości to te elementy będą ułożone wynikowej posortowanych sekwencji w takiej samej kolejności jakie występują sekwencji wyjściowej."
     },

     {
        question: "Tablica jest strukturą rozproszoną w pamięci komputera ",
        answers: ["Prawda" , "Fałsz"],
        correct: 1,
        explanation: "Tablica jest strukturą danych która przechowuje elementy o stałej wielkości sekwencyjnej formie tablica jest alokowana w sposób ciągły a elementy są przechowywane jedno po 2 w pamięci. Struktura rozproszona w pamięci komputera znana również jako struktura danych powiązanymi wskaźnikami przechowuje elementy w sposób nie sekwencyjny lub rozproszony w różnych częściach pamięci przykłady takich struktur kolisty jednokierunkowe listy dwukierunkowe drzewa grafy itp."
     },

      {
        question: "Takiej samej złożoności O(n^2) mają taki sam czas działania ",
        answers: ["Prawda" , "Fałsz"],
        correct: 1,
        explanation: "Oznacz złożoności czasowej O(n^2) informuje nas że oba algorytmy mają podobny wzrost czasu działania w zależności od rozmiaru danych wejściowych o to że mają taki sam czas działanie 2 różne algorytmy o tej samej złożoności czasowej O(n^2) mogą mieć różne stałe czynniki które wpływają na ich efektywność na przykład jednym algorytmem może być sortowanie bąbelkowe a 2 algorytmem sortowanie przez wstawianie."
     },

      {
        question: "Istnieje algorytm sortowania o liniowej złożoności ale można go wykorzystać jedynie przy spełnieniu dodatkowych warunków dotyczących typu i zakresu sortowania danych ",
        answers: ["Prawda" , "Fałsz"],
        correct: 0,
        explanation: "Jednym z przykładów takiego algorytmu jest Couting Sort sortowanie przez zliczanie. Jest efektywnym algorytmem sortowania o złożoności czasowej O(n) gdzie n oznacza liczbę elementów do posortowania"
     },

      {
        question: "Duże programy często zawitają nieokreślone błędy przyjmuje się za poprawny ten program który spełnia zaplanowany testy ",
        answers: ["Prawda" , "Fałsz"],
        correct: 1,
        explanation: "Przyjęcie za poprawne program który spełnia zaplanowane testy te zbyt ograniczone podejście i nie jest wystarczające do stwierdzenia jest całkowicie poprawny zaplanowane testy mogą pokryć tylko pewien zakres przypadków testowych i nieskończenie uwzględniają wszystkie możliwe sytuacje i kombinacje danych wyjściowych"
     },

      {
        question: "Obliczenie wartości efn ciąg fibonacciego metodą regulacyjną ma złożoność O(n^2) ",
        answers: ["Prawda" , "Fałsz"],
        correct: 1,
        explanation: "Obliczenie wartości n tego elementu ciągu fibonacciego za pomocą rok karencji ma złożoność czasową wykładniczo a nie kwadratową dokładnie ma złożoność O(2^n). Metoda rekolekcyjna obliczania wartości fibo naci jego polega na podziale problemu na 2 mniejsze p obliczanie wartości 2 poprzednich elementów ciągów i badać jego w rezultacie ta metoda prowadzi do rekurencyjny nego wywołania siebie samej dla obliczania kolejnych elementów."
     },

      {
        question: "Lista jest abstrakcyjnym modelem struktury danych i może być zaimplementowana w różny sposób ",
        answers: ["Prawda" , "Fałsz"],
        correct: 0,
        explanation: "Lista jest abstrakcyjnym modelem struktury danych co oznacza że określa ogólne zachowanie i operacje które można wykonać na takiej strukturze nie precyzując jednak konkretnych szczegółów implementacyjne innych listy może różnić się w zależności od potrzeb i wykorzystywanych technologii istnieje wiele różnych sposobów implementacji listy takich jak jednokierunkowa dwukierunkowa cykliczna."
     },

      {
        question: "Kolejka nie jest listą ",
        answers: ["Prawda" , "Fałsz"],
        correct: 0,
        explanation: "Kolejka to struktura danych która organizuje elementy w kolejności ich dodawania enqueue i dequeue. kolejka działa zgodnie z zasadą pierwszy przed pierwszy wyszedł first in first out."
     },

      {
        question: "Najszybszy algorytm sortowania wykorzystujący porównywanie i zamianę elementów ma złożoność O(log n) ",
        answers: ["Prawda" , "Fałsz"],
        correct: 1,
        explanation: "Najszybsze algorytmy sortowania wykorzystujące porównywanie i zamiany elementów mają złożoność czasową O(n log n) lub gorszą by gdzie n oznacza liczbę elementów do posortowana najbardziej znane algorytmy sortowania takie jak Quick sort merge sort heap sort mają złożoność czasową O(n log n) w przypadku średnim lub najlepszym. Są one uważane za bardzo efektywne algorytmy sortowania w praktyce"
     },

      {
        question: "Jeśli algorytm ma złożoność O(n^2) to jeśli en wzrośnie dwukrotnie to czas działania też wzrośnie dwukrotnie ",
        answers: ["Prawda" , "Fałsz"],
        correct: 1,
        explanation: "Jeśli algorytm ma złożoność obliczeniową O(n^2) to znaczy że czas jego działania rośnie kwadratowo wraz z rozmiarem danych wyjściowych. Jeśli n wzrośnie dwukrotnie czyli zostanie pomnożone przez 2 to czas działania algorytmu złożonego z O(n^2) wzrośnie czterokrotnie jest to wynik zastosowania potęgi 2 do dwukrotnie większej wartości n."
     },

      {
        question: "Znane są algorytmy dla których problem ich zatrzymania się nie jest rozstrzygnięty ",
        answers: ["Prawda" , "Fałsz"],
        correct: 0,
        explanation: "Istnieją algorytmy dla których problem zatrzymania się nie jest rozstrzygnięty ten problem jest znany jako problem zatrzymanie w skrócie „problem zatrzymania” polega na stwierdzeniu czy dany algorytm zakończy się po zakończonym czasie dla dowolnego wejścia czy też będzie kontynuował nieskończenie długo alan turing udowodnił w 1936 roku że nie istnieje ogólny algorytm który może rozstrzygnąć problem zatrzymania dla wszystkich innych algorytmów."
     },

      {
        question: "Jeśli jeden algorytm ma złożoność O(n^2) a inny ma złożoność O(nlogn) to istnieje taka wartość n że czas ich działania jest dokładnie taki sam ",
        answers: ["Prawda" , "Fałsz"],
        correct: 0,
        explanation: "Istnieje taka wartość n że czas działania obu algorytmu będzie dokładnie taki sam jednakże warto zaznaczyć że dla większości wartości n algorytm o złożoności O(nlogn) będzie działał szybciej niż ten o złożoności O(n^2)."
     },

      {
        question: "Algorytm sortowania przez kopcowania ma złożoność O(n^2) ",
        answers: ["Prawda" , "Fałsz"],
        correct: 1,
        explanation: "Algorytm sortowania przez koksowanie hip sort ma złożoność O(n log n)."
     },

     /* {
        question: "",
        answers: ["Prawda" , "Fałsz"],
        correct: 1,
        explanation: ""
     },
     
     Dodać następne pytania. Skończyłam na 30.*/

];

let currentQuestionIndex = 0;
let correctAnswers = 0;

function loadQuestion() {
    document.getElementById('progress').textContent = `Pytanie ${currentQuestionIndex + 1} z ${questions.length}`;

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
}

function checkAnswer(button, isCorrect) {

    const explanation = document.createElement('p');
    explanation.textContent = questions[currentQuestionIndex].explanation;
    explanation.classList.add('explanation');

    document.getElementById('quiz-container').appendChild(explanation);
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

