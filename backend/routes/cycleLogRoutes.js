import express from 'express';
import {
  getCycleLogs,
  createCycleLog,
  getCycleLogById,
  updateCycleLog,
  deleteCycleLog
} from '../controller/cycleLogController.js';

const router = express.Router();

// Get all logs for a user and create a new log
router.route('/cycleLogs/:username')
  .get(getCycleLogs)
  .post(createCycleLog);

// Get, update, or delete a specific log
router.route('/cycleLogs/:username/:id')
  .get(getCycleLogById)
  .put(updateCycleLog)
  .delete(deleteCycleLog);

export default router; 