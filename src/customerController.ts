import {Request,Response} from 'express';
import { Customer } from './models/customer.js';

class CustomerController{

    public async getCustomers(req: Request,res: Response)
    {
        const customers = await Customer.findAll({attributes : ['name']});
        res.status(200).json(customers);
    
    }
    public async getCustomerIdByName(req:Request,res:Response)
    {
        const customerName = req.params.name;
        const ID = await Customer.findOne({
           attributes: ['id'],
            where: {
                name : customerName
            }
        });
        res.status(200).send(ID);
    }
}

export const customerController = new CustomerController();


