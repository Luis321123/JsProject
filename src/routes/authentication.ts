import express from 'express';

import { register, login} from '../controllers/authentication';

export default (router:express.router) => {
    router.post('/auth/register', register);
    router.post('/auth/login', login);
};