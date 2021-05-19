[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
# ordersAndProducts
Welcome to Orders & Products API by RmLZ

You can find a [example app](https://ordersproducsapi.herokuapp.com/) in Heroku. Keep reading for further instructions.
## What is Orders and Products API?
Hi, my name is Ramon and this is a simple API to simulate an app managing orders and products.

This project was done as a mean to exercise what I have been learning in Backend classes. I hope you enjoy.

## What technologies has been used so far?
* [Materialize-CSS 1.0.0](https://materializecss.com/about.html)
* [PUG.JS 3.0.2](https://pugjs.org/api/getting-started.html)
* [Express.JS 4.16.1](https://expressjs.com/)
* [Mongoose 5.12.7](https://mongoosejs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Nodemon 2.0.7](https://www.npmjs.com/package/nodemon)

## How to run this project?
* Install MongoDB or apply for a cloud one at [Mongo DB Atlas website](http://www.mongodb.com);
* I strongly suggest you to apply for a Cloud database server and follow further instructions at [Mongo DB Atlas website](http://www.mongodb.com);
* Use your preferred text editor to generate a **config.js** file;
* Put the following code with URI pointing to your MongoDB instance

```javascript
module.exports = {
uri: 'mongodb+srv://useaname:password@your.uri.mongodb.net/databaseName?retryWrites=true&w=majority',
product: 'products', // table name
order: 'orders'} // table name 
```

* Open Terminal and Clone this repo! `git clone https://github.com/rmlz/ordersAndProducts.git`;
* Move to the **ordersAndProducts** folder `cd ordersAndProducts`
* Run `npm install`
* Save/move **config.js** inside the **database** folder;
* Run `npm start`
* Go to web browser and visit `localhost:3000`
* **ORDERS & PRODUCTS API IS ONLINE**

## Orders & Products API is Running. What now?

Now that the API is running, you may use your preferred API client to do all sort of
HTTP requests. 

One can use this simple project as a template for complex projects, sky is the limit!
Code documentation is available in the next section.

## Documentation

### App.js
This is the main application file.

Middleware routes and template engine are declared here.

### database/models/ProductModel.js
**ProductModel.js** is a **Mongoose Schema**.
#### Properties:
* **rating** is how well rated the product is;
* **isPromo** tells the requester if the product is using promotional price;
* **priceCutOff** is the amount of discount (percentage) when product is in promo price;
* **name** is the name of the product;
* **description** is the description of the product;
* **price** is the regular price of the product
* **finalPrice** must be the same of price if product is not in promotional discount, or the correct value after discount.
#### Example:
```json
{
    "rating": 4.5,
    "isPromo": false,
    "priceCutOff": 10,
    "name":"Kawabanga",
    "price": 10.99,
    "description":"Best pizza in the region, specially if you are a rat or a turtle!",
    "finalPrice": 10.99
}


```

### database/models/OrderModel.js
**OrderModel.js** is a **Mongoose Schema**.

#### Properties:
* **OrderElements** is an array of products and quantities;
* **product** is an ID reference to the Products table;
* **quantity** is the quantity of product items in the order;
#### Example:
```json
    {
    "orderElements": [
        {
            "product": "60a4620b33652a40b043c877",
            "quantity": 2
        },
        {
            "product": "60a4628933652a40b043c879",
            "quantity": 1
        },
        {
            "product": "60a46942f7ae8c53c0658528",
            "quantity": 1
        }
    ]
}

```
 

### database/controller/GenericController.js
**GenericController.js** is a generic class which other controllers may extend by.

#### Methods:
* `store(req, res)` saves data to Database
* `findAll(req, res)` returns all documents from a collection
* `findById(req, res)` returns a document by ID
* `patch(req, res)` updates document by ID
* `delete(req, res)` delete document by ID

### database/controller/OrdersController.js
**OrdersController.js extends GenericController**.
Its model is **OrderModel.js**

### database/controller/ProductController.js
**OrdersController.js extends GenericController**.
Its model is **ProductModel.js**
#### Methods:
*`finalPrice(req, res)` updates *finalPrice* property based on 
*price* and *priceCutOff* properties

### database/routes/indexRouter.js
Contains the `"[GET] localhost:3000/"`  route, which return
the **home.pug** view.

### database/routes/productRouter.js
Contains:
* `[GET] localhost:3000/products` returns all documents in the collection;
* `[POST] localhost:3000/products` insert a new product into DB;
* `[GET] localhost:3000/products/:id` returns a document based on its ID;
* `[PATCH] localhost:3000/products/:id` updates a document by its ID;
* `[DELETE] localhost:3000/products/:id` deletes a document by its ID;
* `[GET] localhost:3000/products/finalprice/:id` does the final price calculation if discount is bigger than 0%; 

### database/routes/orderRouter.js
Contains:
* `[GET] localhost:3000/orders` returns all documents in the collection;
* `[POST] localhost:3000/orders` insert a new product into DB;
* `[GET] localhost:3000/order/:id` returns a document based on its ID;
* `[DELETE] localhost:3000/order/:id` deletes a document by its ID;



[contributors-shield]: https://img.shields.io/github/contributors/rmlz/ordersAndProducts.svg?style=for-the-badge
[contributors-url]: https://github.com/rmlz/ordersAndProducts/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/rmlz/ordersAndProducts.svg?style=for-the-badge
[forks-url]: https://github.com/rmlz/ordersAndProducts/network/members
[stars-shield]: https://img.shields.io/github/stars/rmlz/ordersAndProducts.svg?style=for-the-badge
[stars-url]: https://github.com/rmlz/ordersAndProducts/stargazers
[issues-shield]: https://img.shields.io/github/issues/rmlz/ordersAndProducts.svg?style=for-the-badge
[issues-url]: https://github.com/rmlz/ordersAndProducts/issues
[license-shield]: https://img.shields.io/github/license/rmlz/ordersAndProducts.svg?style=for-the-badge
[license-url]: https://github.com/rmlz/ordersAndProducts/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ramon-pinto-de-barros-a4527a72
