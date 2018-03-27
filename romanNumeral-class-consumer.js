import RomanNumeralGenerator from './romanNumeral-class.js';

export default class RomanNumeralGeneratorConsumer {
  constructor() {
    this.romanNumeralGeneratorClassInstance = new RomanNumeralGenerator();
    this.romanNumeralGeneratorClassInstance.mockedMethod();
  }
}
