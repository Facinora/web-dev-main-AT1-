import { Request, Response } from 'express';
import { ProfessorService } from '../services/professor.service';

const professorService = new ProfessorService();

export class ProfessorController {
  async createProfessor(req: Request, res: Response): Promise<void> {
    try {
      const { pessoa_id, unidade_id } = req.body;
      const professor = await professorService.createProfessor({ pessoa_id, unidade_id });
      res.status(201).json(professor);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create professor' });
    }
  }

  async getProfessorById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ error: 'ID is required' });
        return;
      }
      const professor = await professorService.getProfessorById(id);
      if (professor) {
        res.status(200).json(professor);
      } else {
        res.status(404).json({ error: 'Professor not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve professor' });
    }
  }

  async getAllProfessors(req: Request, res: Response): Promise<void> {
    try {
      const professors = await professorService.getAllProfessors();
      res.status(200).json(professors);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve professors' });
    }
  }

  async updateProfessor(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ error: 'ID is required' });
        return;
      }
      const { pessoa_id, unidade_id } = req.body;
      const professor = await professorService.updateProfessor(id, { pessoa_id, unidade_id });
      res.status(200).json(professor);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update professor' });
    }
  }

  async deleteProfessor(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ error: 'ID is required' });
        return;
      }
      const professor = await professorService.deleteProfessor(id);
      res.status(200).json(professor);
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete professor' });
    }
  }
}