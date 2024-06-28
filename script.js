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

function setActiveNavLink(url) {
    const navLinks = document.querySelectorAll('.nav li');
    navLinks.forEach(link => link.classList.remove('active'));

    // Ustawienie aktywnej klasy dla odpowiedniego linku na podstawie URL
    const activeLink = document.getElementById(getLinkIdFromUrl(url));
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function changeStyle(elementName) {
    const allLiElements = document.querySelectorAll(".nav li");
    allLiElements.forEach(e => e.classList.remove("active"));
    const liElement = document.getElementById(elementName);
    liElement.classList.add("active");

}


