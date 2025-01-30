import express from 'express';

import { register, login, update } from '../controllers/authentication';
import { isOwner } from '../middleware/index';

export default (router:express.Router) => {
    router.post('/auth/login', login);
    router.post('/auth/register', register);
    router.put('/auth/update',isOwner, update);
};