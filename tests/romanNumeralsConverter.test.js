const RomanNumeralsConverter = require('../src/romanNumeralsConverter.js')

describe('RomanNumeralsConverter Class', () => {
  describe('#translateIntoRoman', () => {
    it('returns a 1 for I', () => {
      const roman = new RomanNumeralsConverter;
      expect(roman.translateIntoRoman(1)).toBe("I");
    });
    it('returns a 5 for V', () => {
      // const roman = new RomanNumeralsConverter;
      // expect(roman.translate('V')).toBe(5);
    });
  });
});