// singal Array find

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
     
     let result = 0;
     for(let i = 0;i<nums.length;i++){
        result =  result ^ nums[i] 
     }
     return result;
};
 nums = [2, 2, 1,3,3,4,4,5,5,1,8];
console.log(singleNumber(nums));