// user.js

import mongoose from '../db.js';

class User extends mongoose.Schema {
  constructor() {
    const user = super({
      name: String,
      email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      resetPasswordToken: {
        type: String
      },
      resetPasswordExpires: {
        type: Date
      }
    });
  }
}

export default mongoose.model('User', new User);
