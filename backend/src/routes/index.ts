import { Router } from 'express';
import usersRouter from './users.route.js'
import authRouter from './auth.route.js'
import alunoRouter from "./aluno.route.js"
import professorRouter from './professor.router.js';

const router = Router();

router.use('/users', usersRouter);
router.use('/auth', authRouter);
router.use('/aluno', alunoRouter);
router.use('/professor', professorRouter);

export default router;