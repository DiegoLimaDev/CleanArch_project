import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './domain/coffee.entity';
import { CoffeesController } from './controllers/coffees.controller';
import { coffeeProvider } from './providers/coffee.provider';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee])],
  controllers: [CoffeesController],
  providers: coffeeProvider,
})
export class CoffeesModule {}
