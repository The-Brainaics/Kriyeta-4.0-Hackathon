

const mongoose=require("mongoose");

const connectDB=async()=>{
    
    await mongoose.connect("mongodb+srv://tanmayindoriya:26tanmay07@cluster0.xmprn.mongodb.net/hospitalData");
 
};


 
module.exports=connectDB;
