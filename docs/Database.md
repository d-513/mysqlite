<a name="Database"></a>

## Database

Main database class.

**Kind**: static class of <code>mysqlite</code>

- [Database](#Database)
  - [new Database(type, options)](#new_Database_new)
  - [.connect()](#Database+connect) ⇒ <code>Promise</code>
  - [.run(query)](#Database+run) ⇒ <code>Promise</code>
  - [.get(query)](#Database+get) ⇒ <code>Promise</code>
  - [.all(query)](#Database+all) ⇒ <code>Promise</code>

<a name="new_Database_new"></a>

### new Database(type, options)

Create a database.

| Param   | Type                | Description                                     |
| ------- | ------------------- | ----------------------------------------------- |
| type    | <code>String</code> | Type of the database (mysql or sqlite).         |
| options | <code>Object</code> | Database options. See [options.md](options.md). |

<a name="Database+connect"></a>

### Database#connect() ⇒ <code>Promise</code>

Connect to the database.

**Kind**: instance method of [<code>Database</code>](#Database)  
<a name="Database+run"></a>

### Database#run(query) ⇒ <code>Promise</code>

Runs an sql query and does not return any rows (Use when inserting, updating etc).

**Kind**: instance method of [<code>Database</code>](#Database)

| Param | Type                | Description          |
| ----- | ------------------- | -------------------- |
| query | <code>String</code> | The sql query to run |

<a name="Database+get"></a>

### Database#get(query) ⇒ <code>Promise</code>

Runs an sql query and returns the first result row.

**Kind**: instance method of [<code>Database</code>](#Database)

| Param | Type                | Description          |
| ----- | ------------------- | -------------------- |
| query | <code>String</code> | The sql query to run |

<a name="Database+all"></a>

### Database#all(query) ⇒ <code>Promise</code>

Runs an sql query and returns all of the returned rows.

**Kind**: instance method of [<code>Database</code>](#Database)

| Param | Type                | Description          |
| ----- | ------------------- | -------------------- |
| query | <code>String</code> | The sql query to run |
