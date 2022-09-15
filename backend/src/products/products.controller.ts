import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { join } from 'path';
import { Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { IImage } from './image.interface';
import { ProductsService } from './products.service';

function utf8_to_b64(encodeStr: string) {
  return btoa(unescape(encodeURIComponent(encodeStr)));
}

export const storage = {
  storage: diskStorage({
    destination: './uploads/supermarket-images',
    filename: (req, file, cb) => {
      const strNewDate = new Date();
      let filename: string = utf8_to_b64(strNewDate.toDateString());
      filename = filename + '-' + uuidv4();
      const extension: string = path.parse(file.originalname).ext;
      cb(null, `${filename}${extension}`);
    },
  }),
};

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }

  @Patch('upload/:id')
  @UseInterceptors(FileInterceptor('file', storage))
  uploadFile(
    @UploadedFile() file: IImage,
    @Request() req,
    @Param('id') id: string,
  ): Observable<IImage> {
    this.productsService.updateImage(id, file.filename);
    console.log(file);
    return of(file);
  }

  @Get('product/:image')
  async getImage(@Param('image') imageName: string, @Res() res) {
    const imagename = await this.productsService.imageSearch(imageName);

    return of(
      res.sendFile(
        join(process.cwd(), 'uploads/supermarket-images/' + imagename),
      ),
    );
  }
}
