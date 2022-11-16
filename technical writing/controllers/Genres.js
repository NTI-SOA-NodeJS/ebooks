'use strict';

var utils = require('../utils/writer.js');
var Genres = require('../service/GenresService');

module.exports.genresGET = function genresGET (req, res, next, page, len) {
  Genres.genresGET(page, len)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.genresIdDELETE = function genresIdDELETE (req, res, next, id) {
  Genres.genresIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.genresIdGET = function genresIdGET (req, res, next, id) {
  Genres.genresIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.genresIdPUT = function genresIdPUT (req, res, next, body, id) {
  Genres.genresIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.genresPOST = function genresPOST (req, res, next, body) {
  Genres.genresPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
