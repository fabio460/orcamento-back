import { Router } from "express";
import { atualizar, criar, deletar, listar, listarPorId } from "../Controllers/usuarioController";

const usuarioRouter =  Router()
usuarioRouter.get("/listar", listar)
usuarioRouter.get("/listarPorId/:id",listarPorId)
usuarioRouter.post("/criar",criar)
usuarioRouter.put("/atualizar",atualizar)
usuarioRouter.delete("/deletar",deletar)

export default usuarioRouter