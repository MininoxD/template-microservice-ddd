import { Server } from './server'

export class BackendApp {
  server?: Server

  async start() {
    const port = process.env.PORT || '5000'
    this.server = new Server(port)
    console.log(`Server listening on port ${port}`)
    return this.server.listen()
  }

  async stop() {
    return this.server?.stop()
  }

  get httpServer() {
    return this.server?.getHTTPServer()
  }
}
