/*
* Define constants that we can use to lookup the values
* Must be in reverse order for when we loop, start with largest first
*/
const ROMAN_ARRAY = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
]

export default class RomanNumeralGenerator {
  constructor(number) {
    this.number = +number; // Use the unary operator (+) to convert to int
    this.romanArray = ROMAN_ARRAY;
  }

  /*
  * RomanNumeralGenerator
  *
  * Generates a roman numeral when passed an integer
  *
  * Starts at the largest number and subtracts from the roman numeral array.
  * Continues while the number is greater than the value that is being looked up
  *
  * Example inputs and results:
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

    // Check if isNaN returns true, therefore number is not a number and
    // return error
    if (isNaN(num)) {
      return "Error: Please enter a valid number";
    }

    // Use .map rather than a for loop - equivalent to: for (let i = 0; i <= romanArray.length; i++) {
    this.romanArray.map((decimal , numeral) => {
      let curDecimal = decimal[0];
      let curNumeral = decimal[1];
      // while number is divisible (mod) by current decimal without a remainder greater than itself
      while (num % curDecimal < num) {
        // add the current roman numeral to our result string
        result += curNumeral;
        // remove the current decimal from our number
        num -= curDecimal;
      }
    });
    return result;
  }
}
