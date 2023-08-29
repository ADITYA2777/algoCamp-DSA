// merage Array

let nums1 = [2, 4, 6, 7, 8];

let nums2 = [0, 1, 3, 4];

let C = [];



let merage = function(nums1,m,nums2,n) {
  let i = 0; // i is iterate on nums 1
  let j = 0; // j is iterate on nums 2
  let k = 0; // k is iterate on nums result
}

while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      return (reullt[k] = nums1[i]);
      k++;
      i++;
    } else {
      return (reullt[k] = nums2[j]);
      K++;
      j++;
    }
}
// the  above  while loop and when any one array  exhausts

while (i< m) {
    // nums1 stil some element left 
    reullt[k] = nums1[i]
    k++;
    i++;
}
while (j<n) {
    // nums1 stil some element left 
    reullt[k] = nums2[j]
    k++;
    j++;
}

// because question demands

for (let i = 0; i < reullt.length;i++){
    nums1[i] = reullt[i];
}
console.log(merage(nums1,nums2));