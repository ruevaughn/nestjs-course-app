import { Controller, Get, Param, Post, Patch, Delete, Body} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll() {
        return 'This action returns all the coffees';
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
