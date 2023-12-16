import { Request, Response } from "express";
import { prisma } from "../prismaClient";
import { orcamentoType } from "../types";

export const listar = async(req:Request, res:Response)=>{
   try {
    const r = await prisma.orcamento.findMany()
    res.json(r)
   } catch (error) {
    res.status(400).json("Falha ao listar o orçamento!")
   }
}

export const listarPorId = async(req:Request, res:Response)=>{
    const id = req.params.id
    try {
     const r = await prisma.orcamento.findUnique({
        where:{
            id
        },
        include:{
            produto:true,
        }       
    })
     res.json(r)
    } catch (error) {
     res.status(400).json("Falha ao listar o orçamento!")
    }
 }

 export const criar = async(req:Request, res:Response)=>{
    try {
     const {nome ,idDoUsuario}:orcamentoType = req.body   
     const r = await prisma.orcamento.create({
        data:{
            idDoUsuario,
            nome,
        }
     })
     res.json(" Orçamento criado com sucesso!")
    } catch (error) {
     res.status(400).json("Falha ao criar orçamento!")
    }
 }

 export const atualizar = async(req:Request, res:Response)=>{
    try {
     const {id , nome}:orcamentoType = req.body   
     const r = await prisma.orcamento.update({
        data:{
            nome
        },
        where:{id}
     })
     res.json("orçamento atualizado com sucesso!")
    } catch (error) {
     res.status(400).json("Falha ao atualizar orçamento!")
    }
 }

 export const deletar = async(req:Request, res:Response)=>{
    try {
     const {id}:orcamentoType = req.body   
     const r = await prisma.orcamento.delete({
        where:{id}
     })
     res.json("orçamento deletado com sucesso!")
    } catch (error) {
     res.status(400).json("Falha ao deletar orçamento!")
    }
 }


