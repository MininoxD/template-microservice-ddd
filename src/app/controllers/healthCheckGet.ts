import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { Controller } from './controller'

export class HealthCheckController implements Controller {
  public async run(req: Request, res: Response): Promise<void> {
    res.status(httpStatus.OK).send()
  }
}
