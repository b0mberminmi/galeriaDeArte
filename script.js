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