"use strict";
/* Created by Nicholas J. Phillips (LagSwitchedVirginity) @ 1/29/2019 */
var express = require("express");
var isPortFree = require("is-port-free");
module.exports = function () {
    var port = 8080;
    var recurse = function () {
        isPortFree(port)
            .then(function () {
            var app = express();
            app.get("/github", function (req, res) {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(req.query));
            });
            app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
            document.getElementsByName("dataServer")[0].checked = true;
            document.getElementById("dataServer-port").innerText = "" + port;
            window.loadedModules.dataServer = true;
            window.hasServer = true;
            window.server = app;
            window.serverPort = port;
        })
            .catch(function () {
            port += 1;
            recurse();
        });
    };
    recurse();
    document.getElementsByName("dataServer")[0].disabled = true;
};
