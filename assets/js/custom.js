"use strict";

const renderMath = (src, dst, displayMode) => {
	dst.insertAdjacentHTML("afterend", katex.renderToString(src.textContent.replace(/^[$\s]+|[$\s]+$/g, ""), {displayMode}));
	dst.remove();
};

window.addEventListener("load", () => {
	document.querySelectorAll("pre > code.language-math").forEach(elem => {
		renderMath(elem, elem.parentElement, true);
	});
	document.querySelectorAll("code").forEach(elem => {
		if (/^\s*\$.+\$\s*$/.test(elem.textContent)) {
			renderMath(elem, elem, false);
		}
	});
});
