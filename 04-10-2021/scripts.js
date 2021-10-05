import { start } from './screen2'
let userName = document.getElementById('user_name')
let startBttn = document.getElementById('start')

if( userName ) startBttn.addEventListener('click', () => questions(userName.value) )

// לדמא אינטרנט חלש
function questions () {
    setTimeout(() => {
        window.location.href = 'http://127.0.0.1:5500/index2.html?name=' + userName.value;
    }, 1000);
}