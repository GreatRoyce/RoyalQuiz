const quizBank = [
    {
        question: 'what?',
        options: ['you', 'me', 'we'],
        answer: ['you']
    }
];


let quiz = document.getElementById('quizQuestion');
quiz.innerHTML = quizBank[0].question;

let quizOptions = document.getElementById('quizOptions');
quizOptions.innerHTML = '';

quizBank[0].options.forEach(option => {
    let alphabets = document.createElement('li');
    alphabets.style.listStyleType = 'lower-alpha'; 
    alphabets.innerText = option;
    quizOptions.appendChild(alphabets);
});

let quizAnswer = document.getElementById('quizAnswer')
quizAnswer.innerHTML = '';

