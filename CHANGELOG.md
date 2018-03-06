ChangeLog: part-4-data-access
-------------------------
I.    : Create `database` folder in `src/`.

II.   : Create `migrations` and `seeds` folders in `src/database/`.

III.   : Install `knex` and `mysql2` packages as project dependencies thru npm.

IV.    : Create `knexfile.js` config file at project root.

###### Should include:
  + client db name,
  + db connection information
    + host
    + port
    + user
    + password
    + database
  + migration dirctory destination,
  + seeds directory destination

```js
const devConfig = {
  client: 'mysql2',
  connection: {
    host : '127.0.0.1',
    port: '3306',
    user : '----db username----',
    password : '----db user password----',
    database : '----db database name----'
  },
  migrations: {
    directory: './src/database/migrations'
  },
  seeds: {
    directory: './src/database/seeds'
  }
}


module.exports = {
  development: devConfig,
  production: {}
}
```

V.    : Generate knex migration to create schema for a *jobs* table
```sh
knex migrate:make createJobsTable
```

VI.   : Configure the jobTable migration-file (`2017**********_createJobsTable.js`) with the table's schema:
```
- primary key  : increments
- title        : string    
- description  : text  
- location     : string   
- salary       : integer  
- fullTime     : boolean  
```

VII.   : Generate knex migration to create schema for a *companies* table
```sh
knex migrate:make createCompaniesTable
```

VIII.   : Configure the migration-file (`2017*********_createCompaniesTable.js`) with the table's schema
```
- primary key     : increments
- name            : string
- description     : text  
- location        : string  
- imageLink       : string
```

IX.   : Create `dbConnect.js` in `src/database/`.

X  :  Write `dbConnect.js` file
- imports `knex`
- exports function that accepts configuration object

XI  :   Initialize db connection in `server.js`
-- import `dbConnect` function
-- import `knexfile.js` object as `dbConfig` variable
-- pass dbConfig to `dbConnect()` function and store as variable `appDb`

XII :  Put `appDb` on the express app: `app.locals.db = appDb`

XIII Access db instance (`app.locals.db`) on request object in apiRouter for `api/jobs` and `api/companies`
- `req.app.locals.db`

XIV : Query the 'job' and 'company' tables with a general select statement:
```js
db.select()
  .table('company')
  .then((data)=>{
    res.json(data)
  })
```

XV. Create a seed to insert information.
```js
touch ./src/database/seeds/01-jobs.js
```

XVI. Run seed on terminal to propagate database tables.
```sh
knex seed:run
```
