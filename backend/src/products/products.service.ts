import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from 'src/database/PrismaService';
import { Prisma } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';


@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService){}


  async create(data: CreateProductDto) {
    const productsExists = await this.prisma.products.findFirst({
      where:{
        productName: data.productName
      }
    })

    if(productsExists) throw new Error("Products Exists");
    const product = await this.prisma.products.create({data})
    return product;
  }

  async findAll(){
    return this.prisma.products.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.products.findFirst({
      where:{
        id
      }
    })
  }

  async update(id: string, data: UpdateProductDto) {
    const productExists = await this.prisma.products.findFirst({
      where:{
        id
      }
    })

    if(productExists){
      return this.prisma.products.update({
        where: {
          id
        },
        data
      });
    }

    return false    
  }

  remove(id: string) {  
    return this.prisma.products.delete({
      where:{
        id
      }
    });
  }
}
