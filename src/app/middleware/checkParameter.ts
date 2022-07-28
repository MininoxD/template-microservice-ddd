import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import { z } from 'zod'

interface Props {
  type: 'params' | 'body' | 'query'
  schema: z.ZodSchema
}
export const checkParameters = ({ type, schema }: Props) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const parameters = req[type] || ''
    const validation = schema.safeParse(parameters)
    if (!validation.success) {
      return res
        .status(httpStatus.UNPROCESSABLE_ENTITY)
        .send({ errors: (validation as any).error?.issues })
    }
    res.locals.parameters = validation.data
    return next()
  }
}
