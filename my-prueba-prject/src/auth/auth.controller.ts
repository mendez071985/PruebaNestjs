import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import {LoginDto} from './dto/login.dto'
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
@Controller('auth')
@ApiTags('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    @Public()
    async login(@Body() data : LoginDto){
        const tareaToken = await this.authService.validateTarea(data);
        if(!tareaToken) throw new HttpException('Tarea not found', HttpStatus.NOT_FOUND)
            return tareaToken;
    }
}
