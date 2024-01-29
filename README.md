## UPDATE: FIREBASE AUTH / STORAGE / FIRESTORE EXAMPLE

This template is an example of using:

- FIREBASE AUTHENTICATION
  - authenticate users using passwords or federated (google)
- FIREBASE FIRESTORE - NOSQL Database
  - store aditional user data (full name) and retrieving that data once the user is logged in
- FIREBASE STORAGE - File storage system
  - allow users to upload and retrieve their files in a folder named after their user id

### Setup & Use

Read below on how to setup the project, this part is just for firebase:

1. Copy the `/frontend/.env.sample` file into a new one `/frontend/.env`
2. Go to https://console.firebase.google.com and create a project
3. Add a (web) app to your project and your credentials will be generated in step 2 - **Add Firebase SDK**
4. Fill in the `/frontend/.env` with the Firebase SDK credentials generated in the previous step ( the **firebaseConfig** object)]
5. Go to Firebase Storage service, on the Rules tab and update it to allow read / write only if the user is logged in:
   rules_version = '2';
   service firebase.storage {
   match /b/{bucket}/o {
   match /{allPaths=\*\*} {
   allow read, write: if request.auth != null;
   }
   }
   }
6. Take a break, that was some real hard work you did there !

---

## Concept

This template is meant to serve as a foundation for every P2/P3 following the React-Express-MySQL stack, as learned in Wild Code School.
It's pre-configured with a set of tools which'll help students produce industry-quality and easier-to-maintain code, while staying as simple as possible to use.

## Setup & Use

### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm run setup`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_

### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

## FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated
