import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(): string {
        return '<h1>This action returns all cats (pt. 2)</h1>';
    }
}