interface Product {
  id: number
  component: string
}
interface Profile {
  customer_id: number
  subscriber_id: number
}
export class Discount {
  readonly code: string
  readonly name: string
  readonly status: 'ABIERTO' | 'CERRADO'
  readonly start_date: Date
  readonly end_date: Date
  readonly billing_id: number
  readonly ap_id: number
  readonly profile: Profile
  readonly product: Product

  constructor(
    code: string,
    name: string,
    status: 'ABIERTO' | 'CERRADO',
    start_date: Date,
    end_date: Date,
    billing_id: number,
    ap_id: number,
    profile: Profile,
    products: Product
  ) {
    this.code = code
    this.name = name
    this.status = status
    this.start_date = start_date
    this.end_date = end_date
    this.billing_id = billing_id
    this.ap_id = ap_id
    this.profile = profile
    this.product = products
  }
}
