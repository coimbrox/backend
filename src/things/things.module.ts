import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { ThingsController } from './things.controller';
import { ThingsService } from './things.service';

@Module({
  imports: [CommonModule],
  controllers: [ThingsController],
  providers: [ThingsService],
})
export class ThingsModule {}
