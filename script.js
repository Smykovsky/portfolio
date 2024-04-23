async function loadHTML(url) {
    var xhr = new XMLHttpRequest();

    await xhr.open('GET', url, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            // Wstaw załadowany HTML do elementu o id "content"
            document.getElementById('content').innerHTML = xhr.responseText;
        }
    };

    xhr.send();
}

document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("fadeIn");
    const textValue = "Full Stack Developer";
    let index = 0;
    let intervalId;

function addLetter() {
    if (index < textValue.length) {
        textElement.textContent += textValue[index];
        index++;
    } else {
        clearInterval(intervalId);
        setTimeout(startTyping, 2000);
    }
}

function startTyping() {
    textElement.textContent = '';
    index = 0;
    intervalId = setInterval(addLetter, 100);
}

startTyping();
});