import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  // Define your user schema here
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
  },
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
