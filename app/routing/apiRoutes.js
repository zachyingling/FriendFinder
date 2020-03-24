const friends = require("../data/friends");
const bodyParser = require("body-parser");

module.exports = function(app) {
  app.get("/api/friends", (req, res) => {
    return res.json(friends);
  });

  app.post("/api/friends", (req, res) => {
    let friendsScores = [];
    let userScores = [];
    let totalDifference = [];

    userScores = Object.values(req.body);

    for (const element of friends.friends) {
      let tempDifference = 0;
      for (let i = 0; i < element.scores.length; i++) {
        tempDifference += Math.abs(
          Number(userScores[i]) - Number(element.scores[i])
        );
      }
      totalDifference.push(tempDifference);
    }

    res.json(true);
  });
};
