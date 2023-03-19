const express = require('express')
const mongoose = require('mongoose')
const authRouter =  require('./authRouter')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use("/auth", authRouter)

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://sotakemind:kzRzST6yfeCJlVcj@cluster0.jwwvtii.mongodb.net/auth_practice?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()