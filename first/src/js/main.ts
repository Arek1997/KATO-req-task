const burgerButton: HTMLButtonElement = document.querySelector('.hamburger')!;

burgerButton.addEventListener('click', () => {
	burgerButton.classList.toggle('is-active');
	document.body.classList.toggle('is-open');
});

window.addEventListener('resize', () => {
	if (matchMedia('(min-width: 992px)').matches) {
		burgerButton.classList.remove('is-active');
		document.body.classList.remove('is-open');
	}
});
