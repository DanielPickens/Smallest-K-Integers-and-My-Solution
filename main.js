var algorithms = require('algorithms')

class Solution {
 kSmallest(nums, k) {
    nums.sort((first, second) => first - second);
    return nums.slice(0, k);
    }
}
