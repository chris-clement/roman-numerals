Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000) # should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row.

## Input vs Output

Integer --> String

1 --> "I"
2 --> "II"

4 --> "IV"
5 --> "V"
6 --> "VI"

9 --> "IX"
10 --> "X"
14 --> "XIV"
50 --> "L"
100 --> "C"
500 --> "D"
1000 --> "M"

## Edge cases

What if input is not an integer? 
Input is negative?

## Plan

A translateIntoModern method might be simpler.

Can then do the reverse of that for translateIntoRoman

## translateIntoModern

1. Do it for all single letters.
2. Then look at 2 letters, where the number it is XI for instance, so adding. Not IX for now. so VI, XI, LX etc.
3. Then look at where I is the first letter of 2 followed by an X or V. e.g. IV, IX.
4. Then repeat same for more than 2 letters.
