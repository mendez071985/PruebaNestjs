import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private prisma: PrismaService,
    ){}
    async validateTarea(tarea: LoginDto){
        //const foundTarea = await this.prisma.tarea.findUnique({
          //  where: {id : tarea.id}
        //});
        //if (!foundTarea)  
        
        const secret = 'qwerty';
          return this.jwtService.sign({
            id: 'newIdTemporal',
            nombre:'Temporal',
            role:'ADMIN',
        });
    }
}
