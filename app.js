const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('uppercase');
const lowerEl = document.getElementById('lowercase');
const numberEl = document.getElementById('numbers');
const symbleEl = document.getElementById('symbols');
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

const generatePassword = (upper, lower, number, symble, length) => {
	let generatedPassword = '';
	const typeCount = upper + lower + number + symble;
	const typeArray = [{ upper }, { lower }, { number }, { symble }].filter(
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
		});
	}

	const finalPassword = generatedPassword.slice(0, length);
	return finalPassword;
};

generateEl.addEventListener('click', () => {
	const length = +lengthEl.value;
	const hasUpper = upperEl.checked;
	const hasLower = lowerEl.checked;
	const hasNumber = numberEl.checked;
	const hasSymble = symbleEl.checked;
	resultEl.innerHTML = generatePassword(
		hasUpper,
		hasLower,
		hasNumber,
		hasSymble,
		length
	);
});
