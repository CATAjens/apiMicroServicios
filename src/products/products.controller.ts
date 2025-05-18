import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';

@Controller('products')

export class ProductsController {

    @Get()
    findALL(){
        return 'Lista de todos los productos';
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return `Producto con id: ${id}`;
    }

    @Post()
    create(@Body() data) {
        return data;
    }
    @Patch(':id') //where la modificacion de datos
    update(@Param('id') id: number, @Body() data) {
        return { id, data };
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return `Producto ${id} Eliminado`;
    }
}