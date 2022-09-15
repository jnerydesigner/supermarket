import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(data: CreateProductDto) {
    const isProductExists = await this.productRepository.findOne({
      where: {
        productName: data.productName,
      },
    });
    if (isProductExists) {
      throw new Error('Product Exists');
    }

    const createProduct = this.productRepository.create(data);
    const product = await this.productRepository.save(createProduct);

    return product;
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: string) {
    const product = await this.productRepository.findOne({
      where: {
        id,
      },
    });

    if (!product) {
      throw new Error('Product not Exists');
    }
    return product;
  }

  async update(id: string, data: UpdateProductDto) {
    await this.productRepository.update(id, data);
    const product = await this.productRepository.findOne({
      where: {
        id,
      },
    });
    return product;
  }

  async updateImage(id: string, filename: string) {
    let product = await this.productRepository.findOne({
      where: {
        id,
      },
    });

    const linkFile =
      process.cwd() + '/uploads/supermarket-images/' + product.productImage;

    fs.unlink(linkFile, (error) => {
      if (error) return console.log(error);
      console.log('file deleted successfully');
    });

    await this.productRepository.update(id, {
      productImage: filename,
    });

    product = await this.productRepository.findOne({
      where: {
        id,
      },
    });
    return product;
  }

  async remove(id: string) {
    const product = await this.productRepository.findOne({
      where: {
        id,
      },
    });

    await this.productRepository.delete(id);
    return {
      message: `Produto ${product.productName} removido com sucesso`,
    };
  }

  async imageSearch(filename: string) {
    const product = await this.productRepository.findOne({
      where: {
        productImage: filename,
      },
    });

    return product.productImage;
  }
}
