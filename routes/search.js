var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient

router.get('/search', function(req, res, next){
	console.log('search request');

	mongo.connect('mongodb://localhost:27017/gen', function (err, db){
		if(err) res.json({success: false, err: err});

		db.collection('search').find().toArray(function (err, result) {
    	if(err) res.json({success: false, err: err});

    	res.json(result);
  	})
	});
});

module.exports = router;
