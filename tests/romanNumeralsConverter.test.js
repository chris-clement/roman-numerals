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
    it('returns a IX for 9', () => {
      expect(roman.translateIntoRoman(9)).toBe("IX");
    });
    it('returns a X for 10', () => {
      expect(roman.translateIntoRoman(10)).toBe("X");
    });
    it('returns a XC for 90', () => {
      expect(roman.translateIntoRoman(90)).toBe("XC");
    });
    it('returns a CM for 900', () => {
      expect(roman.translateIntoRoman(900)).toBe("CM");
    });
    it('returns a MCMXC for 1990', () => {
      expect(roman.translateIntoRoman(1990)).toBe("MCMXC");
    });
    it('returns a MDCLXVI for 1666', () => {
      expect(roman.translateIntoRoman(1666)).toBe("MDCLXVI");
    });
  });
  describe('#translateIntoModern', () => {
    it('returns a 1 for I', () => {
      expect(roman.translateIntoModern('I')).toBe(1);
    });
    it('returns a 2 for II', () => {
      expect(roman.translateIntoModern('II')).toBe(2);
    });
    it('returns a 3 for III', () => {
      expect(roman.translateIntoModern('III')).toBe(3);
    });
    it('returns a 4 for IV', () => {
      expect(roman.translateIntoModern('IV')).toBe(4);
    });
    it('returns a 2000 for MM', () => {
      expect(roman.translateIntoModern('MM')).toBe(2000);
    });
    it('returns a 89 for LXXXIX', () => {
      expect(roman.translateIntoModern('LXXXIX')).toBe(89);
    });
    it('returns a 984 for CMLXXXIV', () => {
      expect(roman.translateIntoModern('CMLXXXIV')).toBe(984);
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