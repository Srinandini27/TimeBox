const express = require('express');
const router = express.Router();
const generatePlan = require('./openaiService');
const syncCalendar = require('./calendarService');

router.post('/plan', async (req, res) => {
  const { tasks, availability } = req.body;
  const plan = await generatePlan(tasks, availability);
  await syncCalendar(plan);
  res.json(plan);
});

module.exports = router;