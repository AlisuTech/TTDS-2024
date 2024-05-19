const express=require('express')
const router=express.Router()

router.post("/transfer-funds",(req,res)=>{
    res.send("You have been sent $200")
})

module.exports=router