const express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const dal = require('./dal');
var uuid = require('node-uuid');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function(req, res) {
    var episode = req.body;
    episode.id = uuid.v4();
    dal.insert(episode)
        .then((episode) => {
            res.status(201);
            res.send(episode);
        }).catch((err) => {
            res.sendStatus(500); 
    });
});

router.get('/:id', function(req, res) {
    dal.findOne(req.params.id+".json")
        .then((episode) => {
           res.status(200);
           res.send(episode);
        }).catch((err) => {
            res.sendStatus(500);
    });
});

router.get('/', function(req, res) {
    dal.findAll()
        .then((episodes) => {
            res.status(200);
            res.send(episodes);
        }).catch((err) => {
            res.sendStatus(500);
    });
});

module.exports = router;