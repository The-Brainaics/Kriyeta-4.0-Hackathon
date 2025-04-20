const express = require("express");
const adminRouter = express.Router();
const bcrypt = require("bcryptjs");
const Admin = require("../model/admin");
const cookieParser = require("cookie-parser");
const validator = require("validator");
const { validateData } = require("../util/validator"); // optional

adminRouter.post("/admin/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Optional: validateData(req);

    if (!validator.isEmail(email)) {
      throw new Error("Invalid email format: " + email);
    }

    const existing = await Admin.findOne({ email });
    if (existing) {
      throw new Error("Email already exists");
    }

    // const encryptedPassword = await bcrypt.hash(password, 10);

    const admin = new Admin({
      name,
      email,
      password ,
    });
    const adminId=admin._id.toString();

    const newAdminId=admin  .name+adminId[2]+adminId[4];
    admin.adminId=newAdminId;
    
    await admin.save();

    res.status(200).json({ message:"connection request  successfully",
        data:newAdminId})
  } catch (err) {
    res.status(400).send("Error in signup: " + err.message);
  }
});

adminRouter.post("/admin/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!validator.isEmail(email)) {
      throw new Error("Invalid email format: " + email);
    }

    const admin = await Admin.findOne({ email:email });
    if (!admin) {
      throw new Error("Invalid credentials");
    }
    else{

    const isMatch = await Admin.findByCredentials(email,password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }
    else{
   
    const token = await admin.jwtGet();

    res.cookie("token", token, {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days
    });

    res.send(admin);
  }
  }} catch (err) {
    res.status(401).send("Error: " + err.message);
  }
});

adminRouter.post("/admin/logout", async (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
    });
    res.send("Logout successful");
  } catch (err) {
    res.status(401).send("Logout error: " + err.message);
  }
});

module.exports = adminRouter;

