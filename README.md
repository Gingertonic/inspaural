![](http://forthebadge.com/images/badges/made-with-ruby.svg)
![](http://forthebadge.com/images/badges/made-with-javascript.svg)
![](https://forthebadge.com/images/badges/built-with-love.svg)

# inspaural
Design your own audio inspiration
[Visit the app in action here](http://inspaural.herokuapp.com) - tested in Chrome, Firefox and Opera

At a minimum, users can:
  + See and listen to a selection of quotes
  + See and listen to a selection of ambiences
  + See a list of previously created and saved inspaurals
  + Add new inspaurals
  + Edit inspaurals
  + Delete inspaurals

Future functionality may include:
  + Creating personal accounts (using local login, Facebook OAuth and/or Google OAuth)
  + Additional quote and ambience options via pagination

## Installation instructions

To run this app on a local server (well, two!):
  1. In a bash terminal of your choice run:
    + `git clone git@github.com:Gingertonic/inspaural.git` to use SSH or
    + `git clone https://github.com/Gingertonic/inspaural.git` to use HTTPS
  2. Run `cd inspaural`
  3. To start the Rails API server:
    + `cd` into `inspaural-api`
    + run `bundle install`
    + `rake db:migrate && rake db:seed`
    + `rails s -p 3001`
  4. To start the client server
    + `cd` again into `inspaural-client`
    + run `npm install && npm start`
  5. Navigate to `https://localhost:3000`
  6. Play!



## This is created for a Flatiron School Portfolio Project

# React Redux Portfolio Project

## Overview
This assignment is open-ended when it comes to the actual content. You are free to create whatever you'd like, as long as it incorporates most of what you've learned in this course.

---

The requirements for this project are:
  + The code should be written in ES6 as much as possible
  + Use the create-react-app generator to start your project.
  + Follow the instructions on this repo to setup the generator: create-react-app
  + Your app should have one HTML page to render your react-redux application
  + There should be 2 container components
  + There should be 5 stateless components
  + There should be 3 routes
  + The Application must make use of react-router and proper RESTful routing (should you choose to use react-router v3 please refer to the  appropriate docs; docs for v4 can be found here)
  + Use Redux middleware to respond to and modify state change
  + Make use of async actions to send data to and receive data from a server
  + Your Rails API should handle the data persistence. You should be using fetch() within your actions to GET and POST data from your API - do not use jQuery methods.
  + Your client-side application should handle the display of data with minimal data manipulation
  + Your application should have some minimal styling: feel free to stick to a framework (like react-bootstrap), but if you want to write + (additional) CSS yourself, go for it!
  + Go wild! These are only the basic requirements — you're free to add on as much stuff as you'd like.



## Contributions

If you would like to suggest an improvement or new feature that would be awesome!
To do this:
  1. fork and clone this repo
  2. make a new branch for your changes - try and use a relevant name `git checkout -b <your-branch-name>`
      + eg. `git checkout -b awesome-new-feature`
  3. make your changes and/or additions
  4. push your changes to your own fork
  5. submit a pull request

After submitting your pull request, I will review it as soon as I can.
It would super extra awesome if you can
  + Include tests for you new features
  + Make a relevant commit message and add a solid description with the request.

## License

The MIT License (MIT)

Copyright (c) 2018 Beth Michelle Schofield [Gingertonic]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
