interface Product {
  id: string
  component: string
}
interface Profile {
  customer_id: string
  subscriber_id: string
}
export class Discount {
  readonly code: string
  readonly name: string
  readonly status: 'Abierto' | 'Cerrado'
  readonly start_date: string
  readonly end_date: string
  readonly billing_id: string
  readonly ap_id: string
  readonly profile: Profile
  readonly product: Product

  constructor(
    code: string,
    name: string,
    status: 'Abierto' | 'Cerrado',
    start_date: string,
    end_date: string,
    billing_id: string,
    ap_id: string,
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
