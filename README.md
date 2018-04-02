## Purpose

Generate a roman numeral when passed an integer or string containing a number.

## Approach

I decided to create my solution in Javascript as this is what I’m using most right now. This obviously had a few interesting implications. JS doesn’t have interfaces as outlined in the problem, so instead I just made the class and created an instance of it when I wanted to generate the Roman numerals.<br>

I built my solution through a TDD process, using the JS test framework Mocha. It also uses Enzyme and Chai.js for assertions. I started off by essentially just writing pseudocode comments to get my head around how the algorithm to convert numbers would work. I got a little hung up over how to handle cases such as 4 and 9. Whilst I explored options to do this programatically, I found that just declaring these values in my decimal / numeral lookup array was a more elegant and clean solution.<br>

After I successfully implemented the conversion functions, I looked back and refactored it to optimise the method.

## Assumptions

* Node.js will be installed on the system to ensure that Node Package Manager (NPM) can be used to install required packages.
* The terminal can be used to run the scripts from the Available Scripts section.

## Caveats

* Works with numbers between 1 and 3999
* Due to the nature of the task, I didn’t build a frontend, but you can run the tests using “npm run test” from the root directory of the project (you’ll need Node.js installed to do this).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all required dependencies for the project.<br>
This is necessary before running any tests.

### `npm test`

Launches the test runner and runs the full suite of tests located in the /test directory.
