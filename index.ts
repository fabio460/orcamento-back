import express from "express";
import router from "./Routers";
import cors from "cors";
const app = express()
app.use(express.json())
app.use(cors())
router.map(e=>{
    return app.use(e.endpoint,e.route)
})
app.listen(4000,()=> console.log("Sistema rodando na porta 4000"))