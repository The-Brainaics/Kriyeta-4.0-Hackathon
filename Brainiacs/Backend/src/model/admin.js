const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const { nanoid } = require('nanoid');

const adminSchema = new mongoose.Schema({
  adminId: {
    type: String,
    unique: true,
    default: () => nanoid(),
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid email');
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  // tokens: [{
  //   token: {
  //     type: String,
  //     required: true,
  //   }
  // }]
}, {
  timestamps: true,
  versionKey: false,
});

// Hash password before saving
// adminSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 8);
//   }
//   next();
// });


// Generate JWT
// adminSchema.methods.generateAuthToken = async function () {
//   const admin = this;
//   const token = jwt.sign({ _id: admin._id.toString() }, 'vishal@123');
//   admin.tokens = admin.tokens.concat({ token });
//   await admin.save();
//   return token;
// };


adminSchema.methods.jwtGet= async function (){ /// always use normal function not arrow function in method
  const admin=this; /// this will give the current user object
  const token= await jwt.sign({id:admin._id},"vishal@123",{expiresIn:"1h"});

  return token;
}

// Find admin by credentials
adminSchema.statics.findByCredentials = async function (email, password) {
  const admin = await this.findOne({ email:email });
  if (!admin) {
    throw new Error('Invalid login credentials login');
  }

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    throw new Error('Invalid login credentials pasword');
  }

  return admin;
};




const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
