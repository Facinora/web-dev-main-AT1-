import prisma from "../prisma/client.js"

type Aluno = {
    pessoa_id: string;
    pessoa: any;
}

export async function list() {
    return prisma.aluno.findMany({ orderBy: { id: "asc" }})    
}

export async function getById(id: string) {
    return prisma.aluno.findUnique({ where: { id } })
}

export async function create(data: any) {
    const aluno = prisma.aluno.create({
        data: {
            pessoa: {
                create: {
                    pessoaFisica: {
                        create: {
                            nome: data.nome,
                        }
                    },
                    endereco: {
                        create: {
                            logradouro: data.logradouro,
                            numero: data.numero,
                            bairro: data.bairro,
                            estado: {
                                create: {
                                    uf: data.uf,
                                    nome: data.nome
                                }
                            },
                        }
                    },
                    email: data.email,
                    telefone: data.telefone
                }
            }
        }
    })
    return aluno
}

export async function update(id: string, data: any) {
    const aluno = prisma.aluno.update({
        where: { id },
        data: {
            pessoa: {
                create: {
                    pessoaFisica: {
                        create: {
                            nome: data.nome,
                        }
                    },
                    endereco: {
                        create: {
                            logradouro: data.logradouro,
                            numero: data.numero,
                            bairro: data.bairro,
                            estado: {
                                create: {
                                    uf: data.uf,
                                    nome: data.nome
                                }
                            },
                        }
                    },
                    email: data.email,
                    telefone: data.telefone
                }
            }
        }
    })
    return aluno
}

export async function remove(id: string) {
    return prisma.aluno.delete({ where: { id } })
}