import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { Product } from './database/entity/product.entity';
import { Order } from './database/entity/order.entity';
import { OrderItem } from './database/entity/order-item.entity';
import { User } from './database/entity/user.entity';
import { Role } from './database/entity/role.entity';
import { Permission } from './database/entity/permission.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'deck.db',
      entities: [Product, Order, OrderItem, User, Role, Permission],
      synchronize: true,
    }),
    ProductsModule,
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
