async function loadHTML(url) {
    var xhr = new XMLHttpRequest();

    await xhr.open('GET', url, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            document.getElementById('content').innerHTML = xhr.responseText;
        }
    };

    xhr.send();
}


function changeStyle(elementName) {
    const allLiElements = document.querySelectorAll(".nav li");
    allLiElements.forEach(e => e.classList.remove("active"));
    const liElement = document.getElementById(elementName);
    const mobileLiElement = document.getElementById(elementName + "-mobile");
    mobileLiElement.classList.add("active")
    liElement.classList.add("active");
}

function openMenu() {
    var menu = document.getElementById('nav-mobile');
    var toggleButtonOn = document.getElementById("toggleButtonOn");
    var toggleButtonOff = document.getElementById("toggleButtonOff");

    menu.style.display = 'flex';
    toggleButtonOn.style.display = 'block';
    toggleButtonOff.style.display = 'none';
}

function hideMenu() {
    var menu = document.getElementById('nav-mobile');
    var toggleButtonOn = document.getElementById("toggleButtonOn");
    var toggleButtonOff = document.getElementById("toggleButtonOff");

    menu.style.display = 'none';
    toggleButtonOn.style.display = 'none';
    toggleButtonOff.style.display = 'block';
}


