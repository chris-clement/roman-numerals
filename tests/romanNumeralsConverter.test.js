const RomanNumeralsConverter = require('../src/romanNumeralsConverter.js')

describe('RomanNumeralsConverter Class', () => {
  describe('#translate', () => {
    it('returns a 1 for I', () => {
      const roman = new RomanNumeralsConverter;
      expect(roman.translate('I')).toBe(1);
    });
  });
});