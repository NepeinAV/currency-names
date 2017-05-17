const data = require('./sources/data');

const currency = {
	names: getCurrencyNames
};

function getCurrencyNames(code, locale = "ru") {

	if(typeof code === 'string') {
		return data[code][locale]
	}

	if(Array.isArray(code)) {
		return code
				.map(c => data[c][locale])
				.join(', ')
	}



}










console.log(getCurrencyNames());








module.exports = currency;