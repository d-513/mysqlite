const validate = require("./validate");
const mysql = require("mysql");
const sqlite3 = require("sqlite3");

/** Main database class. */
module.exports = class Database {
  /**
   * Create a database.
   * @param {String} type - Type of the database (mysql or sqlite).
   * @param {Object} options - Database options. See {@link https://github.com/dada513/mysqlite/blob/master/docs/options.md}.
   */
  constructor(type, options) {
    this.options = options;
    this.type = type;
    validate.type(type);
    validate.options(options, type);
  }

  /**
   * Connect to the database.
   * @returns {Promise}
   */
  connect() {
    return new Promise((resolve, reject) => {
      if (this.type === "mysql") {
        this.connection = mysql.createConnection(this.options);
        this.connection.connect((err) => {
          if (err) {
            reject(err);
          } else {
            resolve(this.connection);
          }
        });
      } else if (this.type === "sqlite") {
        this.connection = new sqlite3.Database(this.options.path, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(this.connection);
          }
        });
      }
    });
  }

  /**
   * Runs an sql query and does not return any rows (Use when inserting, updating etc).
   * @param {String} query - The sql query to run
   * @returns {Promise}
   */
  run(query) {
    return new Promise((resolve, reject) => {
      if (this.type === "sqlite") {
        this.connection.run(query, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      } else if (this.type === "mysql") {
        this.connection.query(query, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      }
    });
  }

  /**
   * Runs an sql query and returns the first result row.
   * @param {String} query - The sql query to run
   * @returns {Promise}
   */
  get(query) {
    return new Promise((resolve, reject) => {
      if (this.type === "sqlite") {
        this.connection.get(query, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      } else if (this.type === "mysql") {
        this.connection.query(query, (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results[0]);
          }
        });
      }
    });
  }

  /**
   * Runs an sql query and returns all of the returned rows.
   * @param {String} query - The sql query to run
   * @returns {Promise}
   */
  all(query) {
    return new Promise((resolve, reject) => {
      if (this.type === "sqlite") {
        this.connection.all(query, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      } else if (this.type === "mysql") {
        this.connection.query(query, (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      }
    });
  }
};
