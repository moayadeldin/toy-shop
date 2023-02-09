<<<<<<< HEAD
# ToyShop - CSE428 Data Engineering Course Project.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Description

This project is an implementation of a Toy Shop website featuring the basic requirements as
shown in CSE428 Data Engineering course project description. It was built mainly based on the
MEAN-stack package using MongoDB, ExpressJS, Angular framework and Node.js.

Regarding the backend part, MongoDB was used to store the data obtained from items.sql file
in the following repo https://github.com/ZyadShokry/ToyShop with NodeJS used as a serverside tool providing the communication between the Database and Frontend part.

## How to run

1. First clone the repo on your local machine. `git clone --single-branch --branch master https://github.com/moayadeldin/toy-shop`

2. run the command `node app.js`

3. In case Node.js is installed on device and there is no any missing packages (you can install any missing by using the command `npm install package-name`) then run `ng serve`.

4. Project can be viewed within `localhost:4200` featuring welcome page.

## Features
As shown in project file requirements on course page, the following features were implemented:
1. Ability to add or remove from the shopping cart, also viewing contents of the cart.
2. Ability to view list of toys in the shop, filter and search for toys based on their name or
brand.
Moreover, the following bonus features were implemented:
3. Simulating Payment Process
4. Page not found implemented for irrelevant URLs written, with option to redirect to
home page.
5. Simple Welcome Page.
6. Some CSS features. (Zooming in Pictures, Buttons animations)

## End Points
1. `localhost:4200` or `localhost:4200/welcome` redirects to welcome page.
2. `localhost:4200/home` redirects to home page where products are shown.
3. `localhost:4200/payment` redirects to payment page.
4. `localhost:4200/x` where x isn’t implemented to be a page path gives "Page Not Found".

A 6-minute video showing how the project works is available through this [link](https://drive.google.com/file/d/1pobFrL34W5tJrMaLkntYYEpfuzGsGPFs/view?usp=sharing).
