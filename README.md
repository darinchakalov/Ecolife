# App

This project was generated with [Create React App](https://github.com/facebook/create-react-app) version 5.0.1.

It is an ecommerce website which has two types of users: admins and customers.

Admin users can create, edit and delete products.

Customers can add products to shopping cart and finish their order. Only logged in users can add products to their cart.

## App Details

The app is based on React + Node.js + Express.js + MongoDB.

## Development server

Run `npm start` for a dev server within the app folder. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## RESTful API

The following endpoints are supported:

GET /api/products - list all products
GET /api/products/:id - get details about given product
POST /api/products - create a new product
PUT /api/products/:id - edit given product
DELETE /api/products/:id - delete given product

Run `npm start` for a dev api server within the api folder. The api will be available at `http://localhost:3030/`.

## Live site

The application has been build and deployed onto a hosting enviroment and is publicly available at: `https://ecolife.f4ster.com`

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `build/` directory.

## Screenshots
![screenshot-localhost_3000-2022 08 12-09_26_11](https://user-images.githubusercontent.com/19432229/184297524-4d6fdf62-a2ed-403d-8a83-c7461f691a01.png)
![screenshot-localhost_3000-2022 08 12-09_26_32](https://user-images.githubusercontent.com/19432229/184297569-bd95e510-3c3c-4972-91b3-5a53dbaec6df.png)
![screenshot-localhost_3000-2022 08 12-09_26_38](https://user-images.githubusercontent.com/19432229/184297581-aff58af7-e55d-48b6-81ea-51b63103692d.png)
![screenshot-localhost_3000-2022 08 12-09_26_57](https://user-images.githubusercontent.com/19432229/184297587-b16b3192-8bc5-4870-961d-27834734dcbb.png)

