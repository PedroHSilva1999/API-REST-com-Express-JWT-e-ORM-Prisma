import express from "express";
import {router} from "./routes"
import cors from "cors"
import { Request,Response,NextFunction } from "express"
import "express-async-errors"
const app = express();
app.use(express.json())


app.use(cors())
app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    if(err instanceof Error){
        return res.status(400).json({
            error:err.message
        })
    }

    return res.status(500).json({
        status:"error",
        
    })
})
app.use(router) 
app.listen(3333, () => {
    console.log("Server is running on port 3333");
});