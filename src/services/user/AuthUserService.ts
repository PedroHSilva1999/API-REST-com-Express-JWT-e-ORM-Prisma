import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
interface IRequest {
    email:string,
    password:string
}

class AuthUserService{
    async execute({email,password}:IRequest){
        const user = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })

        if(!user){
            throw new Error("User/password incorrect")
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("User/password incorrect")
        }

        const token = sign({
            email:user.email,
            id:user.id
        },
        process.env.JWT_SECRET as string,{
            subject:user.id,
            expiresIn:"5d"
    })
    console.log("Login feito com sucesso") 

    return {
        
        id:user.id,
        email:user.email,
        token:token
        
    }
    
}}

export {AuthUserService}

