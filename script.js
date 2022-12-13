"use strict";

const hambuger = document.getElementById("hambuger");
const nav = document.getElementById("nav");

hambuger.addEventListener("click", () => {
	let visibility = nav.getAttribute("data-visible");

	if (visibility === "false") {
		nav.setAttribute("data-visible", true);
	} else {
		nav.setAttribute("data-visible", false);
	}
});
