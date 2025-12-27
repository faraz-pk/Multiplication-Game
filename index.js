let inputEl = document.querySelector('input');
let scoreEl = document.querySelector('span');
let questEl = document.querySelector('h2');
let formEl = document.querySelector('form');

let score = JSON.parse(localStorage.getItem('score'));

if(!score) {
    score = 0;
}

let num1 = Math.floor(Math.random() * 15);
let num2 = Math.floor(Math.random() * 15);

questEl.innerText = `What is ${num1} multiply by ${num2}?`;
let correctAns = num1 * num2;

scoreEl.innerText = `Score: ${score}`;

formEl.addEventListener('submit', () => {
    let userAns = +inputEl.value; 
    if (userAns === correctAns) {
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }
    if(score < 0){
        scoreEl.classList.add('red-color');
    }
});

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}