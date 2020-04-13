# mysqlite

### Features:

- Toggleable mysql and sqlite database
- 100% Promise-Based

### API

See [API.md](https://github.com/dada513/mysqlite/blob/master/docs/API.md)
and [Database.md](https://github.com/dada513/mysqlite/blob/master/docs/Database.md)

### Installation

`npm i mysqlite`

### Usage

Example:

```js
const mysqlite = require("mysqlite");
const db = new mysqlite.Database("sqlite", {
  path:
    "./database.db" /* Will create a file database.sqlite in the current directory and use it as a db. */,
});
db.connect().then(async () => {
  await db.run(
    `INSERT INTO table VALUES (value)`
  ); /* insert value into table */
  await db.get(
    `SELECT * FROM table WHERE user=\'egg\'`
  ); /* returns a single result row or undefined if nothing found */
  await db.all(`SELECT * FROM table`); /* returns all result rows as an array */
});
```

To use mysql, just change this line:

```js
const db = new mysqlite.Database("sqlite", {
  path:
    "./database.db" /* Will create a file database.sqlite in the current directory and use it as a db. */,
});
```

To for example:

```js
const db = new mysqlite.Database("mysql", {
  /* notice we changed the first parameter from sqlite to mysql */
  host: "localhost",
  port: 3306,
  user: "root",
  password: "" /* blank password */,
  database: "something",
});
```

For a list of available options, see [options.md](https://github.com/dada513/mysqlite/blob/master/docs/options.md)  
Please keep in mind that there may be some statement differences in MySQL and SQLite, but most statements will work the same.

### Supported node versions

See [node-versions.md](https://github.com/dada513/mysqlite/blob/master/docs/node-versions.md)
