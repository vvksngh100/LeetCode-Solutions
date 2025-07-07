/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 2) return n;
    let oneStepBefore = 2;
    let twoStepBefore = 1;
    let numberOfWays = 0;
    for(let i = 3; i <= n; i++){
        numberOfWays = oneStepBefore + twoStepBefore;
        twoStepBefore = oneStepBefore;
        oneStepBefore = numberOfWays;
    }
    return numberOfWays;
};