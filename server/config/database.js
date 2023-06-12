const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected!!");
  } catch (error) {
    console.error("Databse connstion is failed:", error);
  }
};

module.exports = dbConnection;
