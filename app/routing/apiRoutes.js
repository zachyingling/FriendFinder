const friends = require("../data/friends");
const bodyParser = require("body-parser");

module.exports = function(app) {
  app.get("/api/friends", (req, res) => {
    return res.json(friends);
  });

  app.post("/api/friends", (req, res) => {
    let totalUserScore = 0;
    for (const property in req.body) {
      totalUserScore += Number(req.body[property]);
    }

    console.log(friends);

    res.json(true);
  });
};
