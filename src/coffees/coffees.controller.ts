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
        return this.coffeesService.findAll();
    }

    @Get(':id')
    findOne(@Param() params, @Param('id') id: string) {
        console.log(params);
        return this.coffeesService.findOne(id);
    }

    @Post()
    // @HttpCode(HttpStatus.GONE)
    create(@Body() body) {
        return this.coffeesService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        // return `This action updates #${id} coffee`;
        return this.coffeesService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        // return `This action removes #${id} coffee`;
        return this.coffeesService.remove(id)
    }
}
