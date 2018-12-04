module.exports = {
  addUser: (req, res, next) => {
    const { username, password } = req.body;
    const db = req.app.get("db");
    db.add_user([username, password])
      .then(() => res.status(200).send(), console.log("Add user seccesful"))
      .catch(error => console.log("There was an error adding a user", error));
  },
  loginUser: (req, res, next) => {
    const { username, password } = req.body;
    const db = req.app.get("db");
    db.get_user([username, password])
      .then(
        user => res.status(200).send(user),
        console.log("Login successfull")
      )
      .catch(err => console.log("Login Error!", err));
  }
};
