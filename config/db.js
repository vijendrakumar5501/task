const mongoose=require('mongoose')

// GStdvSIoYYpzo3tu
const uri = "mongodb+srv://vijendra:GStdvSIoYYpzo3tu@cluster0.kjqpqat.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri).then(() => {
    console.log("connected to mongodb");
  });

