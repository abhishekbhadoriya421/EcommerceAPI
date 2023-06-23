# EcommerceAPI

>this an Ecommerce API It Allows us to perform These Tasks

* Add Product
* Delete Product
* Update Product
* List of Products

# Used Tools

> Programming Language, Frameworks And Middelware

* Node js
* Express
* mongoose
* dotenv
* Postman

`mongoose => database is used for storing user data`

`dotenv => package is used for keeping our sensitive information in a separate file not accessed by anyone`

`Postman => To check API`

# File And Folder Structure

`config--------------------->(mongoose.js)`

`Module--------------------->(Product.js)`

`Index.js(Root File)--------> All the routes are define in root file`

# DataBase

> Product Schema

```js 

  const ProductSchema = db.Schema({
      // creating an Array of Product
      name: {
          type : String,
          require : true
      },
      quantity : {
          type : Number,
          require : true
      }
  });
  
```
