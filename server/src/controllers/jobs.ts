import { RequestHandler } from 'express';
import { JSONB } from 'sequelize';
import { Job } from '../models/job';

export const createJob: RequestHandler = async (req, res, next) => {
    try {
        const job = await Job.create( {...req.body} );
        return res.status(200).json({ message: `Job ID: ${job.id} created:`, data: job})
    } catch (err) {
        if (err) throw err;
    };
};

export const getAllJobs: RequestHandler = async (req, res, next) => {
    try {
        const jobs = await Job.findAll();

        return res
            .status(200)
            .json({ message: `All jobs found:`, data: jobs });
    } catch (err) {
        if (err) throw err;
    };
};

export const getJob: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    try {
        const job = await Job.findByPk(id);
        return res
            .status(200)
            .json({ message: `Job ID: ${id} found:`, data: job });
    } catch (err) {
        if (err) throw err;
    };
};

export const updateJob: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    try {
        const jobById = await Job.findByPk(id);
        const job = req.body;
        jobById?.update(job);
        return res
            .status(200)
            .json({ message: `Job ID: ${id} has been updated:`, data: job });
    } catch (err) {
        if (err) throw err;
    };
};

export const deleteJob: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    try {
        const jobById = await Job.findByPk(id);
        const job = req.body;
        jobById?.destroy(job);
        return res
            .status(200).json({ message: `Job ID: ${id} deleted...`, data: job})
    } catch (err) {
        if (err) throw err;
    };
};
