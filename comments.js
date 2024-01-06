// Create web server
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');
var Post = require('../models/post');

// Create a new comment
router.post('/new', function(req, res, next) {
  var comment = new Comment({