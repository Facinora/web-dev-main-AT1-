import type {Request, Response} from "express";
import * as AlunoService from "../services/aluno.service";

export async function list(red:Request, res: Response) {
    const aluno = await AlunoService.list();
    res.json(aluno);
}

export const getById = async (req:Request, res: Response) => {
    const id = String (req.params.id);
    const aluno = await AlunoService.getById(id);
    if (!aluno) return res.status(404).json({ message: "Aluno not found" });
    res.json(aluno);
}

export const create = async (req:Request, res: Response) => {
    const {nome, rg, cpf, logradouro} = req.body;
    const aluno = await AlunoService.create({
        nome, rg, cpf, logradouro
    });
    res.status(201).json(aluno);
}

export const update = async (req: Request, res: Response) => {
    const id = String(req.params.id);
    const { nome, rg, cpf, logradouro } = req.body;
    try {
        const user = await AlunoService.update(
            id, { nome, rg, cpf, logradouro }
        );
        res.json(user);
    } catch (error: any) {
        if (error?.code === 'P2025') {
            return res.status(404).json({ message: 'Aluno not found' });
        }
        throw error;
    }
}

export const remove = async (req: Request, res: Response) => {
    const id = String(req.params.id);
    try {
        const user = await AlunoService.remove(id);
        res.status(204).send();
    } catch (error: any) {
        if (error?.code === 'P2025') {
            return res.status(404).json({ message: 'User not found' });
        }
        throw error;
    }
}