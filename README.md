# Tech Quiz Test Suite

## Overview

This project is a MERN stack-based Tech Quiz application that allows users to take a quiz of ten random questions and view their final score. Cypress has been integrated to enable both component and end-to-end testing.

## Features

- Users can start a quiz and answer ten randomly selected questions.

- The final score is displayed at the end of the quiz.

- Cypress test suite includes component testing for the Quiz component and end-to-end tests for the full quiz experience.

- Built using React for the front end, Express and Node.js for the backend, and MongoDB for data storage.

## Technologies Used

- React (Vite)

- Node.js with Express

- MongoDB (Local)

- Cypress for testing

- TypeScript

## Installation and Setup

Ensure you have the following installed:

- Node.js

- MongoDB (Local installation or MongoDB Atlas)

- npm

- Clone the Repository

## Install Dependencies

npm install in root directory
cd client - npm install
cd server - npm install

- Setup Environment Variables

- Start the Application using npm run start:dev

Cypress Testing

- npm run cypress:open

- Select either Component Testing or E2E Testing and run the tests.

## Running Tests in Headless Mode

- npm run test       # Runs all tests
- npm run test:e2e   # Runs only end-to-end tests
- npm run test:component # Runs only component tests

## API Endpoints

- GET /api/questions/random - Fetches a set of ten random quiz questions.


## Contributing

- This project is not taking contributions at this time.

## License

- This project is licensed under the MIT License.

## Video Walkthrough

- Video walkthrough on Screencastify: https://app.screencastify.com/v3/watch/p1czpdoiMTIAC1JVv55e

## Contact

- Maxwell Hurst
- Github: maxwellh22
- Email: maxwell.hurst22@gmail.com

