# Roman Numerals Converter

### What this is?

This is a translator of Roman Numerals into Modern day numbers and a translator of Modern day numbers into Roman Numerals.

### Tech stack used

- JS
- Jest for testing (100% Coverage)

### How to run

```
git clone https://github.com/chris-clement/roman-numerals.git
cd roman-numerals
npm install
node
const roman = require('./src/romanNumeralsConverter.js')
```

### How to use

create instance of the class

```
translator = new roman
RomanNumeralsConverter {
  score: 0,
  numerals: [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ],
  specialCase: [
    { value: 900, numeral: 'CM' },
    { value: 400, numeral: 'CD' },
    { value: 90, numeral: 'XC' },
    { value: 40, numeral: 'XL' },
    { value: 9, numeral: 'IX' },
    { value: 4, numeral: 'IV' }
  ]
}
```
To convert a Roman Numeral into Modern day numbers use the method translateIntoModern and input the Roman Numerals as a string in caps.

```
translator.translateIntoModern('MMXCVII')
2097
```
To convert a Modern day number into Roman Numerals use the method translateIntoRoman and input the number as an integer.

```
translator.translateIntoRoman(2097)
'MMXCVII'
```

### Task inspired by Codewars Kata

https://www.codewars.com/kata/51b66044bce5799a7f000003