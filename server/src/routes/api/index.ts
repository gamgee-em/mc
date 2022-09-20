import { Router } from 'express';
import userRoutes from './user-routes';
import customerRoutes from './customer-routes';
import jobRoutes from './job-routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/customers', customerRoutes);
router.use('/jobs', jobRoutes);

export default router;