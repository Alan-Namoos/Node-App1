var express = require('express');
var router = express.Router();

router.get('/user/:index/', function(req, res){
  var index = req.params.index;
  var data = req.app.get('global_data');
  var user = data.users[index];
  res.render('user_view', {
    pageTitle: 'User',
    pageID: 'user',
    user: user
  });
});

module.exports = router;