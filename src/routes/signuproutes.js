const express = require('express');
const signupRouter= express.Router();

function router(nav,logout){
    signupRouter.get('/',function(req,res){
        res.render("signup",{
           nav,
           logout,
           title:'Library',
              
        });
    });

return signupRouter;
} 
module.exports = router;