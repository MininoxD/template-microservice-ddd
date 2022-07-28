import { z } from 'zod'

export const DiscountFindAllSchema = z.object({
  customer_id: z.preprocess((value) => {
    if (value) return Number(value)
    return undefined
  }, z.number()),
  subscriber_id: z.preprocess((value) => {
    if (value) return Number(value)
    return undefined
  }, z.number())
})
