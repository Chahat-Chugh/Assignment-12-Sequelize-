import { Role } from './models/role.js';
class RoleController {
    async getRoles(req, res) {
        const roles = await Role.findAll({ attributes: ['name'] });
        res.status(200).json(roles);
    }
    async getRoleKeyByName(req, res) {
        const roleName = req.params.name;
        const key = await Role.findByPk(roleName, { attributes: ['key'] });
        res.status(200).send(key);
    }
}
export const roleController = new RoleController();
//# sourceMappingURL=roleController.js.map