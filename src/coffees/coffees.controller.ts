/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly coffeesService: CoffeesService) { }

    @Get('/')
    findAll(@Query() query) {
        const { limit, offset } = query;
        return `This action return all coffees. Limit:${limit}, Offset:${offset}`;
    }

    @Get(':id')
    findOne(@Param() params, @Param('id') id: string) {
        console.log(params);
        return `This action returns #${id} coffee, param is ${params}`;
    }

    @Post()
    // @HttpCode(HttpStatus.GONE)
    create(@Body() body) {
        return body;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return `This action updates #${id} coffee`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes #${id} coffee`;
    }
}
