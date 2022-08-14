# John's technical exercise project

## Overview
### Tech Stack:
* `Nest.js`: Backend framework.
* `Prisma` ORM for the databse
* `Docker` for running the databases in containers
* `Swagger`: Used for automatically generating the API docs and provide interactive UI for API testing. To view the swagger UI, after starting the application, visit http://localhost:8000/api
* `Jest` and `SuperTest`: Testing the endpoints

### Database implementation
There are two tables: Customer and Opportunity. Opportunity records hold a foreign key to Customer record.
  *Assumptions*: 
* in `Customer` table, except the auto-increment id field, email is also unique field 
* there is a `Prisma` module that handles the communication between the application and the DB. The migration script can be found in `file://./db/schema.prisma


  ### Endpoints
  To view and test the endpoints, please start the server and visit `http://localhost:8000/api`

  ### Open API Doc
  The YAML file can be found in `file://./swagger/api.yaml`
  To check Swagger UI, please start the server and visit `http://localhost:8000/api`

  To generate Swagger API doc, please visit `http://localhost:8000/api-yaml`



## Key Dependencies

This application has dependencies on the following, make sure each is installed locally for development and automated testing:

* Node.js
* PostgreSQL
* Docker


## Starting the Server

```
$ yarn
$ yarn db:dev:restart
$ yarn start:dev
```

**Note: If you are using windows, please go to `package.json`, find the `sleep 1` and replace it with `timeout /t 1`**

### Yarn Script Explaination
`yarn db:dev:restart`: Docker will pull the required image and setup the postgres SQL container. After that, migration scripts will be executed and mock data will be populated. 

`yarn start:dev`: start the application. The application runs on `8000`, and watches for any file changes.

Note: Restarting the container will clear all existing data.



## Starting the Testing

```
$ yarn pretest:e2e
$ yarn test:e2e
```

Note: If you are using windows, please go to package.json, find the `sleep 1` and replace it with `timeout /t 1`

### Yarn Script Explaination
`yarn pretest:e2e`:  Docker will setup a different DB container for automated testing. After that, migration scripts will be executed and mock data will be populated.

`yarn test:e2e`: Test code will be executed.

Note: that port `8003` will be used. and jest will watche for any test file changes.


