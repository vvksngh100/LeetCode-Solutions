// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
 

// Constraints:

// 1 <= numRows <= 30


// Solution

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let dp = new Array(numRows);
    dp[0] = [1];
    for(let i = 1; i<numRows; i++){
        dp[i] = new Array(i + 1);
        dp[i][0] = 1;
        dp[i][i] = 1;
        for(let j = 1; j < i; j++){
            dp[i][j] = dp[i-1][j-1] + dp[i-1][j];
        }
    }
    return dp;
};