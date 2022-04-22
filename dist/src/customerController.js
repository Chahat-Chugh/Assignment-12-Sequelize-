import { Customer } from './models/customer.js';
class CustomerController {
    async getCustomers(req, res) {
        const customers = await Customer.findAll({ attributes: ['name'] });
        res.status(200).json(customers);
    }
    async getCustomerIdByName(req, res) {
        const customerName = req.params.name;
        const ID = await Customer.findOne({
            attributes: ['id'],
            where: {
                name: customerName
            }
        });
        res.status(200).send(ID);
    }
}
export const customerController = new CustomerController();
//# sourceMappingURL=customerController.js.map