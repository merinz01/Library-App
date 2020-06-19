const express = require('express');
const homeRouter= express.Router();

function router(btn){
    homeRouter.get('/',function(req,res){
        res.render("home",{
                
                btn,
                title:'Library'
        
            });
    
     });

return homeRouter;
} 
module.exports = router;