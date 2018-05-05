const jwt = require('jsonwebtoken');
Author =require('../models/author');
var router = module.exports = require('express').Router();

router.use(function (req, res, next) {
	if (req.method === 'POST'  || req.method === 'PUT' || req.method === 'DELETE' ) {
		console.log(req.headers['token'])
		try {
			var decoded = jwt.verify(req.headers['token'], 'secret');
		} catch (error) {
			return res.status(401).json({
				error: error
			 });
		}
		
	}
	next()
})


router.get('/api/authors', (req, res) => {
	Author.getAuthors((err, authors) => {
		if(err){
			throw err;
		}
		res.json(authors);
	});
});

router.post('/api/authors', (req, res) => {
	var author = req.body;
	console.log("api add author");
	Author.addAuthor(author, (err, author) => {
		if(err){
			throw err;
		}
		res.json(author);
	});
});

router.put('/api/authors/:_id', (req, res) => {
	var id = req.params._id;
	var author = req.body;
	Author.updateauthor(id, author, {}, (err, author) => {
		if(err){
			throw err;
		}
		res.json(author);
	});
});

router.delete('/api/authors/:_id', (req, res) => {
	var id = req.params._id;
	Author.removeAuthor(id, (err, author) => {
		if(err){
			throw err;
		}
		res.json(author);
	});
});
