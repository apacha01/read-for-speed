import { atom } from "nanostores";

export const showModal = atom(false);

export const closeModal = () => {
	showModal.set(false);
};

export const openModal = () => {
	showModal.set(true);
};