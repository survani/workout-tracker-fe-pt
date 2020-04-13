# Workout Tracker

You can find the deployed project at https://labspt7-workout-tracker.herokuapp.com/.

## Contributors


|                                       [Diana Grams](https://github.com/deegrams221)                                        |                                       [Jennifer Hott](https://github.com/jennl97)                                        |                                       [Carl Padilla](https://github.com/Carlpadilla)                                        |                                       [Liam Edlinger](https://github.com/LiamColeE)                                        |                                       [Paul Abernathy](https://github.com/Paulabernathy7)                                        |
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
|                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-female.png" width = "200" />](https://github.com/deegrams221)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-female.png" width = "200" />](https://github.com/jennl97)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/Carlpadilla)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/LiamColeE)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/Paulabernathy7)                       |
|                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/)                 |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/deegrams221)             |           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/jennl97)            |          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Carlpadilla)           |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/LiamColeE)             |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Paulabernathy7)             
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/diana-grams/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) |

<br>
<br>


![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[![Maintainability](https://api.codeclimate.com/v1/badges/f9fa2dea387a967a6c78/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/workout-tracker-fe-pt7/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/f9fa2dea387a967a6c78/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/workout-tracker-fe-pt7/test_coverage)

## Project Overview

 [Trello Board](https://trello.com/b/qWXOu3n5/labspt7-workout-tracker)

 [Product Canvas](https://www.notion.so/Workout-Tracker-0c8528a4db1042a396aadcdf0af40437)

 [UX Design files](https://www.figma.com/file/kEKgIN0bWriJGpIZ9hmGI2/Workout-Tracker-Mahiya-and-Adeolu?node-id=313%3A6)

Empowering users to take control of their workout schedules by planning and managing their routines and tracking key features such as performance and body composition.


### Key Features

-    User Onboarding
-    Manage Schedule
-    Manage Daily Workout

## Tech Stack

### Front end built using:

#### React.js with Redux

-    Redux is benifitial for large scale projects, and will allow this project to grow.
-    Redux allows us to avoid prop drilling.

#### Front end deployed to `heroku`

#### [Back end](https://github.com/Lambda-School-Labs/workout-tracker-be-pt7) built using:

#### Knex, Express.js, Node.js

-    Model schema creation
-    Table migrations
-    Connection pooling and seeding

# APIs

## Authentication API

### Auth0

Auth0 is a secure and universal service which ensures authentication and authorization functionality.

## wger - Workout Manager API

https://wger.de/en/exercise/muscle/overview/

We are using this API so our users can select workouts and plan their daily workout routines.
Free and open source, and it provides a lot of data for us.

# Environment Variables

    *  REACT_APP_DOMAIN = workouttracker.auth0.com
    *  REACT_APP_CLIENT_ID = GQ67toqqYZMdF52d3L4gxHH2Vg2M8MH6

# 5️⃣ Content Licenses

🚫For all content - images, icons, etc, use this table to document permission of use. Remove the two placeholders and add you content to this table

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| doodles.png    | Nicole Bennett   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             |

# Testing

## Jest

Jest manages metadata about your source code so it can learn how to run only the relevant test files when a source code file is changed. Jest's interactive watch mode will show you if you're filtering for any file types.

# Installation Instructions

Run using yarn.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request
   
 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/Lambda-School-Labs/workout-tracker-be-pt7) for details on the backend of our project.
