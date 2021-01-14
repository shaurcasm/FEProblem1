# Finding Falcone

## About

A Fullstack project for Geektrust Front-End Problem 1.

Heroku app link: [Finding Falcone](https://finding-queen-falcone.herokuapp.com/)

## Problem Details

Find Queen Falcone...

1. Fetch Planets and Vehicles from given APIs.

2. User selects 4 Planets and respective vehicles to get there; Vehicles are limited by their Quantity and Range.

3. "Launch" button, activated after selecting 4 Planets. Sends the selection to external API, after Token is wrapped in Back-end, express.

## Script Details

### Install Script

> npm install

Installs dependencies.

### Development Script

> npm start

Starts the Dev build.
Concurrently start the server and the single page app or client. Client must have the proxy(in package.json) set to server's
port

### Build Script

.env file > NODE_ENV=production

To build the client:
> npm run build

Build script used by Heroku:
> npm heroku-postbuild

### Test Script

> npm test

Tests the client-side App.

## Notes: