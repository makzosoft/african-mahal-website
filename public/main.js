// Function to toggle navbar position style
// for screens above 768px
window.addEventListener("DOMContentLoaded", () => {
	if (window.innerWidth > 768) {
		// Wrap main code inside setTimeout function to
		// ensure that all HTML elements are loaded to avoid
		// getting 'null' when targetting the HTML elements
		setTimeout(() => {
			const toggleNavbarPositionStyle = (navbarElement, scrollHeight) => {
				scrollHeight > 100
					? (navbarElement.style.position = "fixed")
					: (navbarElement.style.position = "static");
			};

			window.addEventListener("scroll", () => {
				const navbarElement = document.querySelector(".navbar");
				const scrollHeight = window.scrollY;

				toggleNavbarPositionStyle(navbarElement, scrollHeight);
			})
		}, 5000);
	}
});
