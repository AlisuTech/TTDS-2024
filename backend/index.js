const express=require('express')
const dotenv=require('dotenv')
dotenv.config()
// import express from 'express'
const securedRouter=require("./routers/secured_endpoints.js")
const authorizationRouter=require("./routers/authorization.js")
const databaseRouter=require("./routers/database_entry.js")

const PORT_NUMBER=process.env.PORTNUMBER
const app=express()
app.use(express.json());

//First Level - CORS (Cross Origin Resource Sharing Policies)
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin',"*") //google.com, apple.com
    res.setHeader('Access-Control-Allow-Methods','*') // GET, POST, PUT, DELETE
    // res.setHeader('Access-Control-Allow-Origin','https://google.com,https://localhost:5050')
    // res.setHeader('Access-Control-Allow-Methods','GET, POST')
    res.setHeader('Access-Control-Allow-Headers','Content-Type')
    res.setHeader('Access-Control-Allow-Creditials',true)
    next()
})


app.use("/secured",securedRouter)
app.use("/auth",authorizationRouter)
app.use("/database",databaseRouter)

// Requests and Responses
// >> Types of Requests in Backend "Get, Post, Put, Delete"
// >> Get - Fetch Result/Data/Info/Downloading - Browser
// >> Post - Uploading/Sending
// >> Put - Updating
// >> Delete - Delete
// Download Postman for API Management and Testing

//Get Request
app.get('/',(request, response)=>{
    response.send("Hello from TechOrigin server")
})
app.get('/fetch',(request, response)=>{
    response.send("Hello from TechOrigin server 2")
})
// http://localhost:5050/fetchById?id=888999
app.get('/fetchById',(request, response)=>{
    const {id}=request.query // This grants access to the query parameters
    response.send("Hello from TechOrigin server "+id)
})

// http://localhost:5050/login?email=<email>&password=<password>
app.get('/login',(request, response)=>{
    const {email, password}=request.query
    if(email==="ifeanyibobby@gmail.com" && password==="1234"){
        response.send("Login Successful")
    }
    else{
        response.send("Invalid details")
    }
})

app.post('/',(request, response)=>{
    response.send("This is a post to TTDS server")
})
app.post('/save-profile',(request, response)=>{
    const body=request.body
    response.send(`Profile for ${body.name} updated successfully`)
})

app.put('/',(request, response)=>{
    response.send("This is a put to TTDS server")
})

app.put('/update-user',(request, response)=>{
    const {uid}=request.query
    const update=request.body

    response.send(`Update for ${uid} with ${update.name} changes has been saved`)
})

app.delete('/',(request, response)=>{
    response.send("This is a delete to TTDS server")
})

// const json={
//     key:"Hello"
// }
// const key ="Hello"

// Parameters & Body
// Get - Parameters
// Post - Parameters & Body
// Put - Parameters & Body
// Delete - Parameters



app.listen(PORT_NUMBER,()=>{
    console.log(`The Server started on port ${PORT_NUMBER}`)
})

//IP Address - Locations
//Key - Port Number
// localhost - 127.0.0.1/3000