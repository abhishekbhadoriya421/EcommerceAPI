require('dotenv').config()
const express = require('express');
const app = express();
require('./config/mongoose');
const Product = require('./model/Product');
const port = 3000;

app.use(express.urlencoded());
app.use(express.json());

// Create Product
app.post('/products/create', async(req, res) => {
    const newProduct = req.body;
    const isProduct = await Product.findOne({name:newProduct.name});

    // check if user is already exist then return message
    if(isProduct){
        return res.json({
            message: "The Product is already Exist"
        });
    }

    // Add the Product in the database
    await Product.create(newProduct);
    return res.status(201).json({
        message: "SuccessFull Added",
        data: {
           name: newProduct.name,
           quantity: newProduct.quantity
        }
    });
});

// product delete
app.delete('/products/:id',async (req,res)=>{
    let id = req.params.id;
    // finding Product by id and delete 
    let isDeleted = await Product.deleteOne({_id:id});
    // now if the product is present the deleteCount will be one otherwise 0
    if(isDeleted.deletedCount===0){
        return res.status(404).json({
            message: "Wrong Product id"
        });
    }

    return res.json({
        message: 'product deleted'
    })
});

// Returning Product List
app.get('/products',async(req,res)=>{
    let product = await Product.find({});
    // All Product
    return res.status(200).json({
        products : product
    })
});


// Update Product
app.post('/products/:id/quantity/:quantity',async(req,res)=>{
    let id = req.params.id;
    let quantity = req.params.quantity;
    const product = await Product.findByIdAndUpdate(id, {quantity:quantity}, { new: true });
    console.log(product);
    return res.status(200).json({
        message: "updated successfully"
    })

})


// Listen
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
