/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1 || s.length <= numRows) return s;
    const rows = new Array(numRows).fill('');
    currentIndex = 0;
    nextMove = false;
    for(let char of s){
        rows[currentIndex] += char;
        if(currentIndex === 0 || currentIndex === numRows - 1) nextMove = !nextMove;
        currentIndex += nextMove ? 1 : -1;

    }
    return rows.join('');
};