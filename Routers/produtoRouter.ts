import { Router } from "express";
import { atualizar, atualizarSelecionado, criar, deletar, listar, listarPorId } from "../Controllers/produtoController";

const produtoRouter =  Router()
produtoRouter.get("/listar", listar)
produtoRouter.get("/listarPorId/:id",listarPorId)
produtoRouter.post("/criar",criar)
produtoRouter.put("/atualizar",atualizar)
produtoRouter.put("/selecionar", atualizarSelecionado)
produtoRouter.delete("/deletar",deletar)

export default produtoRouter