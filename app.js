const express = require('express');
const ExpressError = require('./ExpressError');
const {mean, median, mode} = require('./stats')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/mean", function(req, res, next){
    
    try {

        let avg = mean(req.query.nums);

        return res.json({"operation" : "mean",
                        "value" : avg});
    }
    catch (err){
        return next(err);
    }

});

app.get("/median", function(req, res, next){

    try {

        let middle = median(req.query.nums);

        return res.json({"operation" : "median",
                        "value" : middle });
    }
    catch (err){
        return next(err);
    }

});

app.get("/mode", function(req, res, next){
    try {

        let popular = mode(req.query.nums);

        return res.json({"operation" : "median",
                        "value" : popular });
    }
    catch (err){
        return next(err);
    }
});

app.use(function(req, res, next) {
    const notFoundError = new ExpressError("Not Found", 404);
    return next(notFoundError);
});

app.use(function(err, req, res, next){

    let status = err.status || 500;
    let message = err.message;
    res.status(status).json({
        error: {message, status}
    });

});

app.listen(3000, function(){
    console.log("App on port 3000");
});