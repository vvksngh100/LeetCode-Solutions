/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanMap = {
        'I': 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let res = 0;
    for(let i = 0; i < s.length; i++){
        let current = romanMap[s[i]];
        let next = romanMap[s[i+1]];
        if(current < next){
            res -= current;
        }else{
            res += current;
        }
    }
    return res;
};