import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { CreateTareaDto } from '../dto/create-tarea.dto';
import { UpdateTareaDto } from '../dto/update-tarea.dto';
import { TareasService } from '../services/tareas.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { TareaEntity } from '../entities/tarea.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AuthenticatedRequest } from 'src/Interfaces/authenticated-user.interface';

@Controller('tareas')
@ApiTags('tareas')
export class TareasController {
  constructor(private readonly tareasService: TareasService) {}

  @Post()
  create(@Body() createTareaDto: CreateTareaDto) {
    return this.tareasService.create(createTareaDto);
  }

  @Get()
  @ApiCreatedResponse({type : TareaEntity, isArray:true})
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req: AuthenticatedRequest) {
    return this.tareasService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({type : TareaEntity})
  findOne(@Param('id') id: string) {
    return this.tareasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTareaDto: UpdateTareaDto) {
    return this.tareasService.update(id, updateTareaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tareasService.remove(id);
  }
}
