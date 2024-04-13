// script.js

const tabs = document.querySelectorAll('.tabs li a');
const tabContent = document.querySelectorAll('.tab-pane');


tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        hideAllTabs();
        showTabContent(index);
    });
});

function hideAllTabs() {
    tabContent.forEach((content) => {
        content.style.display = 'none';
    });
}

function showTabContent(index) {
    tabContent[index].style.display = 'block';
}

// Cambiar la imagen cada 3 segundos
const images = document.querySelectorAll('.carousel img');
let index = 0;

function changeImage() {
    images[index].style.transform = 'translateX(-100%)';
    index = (index + 1) % images.length;
    images[index].style.transform = 'translateX(0)';
}

setInterval(changeImage, 2000);
