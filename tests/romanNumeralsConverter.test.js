const RomanNumeralsConverter = require('../src/romanNumeralsConverter.js')

describe('RomanNumeralsConverter Class', () => {
  describe('#translateIntoRoman', () => {
    beforeEach(() => {
      roman = new RomanNumeralsConverter;
    });
    it('returns a I for 1', () => {
      expect(roman.translateIntoRoman(1)).toBe("I");
    });
    it('returns a V for 5', () => {
      expect(roman.translateIntoRoman(5)).toBe("V");
    });
  });
});