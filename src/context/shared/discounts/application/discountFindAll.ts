import { Discount } from '../domain/discount'
import { DiscountRepository } from '../domain/discountRepository'

export class DiscountFindAll {
  private repository: DiscountRepository
  constructor(discountRepository: DiscountRepository) {
    this.repository = discountRepository
  }

  public async run(
    customer_id: number,
    subscriber_id: number
  ): Promise<Discount[] | []> {
    return this.repository.findAllDiscounts(customer_id, subscriber_id)
  }
}
