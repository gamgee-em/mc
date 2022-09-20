import { Router } from 'express';
import { 
    getAllJobs, 
    getJob, 
    updateJob, 
    deleteJob 
} from '../../controllers/jobs';

const router = Router();

router.get('/', getAllJobs);
router.get('/:id', getJob);
router.put('/:id', updateJob);
router.delete('/:id', deleteJob);

export default router;