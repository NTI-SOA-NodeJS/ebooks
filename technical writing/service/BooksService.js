'use strict';


/**
 * Delete list of books
 * Note: Only **Super Admin** and **Admins** can delete list of books.
 *
 * returns Object
 **/
exports.booksDELETE = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get books list
 * Get list of books.  The `searchValue` will be search in `title` , `isbn` , `genre` and `author` that contain this value if it `null` it will be ignored.  You can filter books using If `authorsIds` or `genresIds` or both if any is `null` it will be ignored.  the default values to the query prams is `page` = 1 and the `len` = 10 **note:** that `page` starts with 1.
 *
 * page Integer the page number (optional)
 * len Integer number of books per page (optional)
 * searchValue String  (optional)
 * authorsIds String  (optional)
 * genresIds String  (optional)
 * returns Object
 **/
exports.booksGET = function(page,len,searchValue,authorsIds,genresIds) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Book by :id
 * Delete book data by its `:id`
 *
 * id String 
 * returns Object
 **/
exports.booksIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Book by :id
 * Get book data by its `:id`
 *
 * id String 
 * returns Object
 **/
exports.booksIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Book by :id
 * Update book data by its `:id`
 *
 * body Object  (optional)
 * id String 
 * returns Object
 **/
exports.booksIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add new book
 * Add new book to database.
 *
 * body Object  (optional)
 * returns Object
 **/
exports.booksPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

