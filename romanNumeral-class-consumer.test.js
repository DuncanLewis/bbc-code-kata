import RomanNumeralGeneratorConsumer from './romanNumeral-class-consumer'; // Import our consumer (interface)
import RomanNumeralGenerator from './romanNumeral-class'; // Import our class itself

jest.mock('./romanNumeral-class');

let romanNumeralClassConsumer;
const mockedMethodImpl = jest.fn(); // To mock classes with jest we must use jest.fn();

/*
* mock our class before every test using mockedMethodImpl
*/
beforeAll(() => {
  RomanNumeralGenerator.mockImplementation(() => {
    return {
      mockedMethod: mockedMethodImpl
    }
  })
});

/*
* clear out mocks before every test run
*/
beforeEach(() => {
  RomanNumeralGenerator.mockClear();
  mockedMethodImpl.mockClear();
})

/*
* First test that the class itself can be created
*/
it('The RomanNumeralGeneratorConsumer instance can be created', () => {
  const romanNumeralClassConsumer = new RomanNumeralGeneratorConsumer();
  expect(romanNumeralClassConsumer).toBeTruthy();
})

/*
* Next we will test that the consumer did call class constructor
*/
it('The RomanNumeralGeneratorConsumer instance called the class constructor', () => {
  const romanNumeralClassConsumer = new RomanNumeralGeneratorConsumer();
  expect(RomanNumeralGenerator).toHaveBeenCalled();
});
