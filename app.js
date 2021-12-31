import express from 'express';
import cors from 'cors';

import Response from './controllers/users.controller';

const app = express();

const router = express.Router();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

router.post('/users', Response.Users);
router.get('/users/:username/repo', Response.User);

app.use('/api/v1', router);

const server = app.listen(port, () => { console.log('app listening on port ', port)});

export default server;