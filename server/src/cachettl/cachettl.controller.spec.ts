import { Test, TestingModule } from '@nestjs/testing';
import { CachettlController } from './cachettl.controller';

describe('Cachettl Controller', () => {
  let controller: CachettlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CachettlController],
    }).compile();

    controller = module.get<CachettlController>(CachettlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
