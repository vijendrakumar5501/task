const mongoose=require('mongoose')
require('dotenv')
const uri=process.env.uri





mongoose.connect(uri).then(() => {
    console.log("connected to mongodb");
  });

