import prismaClient from "../prisma";

interface DeleteCustomerProps{
  id:string;
}
class DeleteCustomerService{
async execute({id}: DeleteCustomerProps){

  if(!id){
    throw new Error("solicitacao invalida")
  }

  const findCustomer = await prismaClient.customer.findFirst({
    where:{
      id
    }
  })

  if(!findCustomer){
    throw new Error("cliente nao existe")
  }



  await prismaClient.customer.delete({
    where:{
      id: findCustomer.id
    }
  })


  return {message: "deletado com sucesso"}
}
}
export {DeleteCustomerService}