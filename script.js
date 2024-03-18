//veri havuzu açıldı
const words = [
    { word: "BEŞİKTAŞ", hint: "Stadı deniz kenarında" },
    { word: "FENERBAHÇE", hint: "Dünyanın en büyük spor kulübü" },
    { word: "GALATASARAY", hint: "Hakemlerin kolladığı takım" },
    { word: "İSTANBULSPOR", hint: "Şehri büyük kendi küçük kulüp" },
    { word: "BAŞAKŞEHİR", hint: "Bir İstanbul semt kulübü" },
    { word: "KASIMPAŞA", hint: "Stadı var Recep Tayyip Erdoğan adında" },
    { word: "KARAGÜMRÜK", hint: "Şarkısı var yanıyor" },
    { word: "PENDİKSPOR", hint: "GS'nin altyapısı" }
];

//nesneler değişkene alındı
const container = document.getElementById("container");
const hintDisplay = document.getElementById("hint");
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const attemptsDisplay = document.getElementById("attempts");
const resultDisplay = document.getElementById("result");

//sayaçlar ve rastgele seçilen kelimeler için değiken oluşturuldu
let cardsOpened = 0;
let selectedWord = {};

//Oyun yüklendi
initGame();


/*
function initGame() {
    cardsOpened = 0;
    selectedWord = getRandomWord(words);
    hintDisplay.textContent = `Hint: ${selectedWord.hint}`;
    renderWord();
    renderCards();
    attemptsDisplay.textContent = "Takımı bulman için 3 harf seçebilirsin!";
    resultDisplay.textContent = "";
}

function getRandomWord(words) {
    return words[Math.floor(Math.random() * words.length)];
}
*/

//Oyun yükleme gonksiyonu tanımlandı
function initGame() {
    //cardsOpened = 0;
    selectedWord = words[Math.floor(Math.random() * words.length)];
    hintDisplay.textContent = `Hint: ${selectedWord.hint}`;
    renderWord();
    renderCards();
    //attemptsDisplay.textContent = "Takımı bulman için 3 harf seçebilirsin!";
    resultDisplay.textContent = "";
}

//Kartlar oluşturuldu
function renderWord() {
    container.innerHTML = "";
    for (let i = 0; i < selectedWord.word.length; i++) {
        const card = document.createElement("div");
        card.textContent = "?";
        card.className = "card";
        card.dataset.index = i;
        container.appendChild(card);
        card.addEventListener("click", revealLetter);
    }
}

//Harfleri kartlara dağıt
function renderCards() {
    //const shuffledLetters = shuffleArray(selectedWord.word.split(""));
    const shuffledLetters = selectedWord.word.split("");
    shuffledLetters.forEach(letter => {
        const card = document.createElement("div");
        card.textContent = letter;
        card.className = "hidden-card";
        container.appendChild(card);
        
    });
}

//Harfleri karıştırmak istersek
/*
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
    
}
*/

//Kartları açmak için kullanılır
function revealLetter() {
    if (cardsOpened < 3) {
        this.textContent = selectedWord.word[this.dataset.index];
        this.classList.add("revealed");
        cardsOpened++;
        if (cardsOpened === 3) {
            guessButton.disabled = false;
        }
        attemptsDisplay.textContent = `You have ${3 - cardsOpened} attempts to guess the word!`;
    }
}

//Tahmin kontrol ve sonuç gösterme fonksiyonu
guessButton.addEventListener("click", function() {
    const guess = guessInput.value.toUpperCase();
    if (guess === selectedWord.word) {
        resultDisplay.textContent = "Success!";
    } else {
        resultDisplay.textContent = `Wrong. It was "${selectedWord.word}".`;
    }
    guessButton.disabled = true;
    setTimeout(initGame, 2000);
});
