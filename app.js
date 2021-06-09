const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('uppercase');
const lowerEl = document.getElementById('lowercase');
const symbolEl = document.getElementById('symbols');
const numberEl = document.getElementById('numbers');
const generateEl = document.getElementById('generate');

const randomLowerCase = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
};

const randomUpperCase = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
};

const randomNumber = () => {
	return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
};

const randomSymbol = () => {
	const symbols = '~!@#$%^&*()_+-={}|:"<>?[];,./"';
	return symbols[Math.floor(Math.random() * symbols.length)];
};

const randomFun = {
	lower: randomLowerCase,
	upper: randomUpperCase,
	number: randomNumber,
	symble: randomSymbol,
};

const generatePass = (upper, lower, symbol, number, length) => {};

generateEl.addEventListener('click', () => {
	const length = +lengthEl.value;
	const upper = upperEl.checked;
	const lower = lowerEl.checked;
	const symbol = symbolEl.checked;
	const number = numberEl.checked;
	generatePass(upper, lower, symbol, number, length);
});
