import {Controller, Get, HttpStatus, Param, Res} from '@nestjs/common';
import {Response} from 'express';

@Controller('coins')
export class CoinsController {

    @Get(':symbol')
    coinBySymbol(@Param() params, @Res() res: Response) {
        res.status(HttpStatus.OK).send();
    }

    @Get()
    coins(@Res() res: Response) {
        res.status(HttpStatus.OK).send();
    }
}
