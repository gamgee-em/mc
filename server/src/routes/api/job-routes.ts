import { Router } from 'express';
import {
    createJob,
    getAllJobs, 
    getJob, 
    updateJob, 
    deleteJob 
} from '../../controllers/jobs';

const router = Router();

router.post('/', createJob);

router.get('/', getAllJobs);
router.get('/:id', getJob);
router.put('/:id', updateJob);
router.delete('/:id', deleteJob);

export default router;