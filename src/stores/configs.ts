import { map } from "nanostores";
import { FONTS } from "../constants";

interface TextConfigs {
	words: string[];
	wpm: number;
	font: string;
	play: boolean;
}

const defaultConfigs = {
	words: [],
	wpm: 300,
	font: FONTS.GARAMOND,
	play: false
}

export const text = map<TextConfigs>(defaultConfigs);

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

export const play = () => {
	text.setKey('play', true);
}

export const pause = () => {
	text.setKey('play', false);
}