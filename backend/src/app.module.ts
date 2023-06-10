import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesModule } from './coffee/coffee.module';
import { Coffee } from './coffee/domain/coffee.entity';
import { TeaModule } from './tea/tea.module';
import { Tea } from './tea/domain/tea.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'mvst-coffee-tea-challenge-db',
      entities: [Coffee, Tea],
      synchronize: true,
    }),
    CoffeesModule,
    TeaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
