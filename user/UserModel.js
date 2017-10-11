// user.js

import mongoose from '../db.js';

class User extends mongoose.Schema {
  constructor() {
    const user = super({
      name: String,
      email: String,
      password: String
    })
  }
}

export default mongoose.model('User', new User);
