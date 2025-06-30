/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = '';
    let isBreak = false;
    for(let i = 0; i < strs[0].length; i++){
        let traverseIndex = 0;
        
        while(traverseIndex < strs.length - 1){
            if(strs[traverseIndex][i] !== strs[traverseIndex + 1][i]) {
                isBreak = true;
                break;
            }
            traverseIndex++;
        }
        if(isBreak) break;
        res += strs[0][i];
    }
    return res;
};