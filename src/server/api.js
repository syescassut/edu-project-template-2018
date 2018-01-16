const express = require('express')
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function (req, res) {
    res.send("J'ai reçu le JSON !");
    console.log(req.body);

});

router.get('/', function (req, res) {
    res.send('Hello World!')
});

module.exports = router;