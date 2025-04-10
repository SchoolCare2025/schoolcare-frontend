import { on } from "@zayne-labs/toolkit-core";

// NOTE - Preloader Removal
const removePreloader = () => {
	const preloaderElement = document.querySelector<HTMLElement>("#preloader");

	if (!preloaderElement) return;

	preloaderElement.remove();
};

on("DOMContentLoaded", document, removePreloader);
