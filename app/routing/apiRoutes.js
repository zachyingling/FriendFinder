friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", (req, res) => {
    return res.json(friends);
  });

  app.post("/api/friends", (req, res) => {});
};
