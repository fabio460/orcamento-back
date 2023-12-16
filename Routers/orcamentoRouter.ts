import { Router } from "express";
import { atualizar, criar, deletar, listar, listarPorId } from "../Controllers/orcamentoController";

const orcamentoRouter =  Router()
orcamentoRouter.get("/listar", listar)
orcamentoRouter.get("/listarPorId/:id",listarPorId)
orcamentoRouter.post("/criar",criar)
orcamentoRouter.put("/atualizar",atualizar)
orcamentoRouter.delete("/deletar",deletar)

export default orcamentoRouter