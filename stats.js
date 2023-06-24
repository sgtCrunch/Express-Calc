

const ExpressError = require("./ExpressError");

function stringToNumArray(nums){
    nums = nums.split(",");
    console.log(nums);
    let sum = 0;
    let newNums = [];

    for(let numText of nums){
        let num = parseFloat(numText);

        if(isNaN(num)) throw new ExpressError(`${numText} is not a number`, 400);
        newNums.push(num);
    }

    return newNums;
}


function mean(nums){
    nums = stringToNumArray(nums);
    console.log(nums);
    if(nums.length === 0) throw new ExpressError(`NO numbers provided!`, 400);

    let sum = nums.reduce((a,b) => a + b, 0);
    let avg = (sum / nums.length) || 0;

    return avg;
}

function median(nums){

    nums = stringToNumArray(nums);

    console.log("IT MADE IT HERE");
    if(nums.length === 0) throw new ExpressError(`NO numbers provided!`, 400);


    nums = nums.sort((a,b) => a - b);

    let half = Math.floor(nums.length / 2);
    
    if(nums.length % 2) {
        return nums[half];
    }

    return (nums[half - 1] + nums[half]) / 2.0;
    
}


function mode(nums){

    nums = stringToNumArray(nums);

    if(nums.length === 0) throw new ExpressError(`NO numbers provided!`, 400);
   
    let counts = Object.values(
        nums.reduce((vals, num) => {
            if(!(num in vals)){
                vals[num] = [0, num];
            }
            vals[num][0] += 1;
            return vals;
        }, {}));
    console.log(counts);
    let mode = counts.reduce((max, curr) => curr[0] < max[0] ? max : curr, [0,null])[1];
    console.log(mode);

    return mode;
    
}

module.exports = { mean, median, mode };