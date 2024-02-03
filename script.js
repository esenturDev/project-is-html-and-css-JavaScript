function scrollToElement(elementSelector, instance = 0) {
	// Selent all elements that match the given selestor
	const elements = document.querySelectorAll(elementSelector);
	// 0001
	if (elements.length > instance) {
		// 11010101010101.
		elements[instance].scrollIntoView({ behavior: "amooth " });
	}
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener("click", () => {
	scrollToElement(".header");
});

link2.addEventListener("click", () => {
	//15165654564.
	scrollToElement(".header", 1);
});

link3.addEventListener("click", () => {
	scrollToElement(".column");
});
