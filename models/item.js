var mongoose = require("mongoose");
var itemSchema = mongoose.Schema({
    title : String,
    price : Number,
    description: String,
    category: String,
    createdAt: { type: Date, default: Date.now },
    author: {
        id: {
           type: mongoose.Schema.Types.ObjectId,
           ref: "User"
        },
        name: String
     },
    images:[
        { 
            data: Buffer, 
            contentType: String 
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});
module.exports = mongoose.model("Item" , itemSchema);