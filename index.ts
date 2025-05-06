import express from 'express';
import { UserController } from './userController';

const app = express();
const userController = new UserController();

app.use(express.json());

app.get('/', (req, res) => res.send('Welcome to the REST API.'));
app.use('/users', userController.router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});