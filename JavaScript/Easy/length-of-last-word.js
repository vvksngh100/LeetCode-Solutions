/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s.length === 0) return 0;
    s = s.trim();
    s = s.split(" ");
    return s[s.length - 1].length;
};