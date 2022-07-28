import { Router } from 'express'
import fg from 'fast-glob'
export function registerRoutes(router: Router) {
  const routes = fg.sync('**/*.route.*', {
    cwd: __dirname,
    absolute: true
  })
  routes.map(route => register(route, router))
}

function register(routePath: string, router: Router) {
  const route = require(routePath)
  route.register(router)
}
