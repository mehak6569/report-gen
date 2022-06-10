import mongoose from "mongoose";

const Connection = async ( ) => {
    const Url = 

    await mongoose 
         .connect(Url, {
             useNewUrlParser: true,
             useUnifiedTopology: true,
             useFindAndModify: false,
             useCreateIndex: true,
         })
         .then(console.log("Database connected successfully"))
         .catch((err) => console.log(err));

         };
         export default Connection;
