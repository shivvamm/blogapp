const req = require("express/lib/request");
var express = require('express');

var func = {
    getLoginPost:(req,res,next) => {
        res.json({"Name":req.body});
    }
}
module.exports =func;