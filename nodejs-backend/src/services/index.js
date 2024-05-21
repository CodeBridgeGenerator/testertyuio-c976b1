const users = require("./users/users.service.js");
const userProfiles = require("./userProfiles/userProfiles.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
  app.configure(userProfiles);
    // ~cb-add-configure-service-name~
};
