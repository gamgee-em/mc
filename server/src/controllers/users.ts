import { RequestHandler } from 'express';
import { User } from '../models/user';

export const createUser: RequestHandler = async (req, res, next) => {
    const { email } = req.body;
    try {
        //! check if user already exists
        const dupUser = await User.findOne({ where: { email } });
        if (dupUser) return res.status(200).json({ message: `User w/ Email: ${email} already exists...`, data: dupUser });

        const user: User | null = await User.create({ ...req.body });
        return res
            .status(200)
            .json({ message: `User ${user.f_name} has been created:`, data: user });
    } catch (err) {
        if (err) throw err;
    };
};

export const getAllUsers: RequestHandler = async (req, res, next) => {
    try {
        const users = await User.findAll();
        return res
            .status(200)
            .json({ message: `All users found:`, data: users });
    } catch (err) {
        if (err) throw err;
    };
};

export const getUser: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user: User | null = await User.findByPk(id);
        return !user?.id ?
            res.
                status(200)
                .json({ message: `No user with ID: ${id} exists. Please try another ID...` })
            : res
                .status(200)
                .json({ message: `User w/ ID: ${user?.id} found:`, data: user })
    } catch (err) {
        if (err) throw err;
    };
};

export const updateUser: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    try {
        const userById = await User.findByPk(id);
        const user = req.body;
        userById?.update(user);
        return res
            .status(200)
            .json({ message: `User w/ ID: ${id} has been updated:`, data: user });
    } catch (err) {
        if (err) throw err;
    };
};

//! if customer deleted delete job
export const deleteUser: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    try {
        const userById = await User.findByPk(id);
        const user = req.body;
        userById?.destroy(user);
        return res
            .status(200)
            .json({ message: `User ID: ${id} has been deleted...`, data: user})
    } catch (err) {
        if (err) throw err;
    };
};