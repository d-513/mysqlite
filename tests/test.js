require("colors");
const mysqlite = require("../src/index");
const env = require("./env");
const logger = {
  error: (message) => {
    console.log(`[ERROR]: `.red + message);
  },
  info: (message) => console.log(`[INFO]: `.blue + message),
};

async function sqltest(type, opts) {
  const data = [];
  const test = (message) => data.push(message);
  const db = new mysqlite.Database(type, opts);
  await db.connect();
  if (type === "mysql") {
    await db.run(`CREATE DATABASE IF NOT EXISTS tests`);
    await db.run("USE tests");
  }
  test(
    await db.run(`DROP TABLE IF EXISTS users
  `)
  );
  test(
    await db.run(
      `CREATE TABLE users(id INT AUTO_INCREMENT PRIMARY KEY, username TEXT);`
    )
  );
  test(await db.run(`INSERT INTO users (username) VALUES ('egg')`));
  test(await db.get(`SELECT * FROM users WHERE username='egg'`));
  test(await db.get(`SELECT * FROM users WHERE username='egg12'`));
  test(await db.all(`SELECT * FROM users`));
  return data;
}
sqltest("sqlite", {
  path: "./tests/database.sqlite",
}).then((data) => logger.info("SQLITE: " + JSON.stringify(data, null, 2)));
sqltest("mysql", env).then((data) =>
  logger.info("MYSQL: " + JSON.stringify(data, null, 2))
);

process.on("unhandledRejection", (reason) => {
  throw reason; /* rethrow errors so the CI fails if something is not working as expected */
});
