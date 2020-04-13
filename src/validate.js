exports.type = (type) => {
  const thr = () => {
    throw new Error("Please provide a database type: sqlite or mysql");
  };
  if (!type) {
    thr();
  }
  if (type == !"mysql" && type == !"sqlite") {
    thr();
  }
};
exports.options = (options, type) => {
  if (!options) {
    throw new Error("Options must be specified");
  }
  if (type === "sqlite" && !options.path) {
    throw new Error("options.path must be specified when using sqlite");
  }
  if (type === "mysql" && (!options.user || !options.host)) {
    throw new Error(
      "options.username, options.password, options.host must be specified when using mysql"
    );
  }
};
