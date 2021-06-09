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

const generatePass = (upper, lower, symbol, number, length) => {
	let generatedPassword = '';
	const typeCount = upper + lower + symbol + number;
	const typeArray = [{ upper }, { lower }, { symbol }, { number }].filter(
		(item) => {
			return Object.values(item)[0];
		}
	);
	if (typeCount === 0) {
		return '';
	}
	for (let i = 0; i < length; i += typeCount) {
		typeArray.forEach((item) => {
			const funcName = Object.keys(item)[0];
			generatedPassword += randomFun[funcName]();
			console.log(generatedPassword);
		});
	}
};

generateEl.addEventListener('click', () => {
	const length = +lengthEl.value;
	const hasUpper = upperEl.checked;
	const hasLower = lowerEl.checked;
	const hasSymbol = symbolEl.checked;
	const hasNumber = numberEl.checked;
	resultEl.innerHTML = generatePass(
		hasUpper,
		hasLower,
		hasSymbol,
		hasNumber,
		length
	);
});
