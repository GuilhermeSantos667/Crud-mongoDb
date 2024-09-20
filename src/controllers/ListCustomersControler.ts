import { FastifyRequest, FastifyReply } from "fastify";
import {ListCustomersServices} from "../services/ListCustomersServices"


class listCustomersControler{
  async handle(req:FastifyRequest, res:FastifyReply){



    const listar = new ListCustomersServices()
    const customer = await listar.execute()
 
    res.send(customer)
  }
}
export {listCustomersControler}