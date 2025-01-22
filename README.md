# welcome to flight service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as your root directory of the downloaded projects
- Create a `.env` file in the root directory and add the following envirement variables 
-- `port = 3000`
-Inside the `src/config` folder create a new file `config.json` and then add the following piese of json

```
{
  "development": {
    "username": "root",
    "password": "your db password",
    "database": "Flight_Search_db_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}
 

```
