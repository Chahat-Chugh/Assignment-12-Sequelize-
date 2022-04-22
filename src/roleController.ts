import {Request,Response} from 'express';
import { Role } from './models/role.js';

class RoleController {
    
    public async getRoles(req: Request,res: Response)
    {
        const roles = await Role.findAll({attributes : ['name']});
        res.status(200).json(roles);
    }

    public async getRoleKeyByName(req:Request,res:Response)
    {
        const roleName = req.params.name;
        const key = await Role.findByPk(roleName,{attributes: ['key']});
        res.status(200).send(key);
     
    }
}

export const roleController = new RoleController();