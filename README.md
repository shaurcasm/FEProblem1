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

Installs express server dependencies and "post-install", installs client React app dependencies.

### Start Script

> npm start

Starts the server that serves the production build.

### Development Script

> npm run dev

Concurrently starts the server and runs the react-script.

### Build Script

.env file > NODE_ENV=production

> npm run build

Default build script.

> npm heroku-postbuild

Build script used for Heroku, done by Heroku.

### Test Script

> npm test

Tests the client-side App.

## Notes:

1. When we backspace/Delete a written/selected vehicle, it doesn't put it back in available options.

2. Try to make datalist components stateless.

### Possible updates:

1. Server-side rendering. Improves React app's Google search performance.

2. Automate user input Link/Functionality. Redundant Luxury/Useful for external testers.

3. Parallax scrolling.