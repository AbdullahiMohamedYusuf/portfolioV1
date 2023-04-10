import mongoose from "mongoose";

const connectDb = async () => {
    try {
      await mongoose.connect('mongodb+srv://Abdullahi:ndcDluxfygty9Mu@cluster1.mkycnbd.mongodb.net/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log("Successfully conncted to database!")
    } catch (error) {
      console.log(error.message)
    }
  }


connectDb()

const Item = new mongoose.Schema({
    //User is required with type string
    title: {type: String, required: true},
    discription: {type:String, required: true},
    price: {type:Number, required: true},
    //Storing Likes here. Has a defualt value of 0
    likes: {type:Number, default: 0}
});
//Creating the Schemas
var Items = mongoose.model("Items", Item);


export function CreateItem(user){
    try {
        Items.insertMany({
            title: user.title,
            discription: user.discription,
            price: user.price,
        });
        console.log("User Successufully added!")
    }catch(err){
        console.log('Seems something went wrong!', err)
    }
}