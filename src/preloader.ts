import { on } from "@zayne-labs/toolkit-core";

// NOTE - Preloader Removal
// NOTE - Preloader Removal
const removePreloader = () => {
	const preloaderElement = document.querySelector<HTMLElement>("#preloader");

	if (!preloaderElement) return;

	preloaderElement.style.opacity = "0";

	const cleanUpForTransitionEnd = on("transitionend", preloaderElement, () => {
		preloaderElement.remove();
		cleanUpForTransitionEnd();
	});
};

on("load", window, removePreloader);
