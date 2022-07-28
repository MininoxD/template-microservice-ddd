import { ContainerBuilder } from 'node-dependency-injection'
import { HealthCheckController } from '../controllers/healthCheck'
const container = new ContainerBuilder()
container.register('Controller.HealthCheck', HealthCheckController)
export default container
