// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.
//
// You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
//
// The string has a length greater or equal to one and contains only letters from ato z.

// For example:
// printer_error("aaabbbbhaijjjm") ==> "0/14"


 printer_error("aaaxbbbbyyhwawiwjjjwwm") //==> "8/22"
function printer_error (str) {
const errors = str.replace(/[a-m]/g, "").length
console.log(errors, str.length);
}
