const closedButton = document.querySelector('.close-nav');
const nav = document.querySelector('.nav');
const openNav = document.querySelector('.open-nav');

closedButton.addEventListener('click', () => {
	nav.classList.remove('navigation-open');
});

openNav.addEventListener('click', () => {
	nav.classList.add('navigation-open');
});
