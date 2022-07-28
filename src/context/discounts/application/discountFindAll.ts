import Logger from '../../shared/domain/logger'
import { Discount } from '../domain/discount'
import { DiscountRepository } from '../domain/discountRepository'

export class DiscountFindAll {
  private repository: DiscountRepository
  private logger: Logger
  constructor(discountRepository: DiscountRepository, logger: Logger) {
    this.repository = discountRepository
    this.logger = logger
  }

  public async run(
    customer_id: number,
    subscriber_id: number
  ): Promise<Discount[] | []> {
    const results = await this.repository.findAllDiscounts(customer_id, subscriber_id)
    this.logger.info(`Discounts Find All ${new Date().toISOString()}: ${JSON.stringify(results)}`)
    return results
  }
}
