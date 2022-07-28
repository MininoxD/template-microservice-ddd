import { DiscountsRepositoryMock } from '../__mocks__/discountsRepositoryMock'
import { DiscountFindAll } from '../../../../src/context/discounts/application/discountFindAll'
import Logger from '../../../../src/context/shared/domain/logger'
import { LoggerNodeJs } from '../../../../src/context/shared/infrastructure/loggerNodeJs'
let repository: DiscountsRepositoryMock
let discountFindAll: DiscountFindAll
let logger: Logger
beforeEach(() => {
  repository = new DiscountsRepositoryMock()
  logger = new LoggerNodeJs()
  discountFindAll = new DiscountFindAll(repository, logger)
})

describe('Discounts Find All', () => {
  it('When you can t find a match', async () => {
    const response = await discountFindAll.run(1234, 4321)
    expect(response).toEqual([])
  })
})
