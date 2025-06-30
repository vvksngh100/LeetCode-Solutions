/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = {};
    let count = 1;
    res[count] = [];
    for(let i = 0; i < s.length; i++){
        if(res[count].includes(s[i])){
            count++;            
            let duplicateIndex = res[count-1].indexOf(s[i]);
            if((duplicateIndex + 1) < res[count-1].length){
            let slicedStr = res[count-1].slice(duplicateIndex + 1);
            // console.log(count,slicedStr);
            res[count] = [...slicedStr,s[i]];
            } else{
                res[count] = [s[i]];
            }
        } else{
            res[count].push(s[i]);
        }
    }
    let result = 0;
    Object.values(res).map(e => {
        if(result < e.length){
            result = e.length;
        }
    });
    // console.log(res);
    return result;

};