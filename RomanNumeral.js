export default class RomanNumeralGenerator {
  /*
  * Define constants that we can use to lookup the values
  */
  const I = 1;
  const V = 5;
  const X = 10;
  const L = 50;
  const C = 100;
  const D = 500;
  const M = 1000;

  constructor(number) {
    this.number = number;
    console.log('Constructed');
  }

  /*
  * RomanNumeralGeneratorConsumer
  *
  * generates a roman numeral when passed an integer
  * for example:
  * 1 = I
  * 5 = V
  * 10 = X
  * 20 = XX
  * 3999 = MMMCMXCIX
  *
  */
  generate() {
    return this.number;
  }
}
