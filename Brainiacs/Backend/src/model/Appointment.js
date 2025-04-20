const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const appointmentSchema = new mongoose.Schema({
  appointmentId: {
    type: String,
    unique: true,
    default: () => nanoid(), // auto-generate unique ID
  },
  patientId: {
    type: String,
    required: true,
  },
  appointmentDateTime: {
    type: Date,
    required: true,
  },
  reason: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "confirmed", "cancelled", "completed"], // optional, you can adjust
  }
}, {
  timestamps: true, // adds createdAt and updatedAt
  versionKey: false,
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
