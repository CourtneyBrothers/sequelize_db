'use strict';
const passport = require('passport');

module.exports.postStraw = (req, res, next) => {
  const {user_saved_plastic} = req.app.get('models');
    req.body.UserId = req.session.passport.userId;
    user_saved_plastic.create(req.body).then(saved =>{
      console.log("saved",saved);
    })
    .catch(err=>{
      console.log(err, "error post straw cntrl");
    });
};