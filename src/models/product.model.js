const mongoose = require("mongoose");


const productScheema = new mongoose.Schema({
    "id": { required: true, type: Number, unique: true },
    "img":{required: true, type: String},
    "title": { required: true, type: String },
    "desc": { required: true, type: String },
    "price": { required: true, type: Number },
    "catog": { required: true, type: String },
    "color": { required: true, type: String },
},{
    versionKey: false,
    timestamps: true
});
const Product = mongoose.model("product", productScheema);
module.exports = Product;



/*


 {
     "id":,
    "image":"",
    "name": "",
    "size_finish":"",
    "by": "",
    "MRP_price":,
    "discount":,
    "emi_from":,
    "related_images": ["","",""],
    "product_details": 
        { "net_quantity":"" ,
        "dimensions":"" ,
         "country_of_region":"" },
         "more_information": {
        "MRP":,
        "Manufactured_By": "",
        "Consumer_Care_Details":"" ,
        "Imported_By": "",
        "Marketed_By": "",
        "Sold_By":""
        
    },
    "reasons_to_love_this_product": [
        {
            "title": "",
            "description":"" ,
            "image":""
        },
        {
               "title":"" ,
            "description":"" ,
            "image":""
        },
        {
               "title":"" ,
            "description":"" ,
            "image":""
        },
         {
            "title":"",
            "description": "",
            "image":""
        }
        
        
        
    ],
    "product_dimensions":["",""]
}




 */