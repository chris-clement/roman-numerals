const RomanNumeralsConverter = require('../src/romanNumeralsConverter.js')

describe('RomanNumeralsConverter Class', () => {
  beforeEach(() => {
    roman = new RomanNumeralsConverter;
  });
  describe('#translateIntoRoman', () => {
    it('returns a I for 1', () => {
      expect(roman.translateIntoRoman(1)).toBe("I");
    });
    it('returns a V for 5', () => {
      expect(roman.translateIntoRoman(5)).toBe("V");
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
    })
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
});