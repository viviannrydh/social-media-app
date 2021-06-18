const router=require("express").Router();

router.get('/', (req, res)=>{
    res.send('Hello from userRoute')
})

module.exports=router