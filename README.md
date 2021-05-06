# ELC Coding Test

Simple auto-search feature inspired by [Mac Cosmetics](https://www.maccosmetics.com/esearch?form_id=perlgem_search_form&search=red) and [Estée Lauder](https://www.esteelauder.com/products/681/product-catalog/skin-care#).

## Running the project

At the Server directory:

1. Run `npm i` to install all necessary server dependencies.
2. Run `npm run install-client` to install all necessary client dependencies.
3. Run `npm run dev` to launch the app.

## CORS

This project uses the CORS Connect/Express middleware (https://www.npmjs.com/package/cors) in order to enable CORS and properly run the server. If by any chance, this implementation were to fail, you would see a message such as:

`Access to fetch at 'url' from origin 'url' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.`

At the console. In order to override this conflict, I recommend using [Moesif Origin & CORS Changer](https://addons.mozilla.org/en-US/firefox/addon/moesif-origin-cors-changer1/).

## Server - Node.js

The server-side of this project runs at [http://localhost:8080/api/products](http://localhost:8080/api/products), followed by the query obtained from the search input.
If the commands above were to fail, the server could be runned by:

1. Run `npm i` at the server directory to install all necessary dependencies.
2. Run `nodemon server.js` at the server directory to launch the app.

## Client - React.js

The client-side of this project runs at [http://localhost:3000](http://localhost:3000).
If the commands above were to fail, the client could be runned by:

1. Run `npm i` at the client directory to install all necessary dependencies.
2. Run `npm start` at the client directory to launch the app.

## About the stack

This project was developed using Node.js, React.js and Styled Components.

- I decided to redo the original project configuration due to several issues I was having with Babel, Webpack, gulp and other dependencies. Since this was a two-hours challenge, it seemed that trying to refactor such issues would take longer than I would've expected, so I decided to start from scratch with a simple create-react-app and setting up the server by myself.
- I chose to switch from SaSS to Styled Components because I believe it provides a visual relief from having many divs and React components with classes, and because the scoping mindset if provides follows React's general arquitecture and cleanliness. To avoid confusion, I added the "ui" prefix to the Styled Components in order to differenciate them from React components.
- Since this was a very small project, I decided to stay away from using tools such as Context API to abstract fetcher functions as the one that's on the helpers file, but in a medium scale I would've used it, and on a larger one, Redux.js.

## To Do List

- Having more time in my hands, my first priority would've been testing using Jest.
- I would've liked to implement at least PropTypes, and with more time, TypeScript.
