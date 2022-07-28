import { ContainerBuilder, Reference } from 'node-dependency-injection'
import { DiscountFindAll } from '../../context/discounts/application/discountFindAll'
import { JsonDiscountRepository } from '../../context/discounts/infrastructure/JsonDiscountRepository'
import { DiscountGetController } from '../controllers/discounts/DiscountGetController'

export const DiscountContainer = (container: ContainerBuilder) => {
  container.register('Discount.Infrastructure.DiscountRepository', JsonDiscountRepository)
  container.register('Discount.Application.DiscountFindAll', DiscountFindAll)
    .addArgument(new Reference('Discount.Infrastructure.DiscountRepository'))
    .addArgument(new Reference('Infrastructure.Logger'))
  container.register('Apps.Discount.Controller.DiscountGetController', DiscountGetController)
    .addArgument(new Reference('Discount.Application.DiscountFindAll'))
}
