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
    it('returns a 1 for I', () => {
      expect(roman.translateIntoModern("I")).toBe(1);
    });
  });
});