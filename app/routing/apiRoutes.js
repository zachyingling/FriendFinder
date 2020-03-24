const friends = require("../data/friends");
const bodyParser = require("body-parser");

module.exports = function(app) {
  app.get("/api/friends", (req, res) => {
    return res.json(friends);
  });

  app.post("/api/friends", (req, res) => {
    let totalUserScore = 0;
    let friendsScores = [];
    for (const property in req.body) {
      totalUserScore += Number(req.body[property]);
    }

    for (const element of friends.friends) {
      let tempFriendScore = 0;
      for (let i = 0; i < element.scores.length; i++) {
        tempFriendScore += Number(element.scores[i]);
      }
      friendsScores.push(tempFriendScore);
    }

    console.log(friendsScores);

    res.json(true);
  });
};
