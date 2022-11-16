'use strict';

var utils = require('../utils/writer.js');
var Authors = require('../service/AuthorsService');

module.exports.authersGET = function authersGET (req, res, next, page, len) {
  Authors.authersGET(page, len)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsIdDELETE = function authorsIdDELETE (req, res, next, id) {
  Authors.authorsIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsIdGET = function authorsIdGET (req, res, next, id) {
  Authors.authorsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsIdPUT = function authorsIdPUT (req, res, next, body, id) {
  Authors.authorsIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsPOST = function authorsPOST (req, res, next, body) {
  Authors.authorsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
