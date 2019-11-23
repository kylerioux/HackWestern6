import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema<IUser>({
    loginId: String
});

mongoose.model('users', userSchema);