import express from "express";
const router = express.Router()

import {
    getItems,
    editItem,
    createItem,
    deleteItem,
} from "../controllers/tasks";

import {
    login,
    register,
    logout
} from "../controllers/auth";

const functions: {[index: string]:any} = {
    getItems,
    editItem,
    createItem,
    deleteItem,
    login,
    register,
    logout
}

router.route('/router')
    .get((req: any, res: any) => {
        try {
            const funcName: string = req.query.action
            functions[funcName](req, res)
        } catch (e) {
            res.status(404).json({error: 'not found'})
        }
    })
    .post((req: any, res: any) => {
        try {
            if(Object.keys(req.query).length == 0) return logout(req, res);
            const funcName: string = req.query.action
            functions[funcName](req, res)
        } catch (e) {
            res.status(404).json({error: 'not found'})
        }
    })
    .put((req: any, res: any) => {
        try {
            const funcName: string = req.query.action
            functions[funcName](req, res)
        } catch (e) {
            res.status(404).json({error: 'not found'})
        }
    })
    .delete((req: any, res: any) => {
        try {
            const funcName: string = req.query.action
            functions[funcName](req, res)
        } catch (e) {
            res.status(404).json({error: 'not found'})
        }
    })

export default router