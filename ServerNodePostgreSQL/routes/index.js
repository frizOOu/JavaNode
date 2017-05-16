var express = require('express');
var router = express.Router();
var db = require('../queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/elements', db.getAllElements);

// router.get('/api/elements/:id', db.getSingleElement);
// router.post('/api/elements', db.createElement);
// router.put('/api/elements/:id', db.updateElement);
// router.delete('/api/elements/:id', db.removeElement);


module.exports = router;