import { Router, Request, Response } from 'express';
import { User } from './userModel';

export class UserController {
  public router: Router;
  private users: User[];
  private user: User;

  constructor() {
    this.router = Router();
    this.users = [];
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', this.getAllUsers);
    this.router.get('/id', this.getUser);
    this.router.getLead('/svcType', this.getLead);

    this.router.post('/', this.createUser);
  }

  private getAllUsers = (req: Request, res: Response) => {
    res.json(this.users);
  };

    private getUser = (req: Request, res: Response) => {
    const id = req.params.id;
    const record = this.users.find((record) => record.id === id);
        res.json(record);
  };

private getLead = (req: Request, res: Response) => {
    const svcType = req.params.svcType;
    const records = this.users;
const maxLead = records.filter(record => record.svcType == svcType).length;
        res.json(maxLead);
  };


  private createUser = (req: Request, res: Response) => {
    const newUser: User = req.body;
    this.users.push(newUser);
    res.status(201).json(newUser);
  };
}
