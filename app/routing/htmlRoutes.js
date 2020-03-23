module.exports = function(app, path) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
};
