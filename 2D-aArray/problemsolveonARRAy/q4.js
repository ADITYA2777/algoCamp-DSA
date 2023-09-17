

function intersection(num1,num2) {
    let freqnums1 = {};
    for (let i = 0; i < num1.length;i++){
        let element = num1[i];
        if (freqnums1[element]) {
            freqnums1[element]++;
        } else {
            freqnums1[element] = 1;
        }
    }
    let freqnums2 = {};
    for (let i = 0; i < num2.length; i++){
        
        let element = num2[i];
        if (freqnums1[element]) {

            freqnums2[element] = 1;
        }
    }
    return Object.keys(freqnums2)
}



(num1 = [4, 9, 5]), (num2 = [9, 4, 9, 8, 4]);
 console.log(intersection(num1,num2));