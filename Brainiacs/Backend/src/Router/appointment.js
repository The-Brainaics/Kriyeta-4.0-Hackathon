const express = require("express");
const Appointment = require("../model/Appointment");
const appointmentRouter = express.Router();
const {userAuth}= require("../middlewares/auth");

// ✅ Create a new appointment
appointmentRouter.post("/appointments", userAuth,async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).send(appointment);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// ✅ Get all appointments
appointmentRouter.get("/appointments", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.send(appointments);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// ✅ Get appointment by ID
appointmentRouter.get("/appointments/:id", async (req, res) => {
  try {
    const appointment = await Appointment.findOne({ appointmentId: req.params.id });
    if (!appointment) {
      return res.status(404).send({ error: "Appointment not found" });
    }
    res.send(appointment);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// ✅ Update appointment status
appointmentRouter.patch("/appointments/:id", async (req, res) => {
  const allowedUpdates = ["status", "appointmentDateTime", "reason"];
  const updates = Object.keys(req.body);
  const isValid = updates.every(update => allowedUpdates.includes(update));

  if (!isValid) {
    return res.status(400).send({ error: "Invalid updates" });
  }

  try {
    const appointment = await Appointment.findOne({ appointmentId: req.params.id });
    if (!appointment) {
      return res.status(404).send({ error: "Appointment not found" });
    }

    updates.forEach(key => appointment[key] = req.body[key]);
    await appointment.save();
    res.send(appointment);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// ✅ Delete appointment
appointmentRouter.delete("/appointments/:id", async (req, res) => {
  try {
    const appointment = await Appointment.findOneAndDelete({ appointmentId: req.params.id });
    if (!appointment) {
      return res.status(404).send({ error: "Appointment not found" });
    }
    res.send({ message: "Appointment deleted", appointment });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = appointmentRouter;
