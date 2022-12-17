const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const chalk = require('chalk')

const app = express()

const PORT = config.get('port') ?? 3000

if (process.env.NODE_ENV === 'production') {
    console.log('Production')
}else {
    console.log('Development')
}

app.listen(PORT, () =>
    console.log(chalk.green(`Server has been started on port ${PORT}`))
)
