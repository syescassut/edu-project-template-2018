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
            res.sendStatus(404);
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

router.delete('/:id', function(req, res) {
    dal.delete(req.params.id+".json")
        .then((id) => {
            res.sendStatus(204);    
        }).catch((err) => {
            res.status(404);
            res.send(err.message);          
    });
});

router.put('/:id', function(req, res) {
    var episode = req.body;
    episode.id = req.params.id;
    dal.update(req.params.id+".json", episode)
        .then((episode) => {
            res.status(200);
            res.send(episode);
        }).catch((err) => {
            res.status(500);
            res.send(err.message);          
    });
});

module.exports = router;