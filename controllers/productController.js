var Products = require('../models/productSchema');
exports.product_details = function(req,res)
{
    Products.find({}).then(data=>
        {
            return 
        })
}