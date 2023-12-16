import { Request, Response } from "express";
import { prisma } from "../prismaClient";
const secretKey = "minhachavesecretata"
import jwt from "jsonwebtoken";

export const logar = async(req:Request, res:Response)=>{
   const {email, senha} = req.body
   const user = await prisma.usuario.findFirst({
    where:{email, senha}
   })
   if (user) {    
       res.json({
        usuario:user,
        token: jwt.sign({user},secretKey)
       })
   }else{
    res.status(500).json("Usuário ou senha inválidos")
   }
}

export const autenticar = async(req:Request, res:Response)=>{
    try {
       const heard = req.headers["x-access-token"] as string
       if (jwt.verify(heard,secretKey)) {
        res.json(jwt.decode(heard))
       }
    
   } catch (error) {
    res.status(500).json("usuário não autenticado")   }
}
