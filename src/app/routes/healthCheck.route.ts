import { Router } from 'express'
import { HealthCheckController } from '../controllers/healthCheckGet'
import container from '../dependency-injection'

export const register = (router: Router) => {
  const healthCheckController: HealthCheckController = container.get(
    'Controller.HealthCheck'
  )
  router.get('/healthCheck', (req, res) => healthCheckController.run(req, res))
}
