const randomFun = {
	lower: randomLowerCase,
	upper: randomUpperCase,
	number: randomNumber,
	symblo: randomSymbol,
};

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

console.log(randomSymbol());
