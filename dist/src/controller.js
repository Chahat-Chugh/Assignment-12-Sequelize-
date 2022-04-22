import { Customer } from './models/customer.js';
import { Role } from './models/role.js';
import { User } from './models/user.js';
class controller {
    async getAll(req, res) {
        const users = await User.findAll({
            include: [Role, Customer],
            attributes: {
                exclude: ['RoleName', 'CustomerId']
            }
        });
        users.forEach(user => {
            user.setDataValue('created_on', new Date(user.getDataValue('created_on')).toLocaleString('en-US'));
            user.setDataValue('modified_on', new Date(user.getDataValue('modified_on')).toLocaleString('en-US'));
        });
        res.status(200).json(users);
    }
    async createUser(req, res) {
        const { firstName, middleName, lastName, email, phone, role, address, customer } = req.body;
        try {
            User.create({ firstname: firstName, middlename: middleName, lastname: lastName, email: email, phone: phone, address: address, RoleName: role, CustomerId: customer });
            res.status(201).send("User added successfully");
        }
        catch (error) {
            res.status(400).send(error);
        }
    }
    async updateUser(req, res) {
        const ID = Number(req.params.id);
        const { firstName, middleName, lastName, email, phone, role, address, customer } = req.body;
        try {
            User.update({ firstname: firstName, middlename: middleName, lastname: lastName, email: email, phone: phone, address: address, RoleName: role, CustomerId: customer }, {
                where: {
                    id: ID
                }
            });
            res.status(200).send("Updated");
        }
        catch (error) {
            res.status(400).send(error);
        }
        /*  const id = Number(req.params.id);
         const {firstName,middleName,lastName,email,phone,role,address,customer} = req.body;
         pool.query(`UPDATE users SET firstname = $1, middlename = $2, lastname = $3, email = $4,
          phone = $5, role = $6, address = $7,customerid = $8 WHERE id = $9`,
         [firstName,middleName,lastName,email,phone,role,address,customer,id],(err,result) =>
         {
             if(err)
             {
                 res.status(400).send("Failed due to bad input");
                 throw err;
             }
             else{
                 res.status(200).send("Updated");
             }
         }
         ); */
    }
    async deleteUser(req, res) {
        const ID = Number(req.params.id);
        try {
            User.destroy({
                where: {
                    id: ID
                }
            });
            res.status(200).send("Deleted");
        }
        catch (error) {
            res.status(400).send(error);
        }
    }
}
export const userController = new controller();
//# sourceMappingURL=controller.js.map