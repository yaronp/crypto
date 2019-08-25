import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoinsController } from './coins/coins.controller';
import { CachettlController } from './cachettl/cachettl.controller';

@Module({
  imports: [],
  controllers: [AppController, CoinsController, CachettlController],
  providers: [AppService],
})
export class AppModule {}
