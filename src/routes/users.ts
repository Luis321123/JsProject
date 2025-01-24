import express from 'express';

import { getAllUsers } from '../controllers/users';
import { register } from '../controllers/authentication';

export default (router: express.Router) => {
    router.get('/users', getAllUsers),
    router.post('/users', register);
}

