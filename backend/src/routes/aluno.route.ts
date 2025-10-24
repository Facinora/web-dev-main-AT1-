import { Router } from "express";
import * as AlunoController from "../controllers/aluno.controller";

const router = Router();

router.get('/', AlunoController.list);
router.get('/:id', AlunoController.getById);
router.post('/', AlunoController.create);
router.put('/:id', AlunoController.update);
router.delete('/:id', AlunoController.remove);

export default router;