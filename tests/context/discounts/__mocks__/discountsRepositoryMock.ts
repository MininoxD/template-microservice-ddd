import { Discount } from '../../../../src/context/discounts/domain/discount'
import { DiscountRepository } from '../../../../src/context/discounts/domain/discountRepository'
export class DiscountsRepositoryMock implements DiscountRepository {
  public async findAllDiscounts(
    customer_id: number,
    subscriber_id: number
  ): Promise<Discount[] | []> {
    return []
  }
}
