import { Router } from "express";
import apiRoutes from './api';

const router = Router();

router.use('/api', apiRoutes);
//router.use((req, res) => res.send("<h1>Something went wrong! Try another route...</h1>"));  

export default router;