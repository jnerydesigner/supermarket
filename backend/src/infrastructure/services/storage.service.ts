import { Injectable } from '@nestjs/common';
import multer, { diskStorage } from 'multer';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class StorageMulter {
  private storage(): multer.StorageEngine {
    return diskStorage({
      destination: './uploads/supermarket-images',
      filename: (req, file, cb) => {
        const strNewDate = new Date();
        let filename: string = this.utf8_to_b64(strNewDate.toDateString());
        filename = filename + '-' + uuidv4();
        const extension: string = path.parse(file.originalname).ext;
        cb(null, `${filename}${extension}`);
      },
    });
  }

  getConfig(): multer.Options {
    return {
      storage: this.storage(),
    };
  }

  private utf8_to_b64(encodeStr: string) {
    return btoa(unescape(encodeURIComponent(encodeStr)));
  }
}
