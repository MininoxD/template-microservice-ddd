import Logger from '../domain/logger'

export class LoggerNodeJs implements Logger {
  public debug(message: string): void {
    console.log(message)
  }

  public error(message: string | Error): void {
    console.error(message)
  }

  public info(message: string): void {
    console.info(message)
  }
}
