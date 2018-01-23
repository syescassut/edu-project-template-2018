const express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var uuid = require('node-uuid');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function (req, res) {
    var id  = uuid.v4();
    console.log(id);
    var file = "data/"+id+'.json';
    var objJson = req.body;
    objJson.id = id;

    fs.writeFile(file, JSON.stringify(objJson), function (err) {
        console.error(err);
    });

    res.send("ID : "+id);
});

router.get('/', function (req, res) {
    var episodes = [];
    fs.readdir("data/", function (err,  files) {
        if (err) throw err;
        files.forEach(function (file) {
            fs.readFile("data/"+file, function (err, data) {
               if(err) throw err;
               episodes.add(JSON.parse(data));
            });
        });
    });
    res.send(JSON.stringify(episodes));
});

module.exports = router;