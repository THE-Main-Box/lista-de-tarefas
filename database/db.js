const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const Conect = () => {
  mongoose
    .connect(
      "mongodb+srv://curiosidades381:DBofdb@cluster0.on7xl3g.mongodb.net/",
      {}
    )
    .then(() => {
      console.log("Conectado ao MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = Conect;
