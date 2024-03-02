import { map } from "nanostores";
import { FONTS } from "../constants";

interface TextOptions {
	words: string[];
	speed: number;
	font: string;
}

const defaultOptions = {
	words: [],
	speed: 200,
	font: FONTS.GARAMOND
}

export const text = map<TextOptions>(defaultOptions);

export const setFont = (font: typeof FONTS[keyof typeof FONTS]) => {
	text.setKey('font', font);
}

export const setSpeed = (speed: number) => {
	if (speed < 0) speed = 1;
	text.setKey('speed', speed);
}

export const setWords = (words: string[]) => {
	text.setKey('words', words);
}