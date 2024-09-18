function convertToRoman(num) {
     const romanSymbols = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];
  	let result = '';
    if (num <= 0 || num >= 100000) {
        return 'Input out of range';
    }
    for (const [symbol, value] of romanSymbols) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following lin
console.log(convertToRoman(36));
module.exports = convertToRoman
