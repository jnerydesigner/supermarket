import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryColumn,
} from 'typeorm';

@Entity({
  name: 'products',
})
export class Products {
  @PrimaryColumn({ type: 'uuid' })
  @Generated('uuid')
  id: string;

  @Column()
  productName: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  productPrice: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @BeforeInsert()
  private beforeInsertDate(): void {
    this.createdAt = new Date();
  }
}
