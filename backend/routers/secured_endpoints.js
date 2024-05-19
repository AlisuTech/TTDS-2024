const express=require('express')
const {v4}=require('uuid')
const router=express.Router()

// Secured Level - JWT (JsonWebToken)
const jwt=require('jsonwebtoken')
function Users(){
    return [
        {
            name:"Ifeanyi Nwachukwu",
            email:"ifeanyibobby@gmail.com",
            password:"134543"
        },
        {
            name:"Esohe Daniel",
            email:"esohe@gmail.com",
            password:"8765678"
        },
        {
            name:"Josephat David",
            email:"david@gmail.com",
            password:"09876567"
        }
    ]
}


// https://localhost:505/secured/newRoute

// google.com >>domain === google.com,microsoft.com, techorigin.com
router.get('/newRoute',(req,res)=>{
    res.send("This is a secured route")
})

//Digital Identity of the logged in user
router.post('/login-user',(req,res)=>{
    const {email, password}=req.query
    const user=Users().find(x=>x.email==email)
    if(user==null){
        res.send(`No Profile was found, Sign up`)
    }
    else if(user!=null && password==user.password){
        let token=getWebToken(user)
        res.send(`Your new token is ${token}`)
    }
    else if(user!=null && password!=user.password){
        res.send(`Invalid Password, Forgot Password?`)
    }
    else{
        res.send("Unknown error occurred")
    }
    
})

router.get('/check-server',authorizeUser,(req,res)=>{
    res.send("Authentication and Authorization was successful")
})

function getWebToken(user){
    // 1. Profile 2. SecretKey 3. ExpiryDate
    const profile={
        name:user.name,
        email:user.email,
        uid:v4()
    }
    const secretKey="F68AF290519D50B0E1079744F4A035F8"// Environment Variables
    const expireIn={
        expiresIn:30
    }
    const token=jwt.sign(profile,secretKey,expireIn)
    return token
}

function authorizeUser(req,res,next){
    const token=req.headers.authorization
    const secretKey="F68AF290519D50B0E1079744F4A035F8"
    jwt.verify(token,secretKey,(err)=>{
        if(err){
            res.send("Invalid Token or Token has expired")
        }
        else{
            next()
        }
    })
}

module.exports=router