var mongoose, config;

mongoose = require('mongoose');
config = require('../config');

mongoose.connect(config.mongo.uri);
