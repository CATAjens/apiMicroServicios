import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductCreateDTO } from './dto/product.create.dto';
import { ProductUpdateDTO } from './dto/product.update.dto';

@Controller('products')

export class ProductsController {

    constructor(private readonly service: ProductsService) {}

    @Get()
    findALL(){
        return this.service.findALL();;
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.service.findOne(id);
    }

    @Post()
    create(@Body() data: ProductCreateDTO) {
        return this.service.create(data);
    }
    @Patch(':id') //where la modificacion de datos
    update(@Param('id') id: number, @Body() data: ProductUpdateDTO) {
        return this.service.update(id, data);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.service.delete(id);
    }
}