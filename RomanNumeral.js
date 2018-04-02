import _ from 'lodash';

/*
* Define constants that we can use to lookup the values
* Must be in reverse order for when we loop, start with largest first
*/
const DECIMALS = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
const NUMERALS = [ "M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I" ];

export default class RomanNumeralGenerator {

  constructor(number) {
    this.number = number;
    //Zip our two arrays (DECIMALS and NUMERALS) together so we can map against them
    this.romanArray = _.zip(DECIMALS, NUMERALS);
  }

  /*
  * RomanNumeralGenerator
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
  generateRoman() {
    let num = this.number;
    let result = '';

    /*for (let i = 0; i <= DECIMALS.length; i++) { */
    this.romanArray.map((decimal , numeral) => { // Use .map rather than a for loop 
      let curDecimal = decimal[0];
      let curNumeral = decimal[1];
      // while number is divisible (mod) by decimals
      while (num % curDecimal < num) {
        // add the current numeral to our result string
        result += curNumeral;
        // remove the current number from our number
        num -= curDecimal;
      }
    });
    return result;
  }
}
