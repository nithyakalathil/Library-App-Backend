const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":String,
        "Category":String,
        "AuthorName":String,
        "price":String,
        "year":String
    }
)


let librarymodule=mongoose.model("libraries",schema)
module.exports={librarymodule}