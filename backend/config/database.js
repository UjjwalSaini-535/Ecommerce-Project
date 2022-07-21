const mongoose = require("mongoose");

const db = process.env.DATABASE.replace("<PASSWORD>", process.env.password);

exports.connectToDataBase = () => {
  mongoose.connect(db).then(() => {
    console.log("DB connection successful.");
  });
};
