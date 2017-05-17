var currency = require('../index');
var assert = require('chai').assert;

suite('currency:', function () {

		var singleString = "XCD";
		var singleStringRu = 'Восточно-карибский доллар';
		var singleStringEn = 'East Caribbean Dollar';

		var emptryArray = [];
		var emptryArrayRuString = '';
		var emptryArrayEnString = '';

		var singleArray = ["XCD"];
		var singleArrayRuString = 'Восточно-карибский доллар';
		var singleArrayEnString = 'East Caribbean Dollar';

		var multipleArray = ["USD", "USN", "USS"];
		var multipleArrayRuString = 'Доллар США, Доллар следующего дня, Доллар того же дня';
		var multipleArrayEnString = 'US Dollar, US Dollar (Next day), US Dollar (Same day)';


	test('`currency` is an object', function () {
		assert.isObject(currency);
	});

	test('`currency.names` is a function', function () {
		assert.isFunction(currency.names);
	});


	suite('currency.names with single string', function() {

		test(`currency.names(${singleString}, "ru") returns ${singleStringRu}`, function () {
			assert.equal(currency.names(singleString, "ru"), `${singleStringRu}`);
		});

		test(`currency.names(${singleString}, "en") returns ${singleStringEn}`, function () {
			assert.equal(currency.names(singleString, "en"), `${singleStringEn}`);
		});

		test(`(без локали "ru") currency.names(${singleString}) returns ${singleStringRu}`, function () {
			assert.equal(currency.names(singleString), `${singleStringRu}`);
		});

		test(`(без локали "en") currency.names(${singleString}) returns ${singleStringRu}`, function () {
			assert.equal(currency.names(singleString), `${singleStringRu}`);
		});

	});

	suite('currency.names with single array items', function() {

		test(`currency.names(${singleArray}, "ru") returns ${singleArrayRuString}`, function () {
			assert.equal(currency.names(singleArray, "ru"), `${singleArrayRuString}`);
		});

		test(`currency.names(${singleArray}, "en") returns ${singleArrayEnString}`, function () {
			assert.equal(currency.names(singleArray, "en"), `${singleArrayEnString}`);
		});

		test(`(без локали "ru") currency.names(${singleArray}) returns ${singleArrayRuString}`, function () {
			assert.equal(currency.names(singleArray), `${singleArrayRuString}`);
		});

		test(`(без локали "en") currency.names(${singleArray}) returns ${singleArrayRuString}`, function () {
			assert.equal(currency.names(singleArray), `${singleArrayRuString}`);
		});

	});

	suite('currency.names with multiple array items', function() {

		test(`currency.names(${multipleArray}, "ru") returns ${multipleArrayRuString}`, function () {
			assert.equal(currency.names(multipleArray, "ru"), `${multipleArrayRuString}`);
		});

		test(`currency.names(${multipleArray}, "en") returns ${multipleArrayEnString}`, function () {
			assert.equal(currency.names(multipleArray, "en"), `${multipleArrayEnString}`);
		});

		test(`(без локали "ru") currency.names(${multipleArray}) returns ${multipleArrayRuString}`, function () {
			assert.equal(currency.names(multipleArray), `${multipleArrayRuString}`);
		});

		test(`(без локали "en") currency.names(${multipleArray}) returns ${multipleArrayRuString}`, function () {
			assert.equal(currency.names(multipleArray), `${multipleArrayRuString}`);
		});

	});

	suite('currency.names with empty array', function() {

		test(`currency.names([], "ru") returns ''`, function () {
			assert.equal(currency.names(emptryArray, "ru"), `${emptryArrayRuString}`);
		});

		test(`(без локали "ru") currency.names([]) returns ''`, function () {
			assert.equal(currency.names(emptryArray), `${emptryArrayRuString}`);
		});

		test(`(без локали "en") currency.names([]) returns ''`, function () {
			assert.equal(currency.names(emptryArray), `${emptryArrayEnString}`);
		});

	});
});

