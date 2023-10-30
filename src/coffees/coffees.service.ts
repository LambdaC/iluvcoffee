import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { Coffee } from './entities/coffee.entity';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeesService {

    private static idx = 2;

    private coffees: Coffee[] = [
        {
            id: 1,
            name: 'Shipwreck Roast',
            brand: 'Buddy Brew',
            flavors: ['chocolate', 'vanilla'],
        },
    ];

    findAll() {
        return this.coffees;
    }

    findOne(id: number) {
        const coffee = this.coffees.find(item => item.id === id);
        if (!coffee) {
            return new NotFoundException(`Coffee ${id} Not Found`);
        }
        return coffee;
    }

    create(createCoffeeDto: CreateCoffeeDto) {
        this.coffees.push({ id: CoffeesService.idx++, ...createCoffeeDto });
    }

    update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
        const existingCoffee = this.findOne(id);
        if (!(existingCoffee instanceof NotFoundException)) {
            existingCoffee.name = updateCoffeeDto.name ?? existingCoffee.name;
            existingCoffee.brand = updateCoffeeDto.brand ?? existingCoffee.brand;
            existingCoffee.flavors = updateCoffeeDto.flavors ?? existingCoffee.flavors;
        }
    }

    remove(id: string) {
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
        if (coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex, 1);
        }
    }
}
