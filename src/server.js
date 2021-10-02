const express = require('express')
const app = express()
const PORT = process.env.PORT || 5001;

const { db } = require('./db/models')
const { usersRoute } = require('./routes/users')
const { postsRoute } = require('./routes/posts')
const { commentsRoute } = require('./routes/posts/comments.js')



app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', usersRoute)
app.use('/api/posts', postsRoute)
app.use('/api/posts/comments', commentsRoute)
app.use('/', express.static(__dirname + '/public'))

db.sync()
    .then(() => {
        app.listen(5001, () => {
            console.log(`server started on http://localhost:${PORT}`)
        })
    })
    .catch((err) => {
        console.error(new Error('Could not start database'))
        console.error(err)
    })