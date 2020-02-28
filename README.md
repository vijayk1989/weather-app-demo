# How to get the app working

- Clone repo

## npm install

- cd into backend and `npm install`
- cd into frontend and `npm install` or `yarn`

## Build

- cd into frontend and build `yarn build` or `npm run build`

## Run app

- cd into backend and `npm start`
- go to localhost:5500 on the browser to see the app running

## Misc.

- I am not including .env file in .gitignore for the purposes of this demo
- I have added an additional route ('/weather/all') which takes multiple cities as query param
  - Format: ?cityArray=New York,Boston, eg: http://localhost:5500/weather/all?cityArray=New%20York,%20Boston
