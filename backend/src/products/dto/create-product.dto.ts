export class CreateProductDto {
  id?: string;
  productName: string;
  productPrice: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  productImage?: string;
}
