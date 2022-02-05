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
    it('returns a 5 for V', () => {
      expect(roman.translateIntoModern("V")).toBe(5);
    });
    it('returns a 10 for X', () => {
      expect(roman.translateIntoModern("X")).toBe(10);
    });
    it('returns a 50 for L', () => {
      expect(roman.translateIntoModern("L")).toBe(50);
    });
  });
});