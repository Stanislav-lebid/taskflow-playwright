import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {
  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res
          .status(400)
          .json({ message: 'Email and password required' });
      }

      const result = await AuthService.login(email, password);
      return res.json(result);
    } catch {
      return res
        .status(401)
        .json({ message: 'Invalid credentials' });
    }
  }
}
