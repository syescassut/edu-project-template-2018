const fs = require('fs');
const frisby = require('frisby');
const path = require('path');
const Joi = frisby.Joi;
const dal = require('../../src/server/dal');

const URL = `http://localhost:${process.env.SERVER_PORT}/api/episodes`;
const DATA_DIR = process.env.DATA;

describe('POST tests', function () {
    it("Insert episode test", (done) => {
        frisby.post(`${URL}/`, {
                name: "Blindspot",
                code: "S03E02",
                score: 5
            })
            .expect('status', 201)
            .expect('jsonTypes', {
                'id': Joi.string().required(),
                'name': Joi.string().required(),
                'code': Joi.string().required(),
                'score': Joi.number().required()
            }).then((res) => {
                id = res.body.id;
            })
            .done(done);
    });
    afterAll((done) => {
        var path = `${DATA_DIR}/${id}.json`;
        fs.unlink(path);
        done();
    });
});

describe('GET tests', function () {
    beforeAll((done) => {
        dal.insert(
            {id: "1111-2222", name: "testName1", code: "S01E01", score: 7}
        )
        dal.insert(
          {id: "1111-3333", name: "testName2", code: "S01E01", score: 7}
        ) 
        done();
    });
    it("Find all episodes test", (done) => {
        frisby.get(`${URL}/`)
            .expect('status', 200)
            .expect('jsonTypes', '*' , {
                'id': Joi.string().required(),
                'name': Joi.string().required(),
                'code': Joi.string().required(),
                'score': Joi.number().required()
            })
            .done(done);
    });
    it("Find one episode test", (done) => {
        frisby.get(`${URL}/1111-2222`)
            .expect('status', 200)
            .expect('jsonTypes', {
                    'id': "1111-2222",
                    'name':"testName1",
                    'code': "S01E01",
                    'score': 7
            })
            .done(done);
    });
    it("Find one episode failed test", (done) => {
        frisby.get(`${URL}/4678676744354878`)
            .expect('status', 404)
            .done(done);
    });
    afterAll((done) => {
        var path = `${DATA_DIR}/1111-2222.json`;
        fs.unlink(path);
        var path = `${DATA_DIR}/1111-3333.json`;
        fs.unlink(path);
        done();
    });
});

describe('DELETE tests', function () {
    beforeAll((done) => {
        dal.insert(
            {id: "1111-2222", name: "testName1", code: "S01E01", score: 7}
        )
        done();
    });
    it("Delete episode test", (done) => {
        frisby.del(`${URL}/1111-2222`)
            .expect('status', 204)
            .done(done);
    });
    it("Delete episode failed test", (done) => {
        frisby.del(`${URL}/87546546854354`)
            .expect('status', 404)
            .done(done);
    });
});

describe('PUT tests', function () {
    beforeAll((done) => {
        dal.insert(
            {id: "1111-2222", name: "testName1", code: "S01E01", score: 7}
        )
        done();
    });
    it("Update episode test", (done) => {
        frisby.put(`${URL}/1111-2222`, {
                name: "testName2",
                code: "S02E02",
                score: 5
            })
            .expect('status', 200)
            .expect('jsonTypes', {
                'id': Joi.string().required(),
                'name': Joi.string().required(),
                'code': Joi.string().required(),
                'score': Joi.number().required()
            })
            .done(done);
    });
    it("Update episode failed test", (done) => {
        frisby.put(`${URL}/87546546854354`)
            .expect('status', 500)
            .done(done);
    });
    afterAll((done) => {
        var path = `${DATA_DIR}/1111-2222.json`;
        fs.unlink(path);
        done();
    });
});