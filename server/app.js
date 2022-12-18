const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const chalk = require('chalk')
const initDatabase = require('./startUp/initDatabase')

mongoose.set('strictQuery', false);
const app = express()

const PORT = config.get('port') ?? 3000

// if (process.env.NODE_ENV === 'production') {
//     console.log('Production')
// }else {
//     console.log('Development')
// }
async function start(){
   try{
       mongoose.connection.once('open',()=>{
           initDatabase()
       })
      await mongoose.connect(config.get('mongoUri'))
       console.log(chalk.green('MongoDb connected'))
       app.listen(PORT, () =>
           console.log(chalk.green(`Server has been started on port ${PORT}`))
       )
   } catch (e) {
       console.log(chalk.red(e.message))
       process.exit(1)
   }


}

start()

