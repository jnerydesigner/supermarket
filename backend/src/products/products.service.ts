import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Products } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
  ) {}

  async create(data: CreateProductDto): Promise<CreateProductDto> {
    const { productName } = data;

    const isProductExists = await this.productsRepository.findOne({
      where: {
        productName,
      },
    });

    console.log(isProductExists);

    if (isProductExists) {
      throw new Error('O Produto já existe');
    }

    const product = this.productsRepository.create(data);

    return await this.productsRepository.save(product);
  }

  async findAll(): Promise<CreateProductDto[]> {
    return await this.productsRepository.find();
  }

  async findOne(id: string): Promise<CreateProductDto> {
    return await this.productsRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: UpdateProductDto) {
    await this.productsRepository.update(id, data);
    const product = await this.productsRepository.findOne({
      where: {
        id,
      },
    });
    return product;
  }

  async remove(id: string) {
    const product = await this.productsRepository.findOne({
      where: {
        id,
      },
    });
    await this.productsRepository.delete(id);
    return `Produto ${product.productName} excluido com sucesso`;
  }
}
