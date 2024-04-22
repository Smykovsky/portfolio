document.addEventListener("DOMContentLoaded", function() {
    const text = document.getElementById("fadeInText").innerText;
    const letters = text.split("");
    document.getElementById("fadeInText").innerHTML = "";

    letters.forEach(function(letter, index) {
        const span = document.createElement("span");
        span.innerText = letter;
        span.style.animationDelay = `${index * 0.1}s`;
        document.getElementById("fadeInText").appendChild(span);
    });
});