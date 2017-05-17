## Description
I made this package for working with countries data by [mledoze](https://github.com/mledoze/countries). They are using arrays with `ISO 4217` currency codes, so, using my package you can convert them to string with their names. Names available on Russian and English. Codes and named taken from [Wikipedia](https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B4%D1%8B_%D0%B8_%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%BE%D1%80%D1%8B_%D0%B2%D0%B0%D0%BB%D1%8E%D1%82).

## Documentation
```js
var currency = require('currency-codes-ru-en-names');

currency.names(code<String|Array>, [locale<String>]);
// code can be single string or flat array of 3-letter codes
// if locale not specified, then "ru" will be used

// with single string
currency.names("XCD", "ru");
// "Восточно-карибский доллар"

// with single string
currency.names("XCD", "en");
// "East Caribbean Dollar"

// with an array (single item)
currency.names(["XCD"], "ru");
// "Восточно-карибский доллар"

// with an array (multiple items)
currency.names(["USD", "USN", "USS"], "ru");
// "Доллар США, Доллар следующего дня, Доллар того же дня"

// with an array (multiple items)
currency.names(["USD", "USN", "USS"], "en");
// "US Dollar, US Dollar (Next day), US Dollar (Same day)"

```

## Tests
`npm run test`

# Todo
- [ ] Add countries (their `ISO 639-3` codes) using this currency to every code
- [ ] Add custom delimeter for output strings
- [ ] Support for input data as delimited string with choise for delimeter
