import { Request, Response } from 'express'
import httpStatus from 'http-status'
import { DiscountFindAll } from '../../../context/discounts/application/discountFindAll'
import { DiscountFindAllParams } from '../../types/discount/discountTypes'
import { Controller } from '../controller'

export class DiscountGetController implements Controller {
  constructor(private discountFindAll: DiscountFindAll) {}
  public async run(req: Request, res: Response): Promise<void> {
    const { customer_id, subscriber_id }: DiscountFindAllParams =
      res.locals.parameters
    const response = await this.discountFindAll.run(customer_id, subscriber_id)
    res.status(httpStatus.OK).send({ data: response })
  }
}
