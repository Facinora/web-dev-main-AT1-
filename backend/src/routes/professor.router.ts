import { Router } from 'express';
import { ProfessorController } from '../controllers/professor.controller';

const router = Router();
const professorController = new ProfessorController();

router.post('/professors', (req, res) => professorController.createProfessor(req, res));
router.get('/professors/:id', (req, res) => professorController.getProfessorById(req, res));
router.get('/professors', (req, res) => professorController.getAllProfessors(req, res));
router.put('/professors/:id', (req, res) => professorController.updateProfessor(req, res));
router.delete('/professors/:id', (req, res) => professorController.deleteProfessor(req, res));

export default router;