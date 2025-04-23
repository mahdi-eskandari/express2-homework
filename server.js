require("dotenv").config();

const express = require("express");
const app = express();
const cors = require('cors');
const userMiddle = require("./middlewares/user")

const userRouter = require("./routes/user.route")


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userMiddle)




app.use('/product', userRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`running is server on port ${PORT}`);
})




