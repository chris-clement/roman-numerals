const RomanNumeralsConverter = require('../src/romanNumeralsConverter.js')

describe('RomanNumeralsConverter Class', () => {
  describe('#translateIntoRoman', () => {
    it('returns a I for 1', () => {
      const roman = new RomanNumeralsConverter;
      expect(roman.translateIntoRoman(1)).toBe("I");
    });
    it('returns a V for 5', () => {
      const roman = new RomanNumeralsConverter;
      expect(roman.translateIntoRoman(5)).toBe("V");
    });
  });
});