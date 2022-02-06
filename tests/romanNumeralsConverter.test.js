const RomanNumeralsConverter = require('../src/romanNumeralsConverter.js')

describe('RomanNumeralsConverter Class', () => {
  beforeEach(() => {
    roman = new RomanNumeralsConverter;
  });
  describe('#translateIntoRoman', () => {
    it('returns a I for 1', () => {
      expect(roman.translateIntoRoman(1)).toBe("I");
    });
    it('returns a II for 2', () => {
      expect(roman.translateIntoRoman(2)).toBe("II");
    });
    it('returns a III for 3', () => {
      expect(roman.translateIntoRoman(3)).toBe("III");
    });
    it('returns a IV for 4', () => {
      expect(roman.translateIntoRoman(4)).toBe("IV");
    });
    it('returns a V for 5', () => {
      expect(roman.translateIntoRoman(5)).toBe("V");
    });
    it('returns a VIII for 8', () => {
      expect(roman.translateIntoRoman(8)).toBe("VIII");
    });
  });
  describe('#translateIntoModern', () => {
    describe('Two letters where 2nd letter adds to the number', () => {
      it('returns a 2 for II', () => {
        expect(roman.translateIntoModern("II")).toBe(2);
      });
      it('returns a 6 for VI', () => {
        expect(roman.translateIntoModern("VI")).toBe(6);
      });
      it('returns a 150 for CL', () => {
        expect(roman.translateIntoModern("CL")).toBe(150);
      });
    });
    describe('Two letters where 1st letter subtracts the value of the number', () => {
      it('returns a 4 for IV', () => {
        expect(roman.translateIntoModern("IV")).toBe(4);
      });
      it('returns a 9 for IX', () => {
        expect(roman.translateIntoModern("IX")).toBe(9);
      });
    });
    describe("More than 2 letters where there is an 'I' before one of the letters", () => {
      it('returns a 14 for XIV', () => {
        expect(roman.translateIntoModern("XIV")).toBe(14);
      });
      it('returns a 89 for LXXXIX', () => {
        expect(roman.translateIntoModern("LXXXIX")).toBe(89);
      });
      it('returns a 984 for CMLXXXIV', () => {
        expect(roman.translateIntoModern("CMLXXXIV")).toBe(984);
      });
      it('returns a 1889 for MDCCCLXXXIX', () => {
        expect(roman.translateIntoModern("MDCCCLXXXIX")).toBe(1889);
      });
      it('returns a 1989 for MCMLXXXIX', () => {
        expect(roman.translateIntoModern("MCMLXXXIX")).toBe(1989);
      });
      it('returns a 1990 for MCMXC', () => {
        expect(roman.translateIntoModern("MCMXC")).toBe(1990);
      });
      it('returns a 1666 for MDCLXVI', () => {
        expect(roman.translateIntoModern("MDCLXVI")).toBe(1666);
      });
    });
  });
  describe('#translateRomanLetterIntoModern', () => {
    it('returns a 1 for I', () => {
      expect(roman.translateRomanLetterIntoModern("I")).toBe(1);
    });
    it('returns a 5 for V', () => {
      expect(roman.translateRomanLetterIntoModern("V")).toBe(5);
    });
    it('returns a 10 for X', () => {
      expect(roman.translateRomanLetterIntoModern("X")).toBe(10);
    });
    it('returns a 50 for L', () => {
      expect(roman.translateRomanLetterIntoModern("L")).toBe(50);
    });
    it('returns a 100 for C', () => {
      expect(roman.translateRomanLetterIntoModern("C")).toBe(100);
    });
    it('returns a 500 for D', () => {
      expect(roman.translateRomanLetterIntoModern("D")).toBe(500);
    });
    it('returns a 1000 for M', () => {
      expect(roman.translateRomanLetterIntoModern("M")).toBe(1000);
    });
  });
  describe('#checkForIV', () => {
    it('returns true if found in string', () => {
      expect(roman.checkForIV('XIV')).toBe(true);
    });
  });
  describe('#checkForIX', () => {
    it('returns true if found in string', () => {
      expect(roman.checkForIX('XIX')).toBe(true);
    });
  });
  describe('#checkForCM', () => {
    it('returns true if found in string', () => {
      expect(roman.checkForCM('CMLXXXIV')).toBe(true);
    });
  });
  describe('#checkForXC', () => {
    it('returns true if found in string', () => {
      expect(roman.checkForXC('DXC')).toBe(true);
    });
  });
});