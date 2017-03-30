# Roman Numeral Calculator

## Overview

This project will translate numbers into roman numerals.

## Specifications

* The program should not run if the input contains any letters
  - Example Input: 500 hello
  - Example Output: please only enter numbers into the translator
* The program should not run if the input contains any special characters
  - Example Input: hello B$@%h!
  - Example Output: please only enter numbers into the translator
* The program should not run if the input is not a whole numbers
  - Example Input: 17.9
  - Example Output: Please only enter whole numbers
* The program should not run if the input is greater than 3999
  - Example Input: 4000
  - Example Output:apologies, please enter numbers under 3999
* The program will convert the number 1 to the symbol 'I'
  - Example Input: 1
  - Example Output: 'I'
* The program will convert the number 5 to the symbol 'V'
  - Example Input: 5
  - Example Output: 'V'
* The program will convert the number 10 to the symbol 'X'
  - Example Input: 10
  - Example Output: 'X'
* The program will convert the number 50 to the symbol 'L'
  - Example Input: 50
  - Example Output: 'L'
* The program will convert the number 100 to the symbol 'C'
  - Example Input: 100
  - Example Output: 'C'
* The program will convert the number 500 to the symbol 'D'
  - Example Input: 500
  - Example Output: 'D'
* The program will convert the number 1000 to the symbol 'M'
  - Example Input: 1000
  - Example Output: 'M'
* The program separate the parts of numbers by their order of magnitude (1s, 10s, 100s, 1000s) and translate those individually
  - Example Input: 3556
  - Example Output: 'MMMDLVI'
* The program will not output more than three of any given symbol in a row
* If an input sequence would result in three symbols in a row, instead use the next higher valued symbol and prefix the lower valued symbol to indicate subtraction
  - Example Input: 90
  - Example Output: 'XC'

## Installation

Clone the repository to the folder of your choice and open the index.html file in the browser of your choosing. We like choices.

## Usage

Input a number and click 'convert'.

## Contributors

Kai Leahy and Kat Gifford

## License

Licensed MIT
