# iFuture

A food delivery app built with React — browse restaurants, build an order, track it and manage
your profile. This was the final project of the Labenu front-end course.

**Live demo:** https://keen-interest.surge.sh/

![Home screen](https://user-images.githubusercontent.com/86701927/139736513-c05e5ab1-9a65-4c19-9692-cad07c1a6f0b.png)

## About

iFuture covers the full customer journey of a delivery app, built mobile-first against a supplied
design: sign up, find a restaurant, fill a cart, pay, and watch the order until it arrives.

A cart may only contain items from one restaurant at a time, and adding a product that is already
in the cart updates its quantity rather than duplicating the line. While an order is active the
app surfaces it on both the home screen and the cart, with the remaining wait time.

## Features

- Sign up and log in
- Home screen listing restaurants, filterable by cuisine and searchable by name
- Restaurant page with the full menu
- Add products to the cart with a chosen quantity, and remove them again
- Cart with the delivery address, payment method and running subtotal
- Order confirmation and an active-order state with the estimated wait
- Profile with the customer's details and order history
- Edit profile and edit delivery address

## Tech stack

- [React](https://react.dev/) with hooks and the Context API
- [Chakra UI](https://chakra-ui.com/)
- [Styled Components](https://styled-components.com/docs)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/docs/intro)

## API

The app consumes the LabeFoods API, documented here:
[Postman collection](https://documenter.getpostman.com/view/7549981/SWTEdGtT)

## Running it locally

Requires Node.js.

```bash
git clone https://github.com/Brunomon2812/iFuture.git
cd iFuture/alves-labe-food6
npm install
npm start
```

The app runs on http://localhost:3000 by default.

## Wireframe

![Wireframe](https://user-images.githubusercontent.com/86701927/139914521-33fddf9a-ec20-42db-b76d-a0ad95059708.png)

## Screenshots

**Login**

<img alt="Login screen" src="https://user-images.githubusercontent.com/83218983/128033772-fe8e6b66-adfa-412b-b269-a6a969f2224f.png" width="314"/>

**Restaurant list**

<img alt="Restaurant list" src="https://user-images.githubusercontent.com/83218983/128034569-cadd725d-7685-4af7-8e73-5ede5b3ed24a.png" width="314"/>

**Restaurant search**

<img alt="Searching for a restaurant" src="https://user-images.githubusercontent.com/83218983/128034700-f3f51dd2-3578-4ea5-abe4-54f4e3e66512.png" width="314"/>

**Menu**

<img alt="Restaurant menu" src="https://user-images.githubusercontent.com/83218983/128035186-ce9a491c-4a6a-415b-9a2e-57fae6909fb8.png" width="314"/>

**Adding an item**

<img alt="Adding a menu item" src="https://user-images.githubusercontent.com/83218983/128035274-10a54825-a66c-4c6f-9c33-945a5b8c4932.png" width="314"/>

**Cart and order confirmation**

<img alt="Cart" src="https://user-images.githubusercontent.com/83218983/128035425-501cbbf1-0a7a-4fae-91b4-dd4a175e8e55.png" width="314"/>
<img alt="Confirming the order" src="https://user-images.githubusercontent.com/83218983/128035483-fa4fd3a4-1506-4484-8eb0-cb1231826d0b.png" width="314"/>
<img alt="Order confirmed" src="https://user-images.githubusercontent.com/83218983/128035874-19b3cfcc-da87-446a-85fe-2f440ac674e1.png" width="314"/>

**Profile with order history**

<img alt="Profile" src="https://user-images.githubusercontent.com/83218983/128036036-0c1a0064-de31-445a-be77-ddf96b73b7b5.png" width="314"/>

## Author

Bruno Monteiro — [GitHub](https://github.com/Brunomon2812) · [LinkedIn](https://www.linkedin.com/in/brunoarmonteiro/)
