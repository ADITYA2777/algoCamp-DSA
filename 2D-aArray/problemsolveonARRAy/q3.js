

 function majorityElement(nums) {
     let currPossMajority = -1;
     let count = 0;

     for (let i = 0; i < nums.length;i++){
         if (count == 0) {
            currPossMajority = nums[i]
         }
         if (currPossMajority == nums[i]) {
             count++;
         }
         else {
             count--;
        }
     }
     return currPossMajority;
};

nums = [3, 2, 3,];

console.log(majorityElement(nums));
