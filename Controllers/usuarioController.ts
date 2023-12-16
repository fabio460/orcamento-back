import { Request, Response } from "express";
import { prisma } from "../prismaClient";
import { usuarioType } from "../types";

export const listar = async(req:Request, res:Response)=>{
   try {
    const r = await prisma.usuario.findMany({
      include:{
         orcamento:{
            include:{
               produto:true
            }
         }
      }
    })
    res.json(r)
   } catch (error) {
    res.status(400).json("Falha ao listar o usuário!")
   }
}

export const listarPorId = async(req:Request, res:Response)=>{
    const id = req.params.id
    try {
     const r = await prisma.usuario.findUnique({
        where:{id},
        select:{
            id:true,
            email:true,
            nome:true,
            orcamento:{
               include:{
                  produto:true
               }
            },
            
        },        
    })
     res.json(r)
    } catch (error) {
     res.status(400).json("Falha ao listar o usuário!")
    }
 }

 export const criar = async(req:Request, res:Response)=>{
    try {
     const {email, nome, senha}:usuarioType = req.body   
     const r = await prisma.usuario.create({
        data:{
            email,
            nome,
            senha
        }
     })
     res.json("Usuário criado com sucesso!")
    } catch (error) {
     res.status(400).json("Falha ao criar usuário!")
    }
 }

 export const atualizar = async(req:Request, res:Response)=>{
    try {
     const {id ,email, nome, senha}:usuarioType = req.body   
     const r = await prisma.usuario.update({
        data:{
            email,
            nome,
            senha
        },
        where:{id}
     })
     res.json("usuário atualizado com sucesso!")
    } catch (error) {
     res.status(400).json("Falha ao atualizar usuário!")
    }
 }

 export const deletar = async(req:Request, res:Response)=>{
    try {
     const {id}:usuarioType = req.body   
     const r = await prisma.usuario.delete({
        where:{id}
     })
     res.json("usuário deletado com sucesso!")
    } catch (error) {
     res.status(400).json("Falha ao deletar usuário!")
    }
 }


