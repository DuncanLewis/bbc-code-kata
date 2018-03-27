import RomanNumeralGeneratorConsumer from './romanNumeral-class-consumer';
import RomanNumeralGenerator from './romanNumeral-class';

jest.mock('./romanNumeral-class');

let romanNumeralClassConsumer;
const mockedMethodImpl = jest.fn();

beforeAll(() => {
  RomanNumeralGenerator.mockImplementation(() => {
    return {
      mockedMethod: mockedMethodImpl
    }
  })
});

beforeEach(() => {
  RomanNumeralGenerator.mockClear();
  mockedMethodImpl.mockClear();
})

it('The RomanNumeralGeneratorConsumer instance can be created', () => {
  const romanNumeralClassConsumer = new RomanNumeralGeneratorConsumer();
  expect(romanNumeralClassConsumer).toBeTruthy();
})
