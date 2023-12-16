import { Router } from "express";
import { autenticar, logar } from "../Controllers/authController";

const authRouter = Router()
authRouter.post("/logar",logar)
authRouter.post("/autenticar", autenticar)

export default authRouter