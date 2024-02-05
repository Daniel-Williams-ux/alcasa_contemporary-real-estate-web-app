import express from 'express';
import { form } from '../controllers/form.controller.js';

const router = express.Router();

router.post('/form', form);

export default router;