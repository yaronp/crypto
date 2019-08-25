import {Controller, HttpStatus, Post, Res} from '@nestjs/common';
import { Response } from 'express';

@Controller('cachettl')
export class CachettlController {

    @Post()
    cachettl(@Res() res: Response) {
        res.status(HttpStatus.OK).send();
    }
}
