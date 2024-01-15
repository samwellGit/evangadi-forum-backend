// require("dotenv").config();

// const express = require("express");
// const app = express();
// const port = 5500;

// const cors = require("cors");
// app.use(cors());

// //db connection
// const dbconnection = require("./Server/dbconfig");

// //user routes middleware file
// const userRoutes = require("./routes/userRoute");
// //question routes middleware file
// const questionsRoutes = require("./routes/questionRoute");
// // authentication middleware file
// const authMiddleware = require("./middleware/authMiddleware");

// //json middleware to extract json data
// app.use(express.json());

// //user routes middleware
// app.use("/api/users", userRoutes);

// //questions routes middleware ??
// app.use("/api/questions", authMiddleware, questionsRoutes);
// //answers routes middleware ??

// async function start() {
//   try {
//     const result = await dbconnection.execute("select 'test' ");
//     app.listen(port);

//     console.log("database connection established");
//     console.log(`listsing on ${port}`);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// start();


require("dotenv").config();
const express = require("express");
const dbconnection = require("./db/dbconfig");
const cors = require("cors");
const userRouter = require("./routes/userRoute");
const questionRouter = require("./routes/questionRoute");
// const answerRouter = require("./routes/answerRoute");
//authentication middleware
const authMiddleware = require("./middleware/authMiddleware");
const app = express();
//port number
const port = 5500;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//user routes middleware
app.use("/api/users", userRouter);

//question routes middleware
 app.use("/api/questions", authMiddleware, questionRouter);
//answer routes middleware
 //app.use("/api/answers", authMiddleware, answerRouter);
async function start() {
  try {
    const result = await dbconnection.execute("select 'test' ");
    await app.listen(port);
    console.log("darabase connection established");
    console.log(`listening${port}`);
  } catch (error) {
    console.log(error.message);
  }
}
start();
