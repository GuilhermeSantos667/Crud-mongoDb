import {FastifyRequest, FastifyReply} from "fastify";
import { createCustomersServices } from "../services/createCustomersServices";

class createCustomersControler{
  async handle(req:FastifyRequest, res:FastifyReply){

    const {name, email} = req.body as {name:string, email:string}

    

    const customerService = new createCustomersServices()
    const customer = await customerService.execute({name, email})

    res.send(customer)
  }
}

export {createCustomersControler}