import { RequestHandler } from 'express';
import { Customer } from '../models/customer';

//? what if a customer doesn't have an email? - make cust email nullable and use phone?
export const createCustomer: RequestHandler = async (req, res, next) => {
    const { email } = req.body;
    try {
        const dupCustomer = await Customer.findOne({ where: { email } });
        if (dupCustomer) return res.status(200).json({ message: `Customer w/ ${email} already exists...`, data: dupCustomer});
        const customer = await Customer.create({ ...req.body });
        return res
            .status(200)
            .json(customer);
    } catch (err) {
        if (err) throw err;
    };
};

export const getAllCustomers: RequestHandler = async (req, res, next) => {
    try {
       const customer = await Customer.findAll();
       return res
        .status(200)
        .json(customer);
    } catch (err) {
        if (err) throw err;
    };
};

export const getCustomer: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    try {
       const customer = await Customer.findByPk(id);
       return res
        .status(200)
        .json({ message: `Customer w/ the ID: ${id} found:`, data: customer })
    } catch (err) {
        if (err) throw err;
    };
};

export const updateCustomer: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    try {
        const customerById = await Customer.findByPk(id);
        const customer: Customer = req.body;
        customerById?.update(customer);
        return res
            .status(200)
            .json({ message: `Customer ${customer.f_name} has been updated:`, data: customer })
    } catch (err) {
        if (err) throw err;
    };
};

export const deleteCustomer: RequestHandler = async (req, res, next) => {
    const { id } = req.params;
    try {
        const customerById = await Customer.findByPk(id);
        const customer = req.body;
        customerById?.destroy(customer);
        return res
            .status(200)
            .json({ message: `Customer w/ ID: ${id} has been deleted...`, data: customerById})
    } catch (err) {
        if (err) throw err;
    };
};
