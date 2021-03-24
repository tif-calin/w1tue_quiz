// import functions and grab DOM elements
import { isYes } from './utils.js';

const btnQuiz = document.getElementById('button-quiz');
const divResults = document.getElementById('div-results');

// initialize state

// set event listeners to update state and DOM
btnQuiz.addEventListener('click', () => {
    alert('Welcome!');
    divResults.style.visibility = 'hidden';

    // confirm they wanna take the quiz
    const confirmQuiz = confirm('Do you wanna take the quiz?');
    if (!confirmQuiz) return alert('Wow I see how it is');

    // get name
    const name = prompt('What\'s your name, friend?');

    // do quiz
    const ans1 = prompt('Could plants grow into trees without relying on mycorrhizal fungi?');
    alert('Well I\'ve never seen it!');
    const ans2 = prompt('Will the Wood Wide Web put Silicon Valley out of work?');
    alert('We can only hope');
    const ans3 = prompt('Should you expose bare soil to the sun?');
    alert('No! Please cover your soil!');

    //results!
    const score = !isYes(ans1) + !isYes(ans2) + !isYes(ans3);
    const grade = (score / 3).toFixed(2) + '%';
    divResults.style.visibility = 'visible';
    divResults.textContent = `${name}, you got ${score} out of 3 (${grade}) correct!`;
});