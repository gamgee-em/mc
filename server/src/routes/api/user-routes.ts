import { Router } from "express";
import { 
    createUser, 
    getAllUsers, 
    getUser, 
    updateUser, 
    deleteUser 
} from '../../controllers/users';

const router = Router();

router.post('/', createUser);

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;