const friends = require("../data/friends");
const bodyParser = require("body-parser");

module.exports = function(app) {
  app.get("/api/friends", (req, res) => {
    return res.json(friends);
  });

  app.post("/api/friends", (req, res) => {
    let userScores = [];
    let totalDifference = [];

    // Puts user inputs into an array
    userScores = Object.values(req.body);

    // Put total difference of all friends into an array called totalDifference
    for (const element of friends.friends) {
      let tempDifference = 0;
      for (let i = 0; i < element.scores.length; i++) {
        tempDifference += Math.abs(
          Number(userScores[i]) - Number(element.scores[i])
        );
      }
      totalDifference.push(tempDifference);
    }

    // Finds the lowest number
    let lowestNumber = Math.min.apply(Math, totalDifference);
    let indexFlag = -1;

    for (let i = 0; i < totalDifference.length; i++) {
      if (lowestNumber === totalDifference[i]) {
        indexFlag = i;
        break;
      }
    }

    res.json(true);
  });
};
