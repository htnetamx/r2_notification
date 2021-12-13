/* eslint-disable new-cap */
import { Express } from 'express';
import { getByIdRoute } from './order/getById';
import { getAllRoute } from './order/getAll';
import { IndexRoute } from './index/welcome';
import { getAllOrderItemRoute } from './orderItem/getAllOrderItem';
import { getByIdOrderItemRoute } from './orderItem/getByIdOrderItem';
import { sendMessageRoute } from './botmaker/sendMessage';

export class Routes {
  private server: Express;

  private baseUrl: string = '/api/v1/';

  private indexRoute: IndexRoute;

  private getByIdRoute: getByIdRoute;

  private getAllRoute: getAllRoute;

  private getAllOrderItemRoute: getAllOrderItemRoute;

  private getByIdOrderItemRoute: getByIdOrderItemRoute;

  private sendMessageRoute: sendMessageRoute;

  constructor(server: Express) {
    this.server = server;
    this.getByIdRoute = new getByIdRoute(server);
    this.getAllRoute = new getAllRoute(server);
    this.getByIdOrderItemRoute = new getByIdOrderItemRoute(server);
    this.getAllOrderItemRoute = new getAllOrderItemRoute(server);
    this.indexRoute = new IndexRoute(server);
    this.sendMessageRoute = new sendMessageRoute(server);
    this.configureApiEndPoints(this.baseUrl);
  }

  public configureApiEndPoints(baseUrl: string) {
    this.indexRoute.configureEndPoints(baseUrl);
    this.getByIdRoute.configureEndPoints(baseUrl);
    this.getAllRoute.configureEndPoints(baseUrl);
    this.getByIdOrderItemRoute.configureEndPoints(baseUrl);
    this.getAllOrderItemRoute.configureEndPoints(baseUrl);
    this.sendMessageRoute.configureEndPoints(baseUrl);
  }
}
