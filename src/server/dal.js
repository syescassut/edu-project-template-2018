var fs = require('fs');
const config = require('./config');

exports.insert = function(episode) {
    return new Promise((resolve, reject) => {
        const path = `${config.data}/${episode.id}.json`;
        fs.writeFile(path, JSON.stringify(episode), function (err) {
            if (err) {
                reject(err);
                return;
            }
            resolve(episode);
        });
    });
};

function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', function (err, episode) {
            if(err){
                reject(err);
                return;
            }
            resolve(JSON.parse(episode));                   
        });
    });
}

exports.findOne = function(id) {
        const path = `${config.data}/${id}`;
        return readFilePromise(path);
}; 

exports.findAll = function() {
    return new Promise((resolve, reject) => {
        const path = `${config.data}`;
        fs.readdir(path, function (err,  files) {
            if (err) {
                reject(err);
                return;
            }  
            const promises = [];
            files.forEach(function (file) {
                promises.push(readFilePromise(path+"/"+file));             
            });
            Promise.all(promises).then((episodes) => {
                resolve(episodes);
            });
        });
    });
};


