import express from 'express';

import { register, login, update } from '../controllers/authentication';

export default (router:express.Router) => {
    router.post('/auth/login', login);
    router.post('/auth/register', register);
    router.put('/auth/update', update);
};