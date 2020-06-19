const express = require('express');
const aboutusRouter= express.Router();

function router(nav,logout){
    aboutusRouter.get('/',function(req,res){
        res.render("aboutus",{
           nav,
           logout,
           title:'Library',
              
        });
    });

return aboutusRouter;
} 
module.exports = router;