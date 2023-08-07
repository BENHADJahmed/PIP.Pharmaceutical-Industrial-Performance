import asyncHandler from 'express-async-handler';
import Machine from '../models/machineModel.js';

// Obtient toutes les machines
const getAllMachines = asyncHandler(async (req, res) => {
  const machines = await Machine.find();
  res.json({ machines });
});

export { getAllMachines };
