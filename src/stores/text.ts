import { map } from "nanostores";
import { FONTS } from "../constants";

interface TextOptions {
	words: string[];
	wpm: number;
	font: string;
}

const defaultOptions = {
	words: [],
	wpm: 200,
	font: FONTS.GARAMOND
}

export const text = map<TextOptions>(defaultOptions);

export const setFont = (font: typeof FONTS[keyof typeof FONTS]) => {
	text.setKey('font', font);
}

export const setWPM = (wpm: number) => {
	if (wpm < 0) wpm = 1;
	text.setKey('wpm', wpm);
}

export const setWords = (words: string[]) => {
	text.setKey('words', words);
}