import { Request, Response } from "express";
import { prisma } from "../prismaClient";
import { produtoType } from "../types";

export const listar = async(req:Request, res:Response)=>{
   try {
    const r = await prisma.produto.findMany()
    res.json(r)
   } catch (error) {
    res.status(400).json("Falha ao listar o produto!")
   }
}

export const listarPorId = async(req:Request, res:Response)=>{
    const id = req.params.id
    try {
     const r = await prisma.produto.findUnique({
        where:{id},       
    })
     res.json(r)
    } catch (error) {
     res.status(400).json("Falha ao listar o produto!")
    }
 }

 export const criar = async(req:Request, res:Response)=>{
    try {
     const {idDoOrcamento, loja, endeerecoDaLoja, marca, nome, valor}:produtoType = req.body   
     const r = await prisma.produto.create({
        data:{
           endeerecoDaLoja,
           loja,
           marca,
           nome,
           valor,
           idDoOrcamento,
           selecionado:true
        }
     })
     res.json("produto criado com sucesso!")
    } catch (error) {
     res.status(400).json("Falha ao criar produto!")
    }
 }

 export const atualizar = async(req:Request, res:Response)=>{
    try {
     const {id, endeerecoDaLoja, loja, marca, nome, valor}:produtoType = req.body   
     const prod = await prisma.produto.findUnique({
      where:{
         id
      },
      select:{dataDoPreco:true}
     })
     await prisma.historicoDeDatasDoProduto.create({
      data:{
         datas:prod?.dataDoPreco.toString() as string,
         idDoProduto:id
      }
     })
     const r = await prisma.produto.update({
        data:{
            endeerecoDaLoja,
            loja,
            marca,
            nome,
            valor,
            selecionado:true
        },
        where:{id}
     })
     res.json("produto atualizado com sucesso!")
    } catch (error) {
     res.status(400).json("Falha ao atualizar produto!")
    }
 }

export const atualizarSelecionado = async(req:Request, res:Response)=>{
   try {
    const {id, selecionado}:produtoType = req.body   
    const r = await prisma.produto.update({
       data:{
           selecionado
       },
       where:{id}
    })
    res.json("produto selecionado com sucesso!")
   } catch (error) {
    res.status(400).json("Falha ao selecionado produto!")
   }
}

 export const deletar = async(req:Request, res:Response)=>{
    try {
     const {id}:produtoType = req.body   
     const r = await prisma.produto.delete({
        where:{id}
     })
     res.json("produto deletado com sucesso!")
    } catch (error) {
     res.status(400).json("Falha ao deletar produto!")
    }
 }


