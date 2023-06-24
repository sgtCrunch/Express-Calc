

const { describe } = require('node:test');
const {mean, median, mode} = require('./stats');
const EpxressError = require('./ExpressError');


describe("Testing Statistic Functions", function(){

    let nums = "1,2,3,4,5";

    test("Check MEAN function", function(){
        expect(mean(nums)).toEqual(3);
        expect(mean.bind(this, "")).toThrow();
    });

    test("Check MEDIAN function", function(){
        expect(median(nums)).toEqual(3);
        expect(median.bind(this, "")).toThrow();

    });

    test("Check MODE function", function(){
        console.log(nums + "HEREERE");
        expect(mode(nums)).toEqual(5);
        expect(mode.bind(this, "")).toThrow();
    });

});