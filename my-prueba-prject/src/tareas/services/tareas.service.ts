import { Injectable } from '@nestjs/common';
import { CreateTareaDto } from '../dto/create-tarea.dto';
import { UpdateTareaDto } from '../dto/update-tarea.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TareasService {
  constructor (private prisma : PrismaService){}
  create(createTareaDto: CreateTareaDto) {
    
    return this.prisma.tarea.create({data : createTareaDto});
  }

  findAll() {
    return this.prisma.tarea.findMany();
  }

  findOne(id: string) {
    return this.prisma.tarea.findUnique({where : {id} });
  }

  update(id: string, updateTareaDto: UpdateTareaDto) {
    return this.prisma.tarea.update({
      where : {id},
      data : updateTareaDto
    });
  }

  remove(id: string) {
    return this.prisma.tarea.delete({where : {id}});
  }
}
