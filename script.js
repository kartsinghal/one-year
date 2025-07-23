// ========== QUOTE CAROUSEL ==============
const quotes = [
  "From 'stranger' to my favorite notification every day.",
  "Remember that random hello? Changed everything.",
  "Our first call—nervous, awkward, but so much fun!",
  "You laugh at my worst jokes and it's the best.",
  "Here's to a year of late-night chats and early-morning texts.",
  "I can't wait for what's next with you.",
  "Friends? More than that, maybe. 😊",
];
let currentQuote = 0;
const quoteText = document.getElementById('quote-text');

// Show first quote on load
window.onload = function() {
  nextQuote(0);
  showDays();
}

// Show next quote
function nextQuote(n) {
  if (typeof n === "number") currentQuote = n;
  quoteText.innerText = quotes[currentQuote];
  currentQuote = (currentQuote + 1) % quotes.length;
}

// ========== SECRET MESSAGE ==============
let secretShown = false;
function revealMessage() {
  if (!secretShown) {
    document.getElementById('secret-message').innerText = "Happy Anniversary Jasmine! 🎉 You are special to me, and this year has been unforgettable. Here’s to more memories together. 💖";
    secretShown = true;
  }
}

// ========== FRIENDSHIP DAY COUNTER ==============
// Set the date when you first met (YYYY-MM-DD)
const startDate = new Date("2024-07-23");
function showDays() {
  const today = new Date();
  const diffTime = today.getTime() - startDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById("days").innerText = diffDays;
}
// ----- All Nicknames List Section -----
const nicknames = [];
function addNickname(e) {
  e.preventDefault();
  const input = document.getElementById('all-nicknames-input');
  const list = document.getElementById('nickname-list');
  const nickname = input.value.trim();
  if (nickname) {
    nicknames.push(nickname);
    renderNicknames();
    input.value = '';
  }
}
function renderNicknames() {
  const list = document.getElementById('nickname-list');
  list.innerHTML = '';
  nicknames.forEach(nick => {
    const li = document.createElement('li');
    li.textContent = nick;
    list.appendChild(li);
  });
}
