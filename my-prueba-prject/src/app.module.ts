import { Module } from "@nestjs/common";
import { TareasModule } from "./tareas/tareas.module";
import { AuthModule } from './auth/auth.module';
@Module({
    imports:[TareasModule, AuthModule],
    controllers:[],
    providers:[],
})
export class AppModule{}