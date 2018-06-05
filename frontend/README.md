# Parcel Creator
**Author**: Joanna Coll
**Version**: 1.0.0 

## Overview

This app lets the user input data to create a parcel. It has a dashboard where the form is displaying for the user to add information. The user can add following information: firstName, lastName, address that gets to create a parcel. Then each parcel is rendered to the parcel list and displayed. User can also use option to update and remove each of them with a click. We are using a local host connection for this app. All the data created from the user input gets stored on mongodb.

## Getting Started

1. To start you need to install all the necessary dependencies and create all the directories for front-end.
2. Start with building webpack.common.js and webpack.dev.js files and utils to pre-define functions bind.
3. Create .env files both for front-end and back-end.
4. Create reducer, store and action files. 
5. Create ui state that takes firstName, lastName and address. The Id gets generated automatically by mongodb.
6. Reducer should contain  the following:
  * `PARCEL_CREATE`
  * `PARCEL_UPDATE`
  * `PARCEL_DELETE`
  
7. Actions file needs to create actions for all the interactions added to reducer.
8. Connect some components with action file. 
9. Create routes inside app file.
10. Make sure Dashboard displays on the'/' route and connects to map state and dispatch methods to props.
11. Add ParcelForm to render() function.
12. Add reporter and thunk middleware to your redux store
13. Use onComplete function to invoke when the form gets submitted.
14. Render all the components into HTML.
15. Change scss file accordingly.
16. Add local storage with redux-session.js.
17. Add actions and error logs in redux-reporter.js.
18. Run: mongo, npm run start, npm run watch to test the app. The address line must be at least 10 characters long.




## Architecture
JavaScript, Node.js, Airbnb package, webpack babel, Sass, React, Redux, Enzyme, Jest, Babel, middleware, Superagent, MongoDB, other dependencies

## Change Log

05-12-2018 4:00pm - The application is finished.
05-12-2018 9:30pm - Finished writing README.md




