const mongoose=require('mongoose')




mongoose.connect(uri).then(() => {
    console.log("connected to mongodb");
  });

