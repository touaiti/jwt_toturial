const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
User = require('../models/user');
var router = module.exports = require('express').Router();

router.post('/api/signup', function(req, res) {
    console.log(req.body.password)
	bcrypt.hash(req.body.password, 10, function(err, hash){
        
	   if(err) {
		  return res.status(500).json({
			 error: err
		  });
	   }
	   else {
		  const user = new User({
			 email: req.body.email,
			 first_name: req.body.first_name,
			 last_name: req.body.last_name,
			 password: hash 
		  });
		  const JWTToken = jwt.sign({
			email: user.email,
			_id: user._id
		  },
		  'secret',
		   {
			 expiresIn: '2h'
		   });
		  user.save().then(function(result) {
			res.status(200).json({
				first_name: user.first_name,
				last_name: user.last_name,
				email: user.email,
				role: user.role,
				token: JWTToken
			  });
		  }).catch(error => {
			 res.status(500).json({
				error: err
			 });
		  });
	   }
	});
 });

 router.post('/api/signin', function(req, res){
	User.findOne({email: req.body.email})
	.exec()
	.then(function(user) {
	   bcrypt.compare(req.body.password, user.password, function(err, result){
		  if(err) {
			 return res.status(401).json({
				failed: 'Unauthorized Access'
			 });
		  }
		  if(result) {
			const JWTToken = jwt.sign({
				email: user.email,
				_id: user._id
			  },
			  'secret',
			   {
				 expiresIn: '2h'
               });
			   return res.status(200).json({
                 first_name: user.first_name,
                 last_name: user.last_name,
                 email: user.email,
                 role: user.role,
				 token: JWTToken
			   });

		  }
		  return res.status(401).json({
			 failed: 'Unauthorized Access'
		  });
	   });
	})
	.catch(error => {
	   res.status(500).json({
		  error: error
	   });
	});;
 });

