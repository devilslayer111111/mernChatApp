const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@mernchatapp.igmg0bc.mongodb.net/?retryWrites=true&w=majority&appName=mernChatApp`, ()=> {
  console.log('connected to mongodb')
})
 
