import { map } from "nanostores";
import { FONTS } from "../constants";

interface TextConfigs {
	words: string[];
	wpm: number;
	font: string;
	play: boolean;
	stopPlaying: number;
	index: number;
};

const defaultConfigs = {
	words: [],
	wpm: 300,
	font: FONTS.GARAMOND,
	play: false,
	stopPlaying: -1,
	index: 0,
};

export const text = map<TextConfigs>(defaultConfigs);

export const setFont = (font: typeof FONTS[keyof typeof FONTS]) => {
	text.setKey('font', font);
};

export const setWPM = (wpm: number) => {
	if (wpm < 0) wpm = 1;
	text.setKey('wpm', wpm);
};

export const setWords = (words: string[]) => {
	text.setKey('words', words);
};

export const play = () => {
	text.setKey('play', true);
};

export const pause = () => {
	text.setKey('play', false);
};

export const togglePlay = () => {
	text.setKey('play', !text.get().play);
};

export const setStopPlaying = (stopPlaying: number) => {
	text.setKey('stopPlaying', stopPlaying);
};

export const setIndex = (i: number) => {
	if (i >= text.get().words.length) i = text.get().words.length - 1;
	if (i < 0) i = 0;

	text.setKey('index', i);
};

text.subscribe(v => {
	console.log(v);
})