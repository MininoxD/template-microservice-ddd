import { Discount } from './discount'

export interface DiscountRepository {
  findAllDiscounts(customer_id: number, subscriber_id:number): Promise<Discount[] | []>
}
