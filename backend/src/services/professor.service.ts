import { PrismaClient, Professor } from '@prisma/client';

const prisma = new PrismaClient();

export class ProfessorService {
  async createProfessor(data: { pessoa_id: string; unidade_id: string }): Promise<Professor> {
    return await prisma.professor.create({
      data,
    });
  }

  async getProfessorById(id: string): Promise<Professor | null> {
    return await prisma.professor.findUnique({
      where: { id },
      include: { pessoa: true, unidade: true, turmas: true },
    });
  }

  async getAllProfessors(): Promise<Professor[]> {
    return await prisma.professor.findMany({
      include: { pessoa: true, unidade: true, turmas: true },
    });
  }

  async updateProfessor(id: string, data: { pessoa_id?: string; unidade_id?: string }): Promise<Professor> {
    return await prisma.professor.update({
      where: { id },
      data,
    });
  }

  async deleteProfessor(id: string): Promise<Professor> {
    return await prisma.professor.delete({
      where: { id },
    });
  }
}