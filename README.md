## Project Synopsis

This project consist of an RESTful API services create using express.js and web app using React.

## To run the project

- you will need following packages:

  - Node version 12.0 or higher
  - yarn version 1.17 higher
  - git

- clone the project by running "git clone https://github.com/kpgetcha/movies.git"
- Navigate to the cloned directory by "cd movies"
- execute following command in tickets directory "yarn install"
- You will require a Authorization Bearer token to run this project. If you do do not have account, Please visit the following link for more details https://developers.themoviedb.org/3/getting-started/introduction
  - After retrieving the Bearer token, open the "default.json" file, which is located in "./server/config" and update the following entry below with your Bearer token
  ```
  "imdb": {
    "headers": {
      "Authorization": "Bearer {your token}"
    }
  }
  ```
- run yarn start-all from movies directory to start the project
- RESTful services will run on "http://localhost:3001/"
- React web app will run on "http://localhost:3000/"
- Documentation for RESTful APIs can be accessed and executed using swagger by going going to "http://localhost:3001/api-docs/"

## Debugging

- Debugging logs for server are shown in the terminal as well as written to /server/log folder
- Debugging information for client is shown in console of the browser
