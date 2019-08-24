import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoinsController } from './coins/coins.controller';
import { CoinsService } from './coins/coins.service';
import { CachettlController } from './cachettl/cachettl.controller';
import { CachettlService } from './cachettl/cachettl.service';

@Module({
  imports: [],
  controllers: [AppController, CoinsController, CachettlController],
  providers: [AppService, CoinsService, CachettlService],
})
export class AppModule {}
