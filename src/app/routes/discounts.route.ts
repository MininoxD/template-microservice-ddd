import { Router, Request, Response } from 'express'
import { DiscountGetController } from '../controllers/discounts/DiscountGetController'
import container from '../dependency-injection'
import { checkParameters } from '../middleware/checkParameter'
import { DiscountFindAllSchema } from '../schema/discount/discountFindAllSchema'

export const register = (router: Router) => {
  const discountGetController: DiscountGetController = container.get(
    'Apps.Discount.Controller.DiscountGetController'
  )
  router.get(
    '/discounts',
    checkParameters({
      type: 'query',
      schema: DiscountFindAllSchema
    }),
    (req: Request, res: Response) => discountGetController.run(req, res)
  )
}
