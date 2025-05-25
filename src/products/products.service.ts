import { Injectable } from '@nestjs/common';
import { ProductCreateDTO } from './dto/product.create.dto';
import { ProductUpdateDTO } from './dto/product.update.dto';

@Injectable()
export class ProductsService {

    findALL(){
        return 'Lista de todos los productos';
    }

    findOne(id: number){
        return `Producto con id: ${id}`;
    }

    create(data:ProductCreateDTO) {
            return data;
    }

    update(id: number, data: ProductUpdateDTO) {
            return { id, data };
    }

    delete(id: number) {
            return `Producto ${id} Eliminado`;
    }
}
