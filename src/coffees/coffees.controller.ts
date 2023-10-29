/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

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
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        return this.coffeesService.create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        // return `This action updates #${id} coffee`;
        return this.coffeesService.update(id, updateCoffeeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        // return `This action removes #${id} coffee`;
        return this.coffeesService.remove(id)
    }
}
