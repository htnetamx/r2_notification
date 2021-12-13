import { Express, Request, Response, NextFunction } from 'express';
import { BotmakerController, botmakerPayload } from '../../../controller/botmaker/botmaker.controller';

export class sendMessageRoute {
    private server: Express;
  
    constructor(server: Express) {
      this.server = server;
    }
  
    public sendMessage = async (req: Request, res: Response, next: NextFunction) => {
      try {
        const result = await new BotmakerController().post(req.body as botmakerPayload);
        res.status(200).send(result);
      } catch (e) {}
    };
  
    public configureEndPoints(baseUrl: string) {
      this.server.post(`${baseUrl}notification/botmaker/`, this.sendMessage);
    }
  }