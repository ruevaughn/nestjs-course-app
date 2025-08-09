import { Controller, Get, Param, Post, Patch, Delete, Body, Query} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeeService: CoffeesService) {}

    @Get()
    findAll(@Query() paginationQuery) {
        const { limit, offset } = paginationQuery;
        // return 'This action returns all the coffees';
        return `limit=${limit} offset=${offset}`;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns #${id} coffee`;
    }

    @Post()
    create(@Body() body) {
        return body;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return `This action updates ${id} coffee`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `Thhis action will remove #${id} coffee`;
    }
}
