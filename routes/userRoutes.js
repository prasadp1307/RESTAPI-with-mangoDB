import express from 'express';
import {
  registerUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/', registerUser);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/', getAllUsers);

export default router;
