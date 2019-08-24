import { Test, TestingModule } from '@nestjs/testing';
import { CachettlService } from './cachettl.service';

describe('CachettlService', () => {
  let service: CachettlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CachettlService],
    }).compile();

    service = module.get<CachettlService>(CachettlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
