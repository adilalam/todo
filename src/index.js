const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     res.status(503).send('This site is under maintains')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const User = require('./models/user')
// const Task = require('./models/task')
// const main = async () => {

    // const task = await Task.findById('5f633cec9d54b31708ac0697')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    // const user = await User.findById('5f633c0e11a0a33844a62207')
    // await user.populate('tasks').execPopulate()
    // console.log(user.tasks)
// }

// main()