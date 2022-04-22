import {Request,Response} from 'express';
import { Customer } from './models/customer.js';
import { Role } from './models/role.js';
import { User } from './models/user.js';


class controller {

    public async getAll(req:Request, res:Response) {

        const users = await User.findAll(
            {
                include:[Role,Customer],
                attributes: {
                    exclude: ['RoleName','CustomerId']
                }
            });
        users.forEach(user => {
            user.setDataValue('created_on',new Date(user.getDataValue('created_on')).toLocaleString('en-US'));
            user.setDataValue('modified_on',new Date(user.getDataValue('modified_on')).toLocaleString('en-US'));
        })
        res.status(200).json(users);
       
    }

   
    public async createUser(req: Request, res: Response) {

        const {firstName,middleName,lastName,email,phone,role,address,customer} = req.body;
       
        try {
            User.create({firstname: firstName,middlename: middleName, lastname: lastName,email: email,phone: phone, address: address, RoleName: role, CustomerId: customer});
            res.status(201).send("User added successfully");
          } catch (error) {
            res.status(400).send(error);
          }
         
    }
    public async updateUser(req: Request, res: Response) {

        const ID = Number(req.params.id);
        const {firstName,middleName,lastName,email,phone,role,address,customer} = req.body;
        try{
            User.update({firstname: firstName,middlename: middleName, lastname: lastName,email: email,phone: phone, address: address, RoleName: role, CustomerId: customer},
            {
                where: {
                    id: ID
                }
            }
            );
            res.status(200).send("Updated");   
        }catch (error) {
            res.status(400).send(error);
        }
    }
    public async deleteUser(req: Request, res: Response) {
       
        const ID = Number(req.params.id);
        try{
            User.destroy({
                where: {
                    id: ID
                }
            });
            res.status(200).send("Deleted");
        } catch (error) {
            res.status(400).send(error);
        }
     
    }
  
}

export const userController = new controller();
