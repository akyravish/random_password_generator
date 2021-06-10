const resultEl = document.getElementById('result');
const cliboardEl = document.getElementById('clipboard');
const lengthEl = document.getElementById('length');
const upperCaseEl = document.getElementById('uppercase');
const lowerCaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('numbers');
const symbolEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

const randomUppercase = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const randomLowercase = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const randomNumber = () => {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const randomSymbol = () => {
	const symble = '~!@#$%^&*()_+-=`}{|][:;"<>?,./';
	return symble[Math.floor(Math.random() * symble.length)];
};

const randomFun = {
	upper: randomUppercase,
	lower: randomLowercase,
	number: randomNumber,
	symbol: randomSymbol,
};

const generatePassword = (upper, lower, number, symbol, length) => {
	let generatedPassword = '';
	const typeCount = upper + lower + number + symbol;
    const
	console.log(typeCount);
};

generateEl.addEventListener('click', () => {
	const length = +lengthEl.value;
	const hasUpper = upperCaseEl.checked;
	const hasLower = lowerCaseEl.checked;
	const hasNumber = numberEl.checked;
	const hasSymbol = symbolEl.checked;
	resultEl.innerText = generatePassword(
		hasUpper,
		hasLower,
		hasNumber,
		hasSymbol,
		length
	);
});
