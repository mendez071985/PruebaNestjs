import { ApiProperty } from "@nestjs/swagger";
import { Role } from "@prisma/client";
export class CreateTareaDto {
        @ApiProperty({required : true})
        nombre: string;
        @ApiProperty({required : false})
        descripcion: string;
        @ApiProperty({required : false})
        fecha_Vencimiento :  Date;
        @ApiProperty({required : false})
        estadoId: string;
        @ApiProperty({required : false, default: 'USER'})
        role?: Role = 'USER';
}
