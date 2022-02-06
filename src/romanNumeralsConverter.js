class RomanNumeralsConverter{
  constructor() {
    this.score = 0;
    this.numerals = [
      {value: 1000, numeral: "M"},
      {value: 900, numeral: "CM"},
      {value: 500, numeral: "D"},
      {value: 400, numeral: "CD"},
      {value: 100, numeral: "C"},
      {value: 90, numeral: "XC"},
      {value: 50, numeral: "L"},
      {value: 40, numeral: "XL"},
      {value: 10, numeral: "X"},
      {value: 9, numeral: "IX"},
      {value: 5, numeral: "V"},
      {value: 4, numeral: "IV"}, 
      {value: 1, numeral: "I"}
    ];
    this.specialCase = [
      {value: 900, numeral: "CM"},
      {value: 400, numeral: "CD"},
      {value: 90, numeral: "XC"},
      {value: 40, numeral: "XL"},
      {value: 9, numeral: "IX"},
      {value: 4, numeral: "IV"}
    ]
  };
  translateIntoRoman(number) {
    var result = "";
    this.numerals.forEach((translation) => {
      while(number >= translation['value']) {
        number -= translation['value'];
        result += translation['numeral'];
      };
    });
    return result;
  };

  translateIntoModern2(romanLetters) {
    let result = 0;
    for(let i = 0; i<romanLetters.length; i++) {
      if (this.specialCase.find(element => element.numeral == romanLetters[i] + romanLetters[i + 1]) != null) {
        result += 4;
        i ++;
      }
      else {
        this.numerals.forEach((translation) => {
          if(translation['numeral'] == romanLetters[i]) {
            result += translation['value'];
          };
        });
      };
    };
    return result;
  };
  
  translateIntoModern(romanLetters) {
    if(this.checkForIX(romanLetters)) {
      var romanLetters = romanLetters.replace("IX", "");
      this.score += 9;
    } else if(this.checkForIV(romanLetters)) {
      var romanLetters = romanLetters.replace("IV", "");
      this.score += 4;
    };
    if(this.checkForCM(romanLetters)) {
      romanLetters = romanLetters.replace("CM", "");
      this.score += 900;
    };
    if(this.checkForXC(romanLetters)) {
      romanLetters = romanLetters.replace("XC", "");
      this.score += 90;
    };
    var romanLettersArray = romanLetters.split('')
    romanLettersArray.forEach((romanLetter) => {
      this.translateRomanLetterIntoModern(romanLetter);
    });
    return this.score;
  };
  translateRomanLetterIntoModern(single_letter) {
    if(single_letter == "I") {
      this.score += 1;
    } else if(single_letter == "V") {
      this.score += 5;
    } else if(single_letter == "X") {
      this.score += 10; 
    } else if(single_letter == "L") {
      this.score += 50; 
    } else if(single_letter == "C") {
      this.score += 100;
    } else if(single_letter == "D") {
      this.score += 500;
    } else if(single_letter == "M") {
      this.score += 1000;
    };
    return this.score;
  };
  checkForIX(romanLetters) {
    return romanLetters.slice(-2) == "IX";
  };
  checkForIV(romanLetters) {
    return romanLetters.slice(-2) == "IV";
  };
  checkForCM(romanLetters) {
    return romanLetters.includes("CM");
  };
  checkForXC(romanLetters) {
    return romanLetters.includes("XC");
  };
};



module.exports = RomanNumeralsConverter;

