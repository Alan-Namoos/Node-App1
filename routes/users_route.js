var express = require('express');
var router = express.Router();

router.get('/users', function(req, res){
    var users_data = req.app.get('global_data');
//    res.send(users_data);
    res.render('users_view', {
        pageTitle: 'Users',
        pageID: 'users',
        data: users_data
    });

});

module.exports = router;