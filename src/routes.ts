import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply  } from "fastify";
import {createCustomersControler} from "./controllers/createCustomersControler"
import {listCustomersControler} from "./controllers/ListCustomersControler"
import { DeleteCustomerControler } from "./controllers/DeleteCustomerDelete";

export async function routes(fastify:FastifyInstance, option:FastifyPluginOptions) {
  
fastify.get('/teste', async (req:FastifyRequest, res: FastifyReply) =>{

  return {ok:true}


})


fastify.post('/customers', async(req: FastifyRequest, res:FastifyReply) =>{
  return new createCustomersControler().handle(req, res)
})

fastify.get('/customers', async(req: FastifyRequest, res:FastifyReply) =>{
  return new listCustomersControler().handle(req, res)
})
fastify.delete('/customers', async(req: FastifyRequest, res:FastifyReply) =>{
  return new DeleteCustomerControler().handle(req, res)
})
}