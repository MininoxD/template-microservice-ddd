import { ContainerBuilder } from 'node-dependency-injection'
import { LoggerNodeJs } from '../../context/shared/infrastructure/loggerNodeJs'
import { HealthCheckController } from '../controllers/healthCheckGet'
import { DiscountContainer } from './discountContainer'
const container = new ContainerBuilder()
container.register('Controller.HealthCheck', HealthCheckController)
container.register('Infrastructure.Logger', LoggerNodeJs)
DiscountContainer(container)
export default container
