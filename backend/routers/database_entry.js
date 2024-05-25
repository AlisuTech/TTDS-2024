const express=require('express')
const mongoose=require('mongoose')
const {v4}=require('uuid')
const router=express.Router()
const connString=process.env.DBCONNSTRING

//Steps to DB Creation
// Connecting the Database - mongoose
// Creating the Model - Schema & Table
// Syncing your process - CRUD (Create, Read, Update, Delete)
// Cluster >> Databases >> Collection (Table) >> Schemas

//Reasons not to keep sensitive info in code
//1. Everybody has access
//2. Deploy Safe Place, Easily Changed without redeploying

//Setting Up Environment Variables
//1. Install dotenv
//2. Configure your App (ExpressJS/ReactJS)
//3. Create Variable Container>>
//4. Call your process variable


mongoose.connect(connString)
mongoose.set('strictQuery', true);
const userSchema=new mongoose.Schema({
    dateCreated: Date,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phone: String,
    age: Number,
    isMale: Boolean
})

const userCollection=mongoose.model('users',userSchema)

router.post('/create-user',async (req,res)=>{
    //DTOs - Data Transfer Objects
    const body=req.body
    const model={
        uid:v4(),
        firstName:body.firstName,
        lastName:body.lastName,
        email:body.email,
        password:body.password
    }
    await userCollection.create(model)
    res.send("Created Successfully")
})


router.put('/update-user',async (req,res)=>{
    //DTOs - Data Transfer Objects
    const {userId}=req.query
    const body=req.body
    await userCollection.updateOne({"uid":userId},{$set:body})
    res.send("Updated Successfully")
})

router.put('/update-username',async (req,res)=>{
    //DTOs - Data Transfer Objects
    const {userId}=req.query
    const body=req.body
    const user=await userCollection.findOne({"uid":userId})
    user.firstName=body.firstName
    await userCollection.updateOne(user)
    res.send("Updated Successfully")
})

router.get('/fetch-user-byemail',async (req,res)=>{
    const {em}=req.query
    // Find - Many Items that satifies a condtion
    // FindOne - One Item that satifies a condition
    //x=>x.email==email
    const user=await userCollection.findOne({"email":em})
    res.send(user)
})
router.get('/login',async (req,res)=>{
    const {em,ps}=req.query
    const user=await userCollection.findOne({$and:[{"email":em},{password:ps}]})
    if(user!=null){
        res.send(user)
    }
    else{
        res.status(400)// 404, 501, 200, 201, 400
        res.send(null)
    }
})
router.get('/fetch-users',async (req,res)=>{
    // Find - Many Items that satifies a condtion
    // FindOne - One Item that satifies a condition
    //x=>x.email==email
    const users=await userCollection.find()
    res.send(users)
})
router.get('/fetch-users-byname',async (req,res)=>{
    const {name}=req.query
    // Find - Many Items that satifies a condtion
    // FindOne - One Item that satifies a condition
    //x=>x.email==email
    const users=await userCollection.find({"firstname":name})
    res.send(users)
})
router.get('/get-user-byfnamelname',async (req,res)=>{
    //DTOs - Data Transfer Objects
    const {keyword}=req.query
    const users=await userCollection.find({$or:[{firstName:keyword},{lastName:keyword}]})
    res.send(users)
})
router.get('/get-user-byfnamelname-match',async (req,res)=>{
    //DTOs - Data Transfer Objects
    const {keyword}=req.query
    const users=await userCollection.find({$and:[{firstName:keyword},{lastName:keyword}]})
    // const users=await userCollection.find({$nor:[{firstName:keyword},{lastName:keyword}]})
    // const users=await userCollection.find({$or:[{firstName:keyword},{lastName:keyword}]})
    res.send(users)
})
router.delete('/delete-user',async (req,res)=>{
    const {userId}=req.query
    await userCollection.deleteOne({"uid":userId})
    res.send("Deleted Successfully")
})
module.exports=router