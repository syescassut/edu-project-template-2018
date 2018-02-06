const dal = require('../src/server/dal');
var fs = require('fs');
var uuid = require('node-uuid');
const pathData = "data";
var jasmine = require('jasmine');

function generateEpisodeJSON() {
    var id = uuid.v4();
    var episode = '{"name":"testName", "code":"S01E01", "score":1}';
    var episodeJSON = JSON.parse(episode);
    episodeJSON.id = id;
    return episodeJSON;
}

describe('Insert episode tests', function () {
    var episodeJSON;
    beforeAll(function() {
        episodeJSON = generateEpisodeJSON();
    });
    it("Insert episode", function () {
        dal.insert(episodeJSON);
        var path = `${pathData}/${episodeJSON.id}.json`;
        fs.readFile(path, 'utf8', function (err, episodeGet) {
            if (err) {
                console.log(err);
            }
            expect(episodeJSON).toEqual(JSON.parse(episodeGet));
        });
    });
    afterAll(function() {
        var path = `${pathData}/${episodeJSON.id}.json`;
        fs.unlink(path);
    });
});

describe('Find one episode tests', function () {
    var episodeJSON;
    beforeAll(function() {
        episodeJSON = generateEpisodeJSON()
        dal.insert(episodeJSON);
    });
    it("Find one episode", function () {
        dal.findOne(episodeJSON.id + ".json")
            .then((episodeGet) => {
                expect(episodeJSON).toEqual(episodeGet);
            }).catch((err) => {
                console.log(err);
        });
    });
    afterAll(function() {
        var path = `${pathData}/${episodeJSON.id}.json`;
        fs.unlink(path);
    });
});

describe('Find all episodes tests', function () {
    var episodeJSON1;
    var episodeJSON2;
    beforeAll(function() {
        episodeJSON1 = generateEpisodeJSON();
        dal.insert(episodeJSON1);
        episodeJSON2 = generateEpisodeJSON();
        dal.insert(episodeJSON2);
    });
    it("Find all episodes", function () {
        dal.findAll()
            .then((episodes) => {
                expect(episodes).toContain(episodeJSON1);
                expect(episodes).toContain(episodeJSON2);
            }).catch((err) => {
                console.log(err);
        });
    });
    afterAll(function() {
        var path = `${pathData}/${episodeJSON1.id}.json`;
        fs.unlink(path);
        path = `${pathData}/${episodeJSON2.id}.json`;
        fs.unlink(path);
    });
});



