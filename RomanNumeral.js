import _ from 'lodash';

/*
* Define constants that we can use to lookup the values
*/
const DECIMALS = [ 1, 5, 10, 50, 100, 500, 1000 ];
const NUMERALS = [ "I", "V", "X", "L", "C", "D", "M" ];

export default class RomanNumeralGenerator {

  constructor(number) {
    this.number = number;
    this.numerals = NUMERALS;
    this.decimals = DECIMALS;
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
    let num = this.number;
    let result = '';
    // Loop over the array
    for (let i = 0; i <= DECIMALS.length; i++) {
      // while number is divisible (mod) by decimals
      while (num % DECIMALS[i] < num) {
        // add the current numeral to our result string
        result += NUMERALS[i];

        // remove the current number from our number
        num -= DECIMALS[i];
      }
    }
    return result;
  }
}
