import {FastifyRequest, FastifyReply} from "fastify";
import {DeleteCustomerService} from "../services/DeleteCustomerService"
import exp from "constants";

class DeleteCustomerControler{
async handle(req: FastifyRequest, res:FastifyReply){
  
  const {id} = req.query as {id:string}

  const customerService = new DeleteCustomerService()

  const customer = await customerService.execute({id})


  res.send(customer)
}
}
export {DeleteCustomerControler}