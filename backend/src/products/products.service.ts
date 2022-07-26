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

  async remove(id: string) {
    const product = await this.productRepository.findOne({
      where: {
        id,
      },
    });
    if (product.productImage !== '' || product.productImage !== null) {
      const linkFile = `${process.cwd()}/uploads/market-images/${
        product.productImage
      }`;

      fs.unlink(linkFile, (erro) => {
        if (erro) return erro;
        console.log('path/file.txt was deleted');
      });
    }

    await this.productRepository.delete(id);
    return {
      message: `Produto ${product.productName} removido com sucesso`,
    };
  }

  async updateProductImage(id: string, filename: string) {
    let product = await this.productRepository.findOne({
      where: {
        id,
      },
    });
    if (product.productImage === '' || product.productImage === null) {
      await this.productRepository.update(id, {
        productImage: filename,
      });
    } else {
      const linkFile = `${process.cwd()}/uploads/market-images/${
        product.productImage
      }`;

      fs.unlink(linkFile, (erro) => {
        if (erro) return erro;
        console.log('path/file.txt was deleted');
      });

      await this.productRepository.update(id, {
        productImage: filename,
      });
    }
    product = await this.productRepository.findOne({
      where: {
        id,
      },
    });

    return product;
  }

  async imageSearch(filename: string) {
    let product = await this.productRepository.findOne({
      where: {
        productImage: filename,
      },
    });

    return product.productImage;
  }
}
