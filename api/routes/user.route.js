import express from 'express'
import { contact } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/contact', contact)

export default router;