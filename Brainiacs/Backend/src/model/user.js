const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const { nanoid } = require('nanoid');

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    unique: true,
    default: () => nanoid(),
  },
  fullName: {
    type: String,
    
  },
  
  password: {
    type: String,
    required: true,
    minlength: 3,
  },
  age: {
    type: Number,
    default: 18,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    }
  },
  gender: {
    type: String,
    default:"male",
    validate(value) {
      if (!["male", "female", "other"].includes(value)) {
        throw new Error("Gender is not valid");
      }
    }
  },
  gmail: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email format: " + value);
      }
    }
  },
}, {
  timestamps: true,
  versionKey: false,
});

// 🔐 Hash password before saving
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

// ✅ Method to validate password
userSchema.methods.validPassword = async function (passwordInputByUser) {
  const user = this;
  const hashPassword = user.password;
  const isValid = await bcrypt.compare(passwordInputByUser, hashPassword);
  return isValid;
};


// ✅ Method to generate JWT

userSchema.methods.jwtGet = async function () {
  const user = this;
  const token = jwt.sign({ id: user._id }, "vishal@123", { expiresIn: "1h" });
  return token;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
