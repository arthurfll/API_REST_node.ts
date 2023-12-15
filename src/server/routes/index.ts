import {Router,Request,Response} from "express";
const router = Router();
import {CidadesController} from "./../controllers"


router.get("/",(req:Request,res:Response) => {
    return res.send("hello world");
  });

router.post("/cidade",CidadesController.create);
export { router }