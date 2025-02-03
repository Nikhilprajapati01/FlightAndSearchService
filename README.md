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


- once you've added your db config as listed above, go to the src folder from your terminal and service `npx sequelize db:create`

- create a model using `npx sequelize-cli db:generate --name "" --attributes ""`
- migrate file ` using npm sequelize-cli db:migrate`


## db design

- airplane tables
- flight tables
- Airport
- city


- a flight  belongs to an airplane but one airplane can be used in multiple flight
- A city has many airports but a airport belongs to a city
- one airport can have many flight, but a flight belongs to a one airport

##  Tables

## city-> id, name, createdat, updatedat

## airport -> id, name, addres, City_id , ccreatedat, updatedat
     relation - > City has many airport and Airport belongs to a city ( one to many)

## airplane -> id, modelno , capacity


