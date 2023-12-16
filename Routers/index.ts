import { routerType } from "../types";
import authRouter from "./authRouter";
import orcamentoRouter from "./orcamentoRouter";
import produtoRouter from "./produtoRouter";
import usuarioRouter from "./usuarioRouter";

const router:routerType[] = [
    {endpoint:"/usuario",route:usuarioRouter},
    {endpoint:"/orcamento",route:orcamentoRouter},
    {endpoint:"/produto",route:produtoRouter},
    {endpoint:"/auth",route:authRouter}
]
export default router