import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerController } from './customer/customer.controller';
import { OrderController } from './order/order.controller';
import { ProductController } from './product/product.controller';
import { CustomerService } from './customer/customer.service';
import { OrderService } from './order/order.service';
import { ProductService } from './product/product.service';
import { Produto } from './product/produto';
import { Cliente } from './customer/cliente';
import { Pedido } from './order/pedido';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'atividade-avaliativa',
      entities: [
        Produto,
        Cliente,
        Pedido, 
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController, CustomerController, OrderController, ProductController],
  providers: [AppService, CustomerService, OrderService, ProductService],
})
export class AppModule {}
