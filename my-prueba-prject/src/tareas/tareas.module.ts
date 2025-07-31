import { Module } from '@nestjs/common';
import { TareasService } from './services/tareas.service';
import { TareasController } from './controllers/tareas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TareasController],
  providers: [TareasService],
  imports : [PrismaModule],
})
export class TareasModule {}
