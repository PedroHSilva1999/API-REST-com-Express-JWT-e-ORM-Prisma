import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
interface IRequest {
    subscription:string
}

export function isAuthenticated(req:Request, res:Response, next:NextFunction){
    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401).end()
    }

    console.log(authHeader)
    const [, token] = authHeader.split(" ")

    try{
        const{subscription} = verify(token,process.env.JWT_SECRET as string) as IRequest 

        req.user_id = subscription
        console.log("Login feito com sucesso")    
        console.log(subscription)
        next()
    }
    catch(err){
        return res.status(401).end()
    }
}
