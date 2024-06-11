const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {librarymodule}=require("./models/library")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://nithya:nithya913@cluster0.r7eo1il.mongodb.net/libraryydb?retryWrites=true&w=majority&appName=Cluster0")


app.get("/",(req,res)=>{
    res.send("hellooooooooooo")})

    app.post("/add",(req,res)=>{
        let input=req.body
        let library=new librarymodule(input)
        library.save()
        console.log(library)
        res.json({status:"Success"})
        
    })

    app.get("/view",(req,res)=>{

librarymodule.find().then((data)=>{
    res.json(data)
}).catch()
        
    })

    app.listen(8080,()=>{console.log("server started")})