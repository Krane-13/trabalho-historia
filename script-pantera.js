function checkAnswers() {
    const correctAnswers = ["T'Challa", "Wakanda", "Dora Milaje", "Vibranium", "Stan Lee e Jack Kirby", "Erik Killmonger", "Fantastic Four", "Superforça e sentidos aprimorados", "Shuri", "Capitão América: Guerra Civil"];
    let userAnswers = [];
    let form = document.forms["quizForm"];
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Limpa os resultados anteriores

    for (let i = 1; i <= 10; i++) {
        let answer = form["q" + i].value;
        userAnswers.push(answer);
    }

    let score = 0;
    for (let i = 0; i < 10; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
            score++;
            resultsDiv.innerHTML += `<p>Pergunta ${i + 1}: Correto!</p>`;
        } else {
            resultsDiv.innerHTML += `<p>Pergunta ${i + 1}: Incorreto. A resposta certa é "${correctAnswers[i]}".</p>`;
        }
    }

    resultsDiv.innerHTML += `<h2>Você acertou ${score} de 10 perguntas!</h2>`;
}
