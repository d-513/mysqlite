/** Main database class. See {@link https://github.com/dada513/mysqlite/blob/master/docs/Database.md} */
module.exports.Database = require("./Database");
/**
 * Escapes a value for use in an sql query.
 * @param {String} - The string to escape
 * @returns {String} - The escaped value
 */
module.exports.escape = require("sqlstring").escape;
/**
 * Escapes an ID for use in an sql query.
 * @param {Number} - The ID to escape
 * @returns {String} - The escaped value
 */
module.exports.escapeId = require("sqlstring").escapeId;
