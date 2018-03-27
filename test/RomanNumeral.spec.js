const expect = require('chai').expect;
import RomanNumeralGenerator from '../RomanNumeral'; // Import our class itself

describe('The RomanNumeralGeneratorConsumer', () => {
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
  * Next we can begin testing some numbers
  */
  it('should return a roman numeral when passed an integer', () => {
      let result = romanNumeralGenerator.generate();
      expect(result).to.be.equal("VIII");
  });
});
