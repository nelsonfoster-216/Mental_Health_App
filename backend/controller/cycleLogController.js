import CycleLog from '../models/CycleLog.js';

// Get all cycle logs for a user
export const getCycleLogs = async (req, res) => {
  try {
    const { username } = req.params;
    const logs = await CycleLog.find({ username }).sort({ timestamp: -1 });
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new cycle log
export const createCycleLog = async (req, res) => {
  try {
    const { username } = req.params;
    const { state, intensity, notes, timestamp } = req.body;
    
    const newLog = new CycleLog({
      username,
      state,
      intensity,
      notes,
      timestamp: timestamp || new Date()
    });
    
    const savedLog = await newLog.save();
    res.status(201).json(savedLog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a specific log by ID
export const getCycleLogById = async (req, res) => {
  try {
    const { id } = req.params;
    const log = await CycleLog.findById(id);
    
    if (!log) {
      return res.status(404).json({ message: 'Log not found' });
    }
    
    res.status(200).json(log);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a log
export const updateCycleLog = async (req, res) => {
  try {
    const { id } = req.params;
    const { state, intensity, notes } = req.body;
    
    const updatedLog = await CycleLog.findByIdAndUpdate(
      id,
      { state, intensity, notes },
      { new: true }
    );
    
    if (!updatedLog) {
      return res.status(404).json({ message: 'Log not found' });
    }
    
    res.status(200).json(updatedLog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a log
export const deleteCycleLog = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLog = await CycleLog.findByIdAndDelete(id);
    
    if (!deletedLog) {
      return res.status(404).json({ message: 'Log not found' });
    }
    
    res.status(200).json({ message: 'Log deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 