/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    const braketMap = {
        ')': '(',
        '}': '{', 
        ']': '['
    }
    for(let char of s){
        if(['(','{','['].includes(char)){
            stack.push(char);
        }else{
        if(stack.pop() !== braketMap[char]) return false;
        }
    }

    return (stack.length === 0);
};