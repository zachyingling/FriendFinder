module.exports = function(app) {
  app.get("/api/friends", (req, res) => {
    return res.json();
  });
};
