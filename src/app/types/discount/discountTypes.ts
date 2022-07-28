
import { z } from 'zod'
import { DiscountFindAllSchema } from '../../schema/discount/discountFindAllSchema'
export type DiscountFindAllParams = z.infer<typeof DiscountFindAllSchema>
