var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
    res.render('index_view', {
        pageTitle: 'Home',
        pageID: 'home'
    });
});

module.exports = router;