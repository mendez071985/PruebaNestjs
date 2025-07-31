import {Role,Tarea} from '@prisma/client'
import { ApiProperty } from "@nestjs/swagger";
type TareaWithoutPassword = Omit<Tarea,'password'>
export class TareaEntity implements  TareaWithoutPassword{
        @ApiProperty()
        id: string;
        @ApiProperty()
        nombre: string;
        @ApiProperty()
        descripcion: string | null;
        @ApiProperty()
        fechaCreacion: Date;
        @ApiProperty()
        fecha_Actualizacion: Date | null;
        @ApiProperty()
        fecha_Vencimiento :  Date | null;
        @ApiProperty()
        estadoId: string | null;
        @ApiProperty()
        role: Role = 'USER';

}
