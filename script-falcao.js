function checkAnswers() {
    const correctAnswers = ["Steve Rogers", "Asas mecânicas", "Falcão e o Soldado Invernal", "A vibranium", "Flag-Smashers", "Escudo das Asas", "Representa sua conexão com a natureza e a liberdade", "A pressão para ser tão perfeito quanto Steve Rogers", "O soldado", "Explora as consequências do Blip e a busca por um novo mundo"];
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
