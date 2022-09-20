import { Router } from 'express';
import {
    createCustomer,
    getAllCustomers, 
    getCustomer, 
    updateCustomer, 
    deleteCustomer 
} from '../../controllers/customers';

const router = Router();

router.post('/', createCustomer)

router.get('/', getAllCustomers);
router.get('/:id', getCustomer);
router.put('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

export default router;