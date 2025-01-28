import express from 'express';

import { getAllUsers, deleteUser } from '../controllers/users';


export default (router: express.Router) => {
    router.get('/users', getAllUsers)
    router.delete('/users/:id', deleteUser);
}

