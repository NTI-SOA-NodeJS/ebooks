'use strict';

var utils = require('../utils/writer.js');
var Books = require('../service/BooksService');

module.exports.booksDELETE = function booksDELETE (req, res, next) {
  Books.booksDELETE()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.booksGET = function booksGET (req, res, next, page, len, searchValue, authorsIds, genresIds) {
  Books.booksGET(page, len, searchValue, authorsIds, genresIds)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.booksIdDELETE = function booksIdDELETE (req, res, next, id) {
  Books.booksIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.booksIdGET = function booksIdGET (req, res, next, id) {
  Books.booksIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.booksIdPUT = function booksIdPUT (req, res, next, body, id) {
  Books.booksIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.booksPOST = function booksPOST (req, res, next, body) {
  Books.booksPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
