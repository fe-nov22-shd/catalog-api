# Catalog API
This is a backend API that provides access to a catalog of products, including phones and tablets. The API offers the following endpoints:

## Endpoints

 - GET /products/phones
Returns an array of all available phones.

Example:

````
https://catalog-api-mfo7.onrender.com/products/phones/
````

 - GET /products/tablets
Returns an array of all available tablets.

Example:

````
https://catalog-api-mfo7.onrender.com/products/tablets/
````

 - GET /products/info/:productId
Returns detailed information about a specific product, identified by its productId.

Example:

````
https://catalog-api-mfo7.onrender.com/products/info/apple-iphone-7-32gb-black
````

 - GET /products/phones?page=:page&perPage=:perPage
Returns a paginated array of phones, with the specified number of items per page.

Example:

````
https://catalog-api-mfo7.onrender.com/products/phones?page=1&perPage=16
````


 - GET /products/phones?sort=:sortOption
Returns an array of phones, sorted by the specified option (newest, cheapest, or alphabetically).

Example:

````
https://catalog-api-mfo7.onrender.com/products/phones?sort=newest
````


 - POST /products/relevant
Returns an array of relevant products based on the productId provided in the request body.

Example:

````
https://catalog-api-mfo7.onrender.com/products/relevant
````
Request body:
````JSON
{
"productId": "apple-iphone-xs-max-256gb-silver"
}
````

 - GET /products/hotprice
Returns an array of 15 products with the biggest discount.

Example:

````
https://catalog-api-mfo7.onrender.com/products/hotprice
````


 - GET /products/brand-new
Returns an array of the latest products.

Example:

````
https://catalog-api-mfo7.onrender.com/products/brand-new
````
