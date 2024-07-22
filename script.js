const questions = [
    {
        question: "1. What is the capital of South Korea?",
        choices: ["Busan", "Seoul", "Jeju", "Inchun"],
        answer: 2
    },
    {
        question: "2. What is the capital of North Korea?",
        choices: ["Pyoenyang", "Kangwondo", "Berlin", "Gamjya"],
        answer: 1
    },
    {
        question: "3.  What is the capital of Morocco?",
        choices: ["Lisbon", "Lome", "Lima", "Rabat"],
        answer: 4
    },
    {
        question: "4.  What is the capital of Spain?",
        choices: ["Barcelona", "Madrid", "Port of Spain", "Wellington"],
        answer: 2
    },
    {
        question: "5.  What is the capital of Vatican?",
        choices: ["Vatican city", "Kingston", "London", "Havana"],
        answer: 1
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    let quizHTML = '';
    questions.forEach((q, index) => {
        quizHTML += `<p>${q.question}</p>`;
        q.choices.forEach((choice, i) => {
            quizHTML += `
                <input type="radio" id="q${index}_a${i}" name="q${index}" value="${i}" required>
                <label for="q${index}_a${i}">${choice}</label><br>
            `;
        });
    });
    quizContainer.innerHTML = quizHTML;
}

function submitQuiz() {
    const username = document.getElementById('username').value.trim();
    if (username === '') {
        alert('Please enter your name.');
        return;
    }

    let score = 0;
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            score += 20;
        }
    });

    alert(`${username}, your score is: ${score}`);
}

document.addEventListener('DOMContentLoaded', loadQuiz);