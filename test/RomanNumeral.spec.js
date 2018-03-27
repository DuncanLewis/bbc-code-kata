const expect = require('chai').expect;
import RomanNumeralGenerator from '../RomanNumeral'; // Import our class itself

describe('The RomanNumeralGenerator', () => {
  let romanNumeralGenerator;

  beforeEach(() => {
    romanNumeralGenerator = new RomanNumeralGenerator(8);
  });

  /*
  * First test that an instance of the class itself has been created
  */
  it('instance can be created', () => {
    expect(romanNumeralGenerator.number).to.be.equal(8);
  })

  /*
  * Test a number that only requires addition of strings, e.g. 8
  * should equal VIII
  */
  it('should return a roman numeral when passed an integer', () => {
      let result = romanNumeralGenerator.generate();
      expect(result).to.be.equal("VIII");
  });

  /*
  * Test a number that also requires taking away strings, e.g. 4
  * should equal IV
  */
  it('should return a roman numeral when passed an integer', () => {
      romanNumeralGenerator = new RomanNumeralGenerator(4);
      let result = romanNumeralGenerator.generate();
      expect(result).to.be.equal("IV");
  });

  /*
  * Test a larger number, e.g. 3999
  * should equal MMMCMXCIX
  */
  it('should return a roman numeral when passed an integer', () => {
      romanNumeralGenerator = new RomanNumeralGenerator(3999);
      let result = romanNumeralGenerator.generate();
      expect(result).to.be.equal("MMMCMXCIX");
  });
});
