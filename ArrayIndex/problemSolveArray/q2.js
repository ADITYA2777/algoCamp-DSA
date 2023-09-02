// find out max consective  nums

let num = [1, 1, 0, 1, 1, 1, ];

function maxConsectiveNums(nums) {
    let finalAns = 0;
    let consectiveOnes = 0;
    for (let i = 0; i < num.length;i++){
        if (nums[i]==1) {
            consectiveOnes++;

        } else {
            finalAns = Math.max(finalAns, consectiveOnes)
            consectiveOnes=0 //restaring count 
        }
    }
        return Math.max(finalAns, consectiveOnes);

}
console.log(maxConsectiveNums(num));