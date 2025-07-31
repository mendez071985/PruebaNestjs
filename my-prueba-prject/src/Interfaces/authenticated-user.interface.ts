import {Role} from '@prisma/client'
export interface AuthenticatedRequest extends Request{
    tarea: {
        id: string;
        nombre: string;
        role: Role;
    };
}