import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tea } from './domain/tea.entity';
import { TeasController } from './controllers/teas.controller';
import { teaProvider } from './providers/tea.providers';

@Module({
  imports: [TypeOrmModule.forFeature([Tea])],
  controllers: [TeasController],
  providers: teaProvider,
})
export class TeaModule {}
