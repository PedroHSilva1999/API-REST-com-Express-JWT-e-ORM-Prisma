import prismaClient from "../../prisma";
import {hash} from "bcryptjs"
interface IUserRequest{
    email:string;
    password:string;
}

class CreateUserService {
    //Verifico se o email e a senha foram passados
    async execute({email,password}:IUserRequest){
        if(!email || !password){
            throw new Error("Email and password are required")
        }

        //Verifico se o usuário já existe

       const userAlreadyExists = await prismaClient.user.findFirst({
        where:{
            email: email
        }
       })

       //Se o usuário já existe, lanço um erro
       if(userAlreadyExists){
        throw new Error("User already exists")
       }
        //  Criptografa a senha	
       const passwordHash = await hash(password,12)

       const user = await prismaClient.user.create({
        data:{
            email: email,
            password: passwordHash
        },
        //Seleciono os dados que quero retornar
        select:{
            id:true,
            email:true,
            createdAt:true
        }
       })

       //Retorno o usuário criado

       return user
        
}}

export {CreateUserService}

