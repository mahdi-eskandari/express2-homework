
const array_Date = [];


const userMiddle = (req, res, next) => {
    array_Date.push(`method: ${req.method},  ` + new Date())
    console.log(array_Date);
    next()
}

module.exports = userMiddle