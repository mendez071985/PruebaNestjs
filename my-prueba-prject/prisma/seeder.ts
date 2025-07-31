import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Estados de ejemplo
  const estado1 = await prisma.estado.create({
    data: {
      nombre: 'Pendiente',
      descripcion: 'Tarea aún no iniciada',
    },
  });

  const estado2 = await prisma.estado.create({
    data: {
      nombre: 'En Progreso',
      descripcion: 'Tarea en desarrollo',
    },
  });

  // Tareas asociadas
  await prisma.tarea.createMany({
    data: [
      {
        nombre: 'Diseñar logo',
        descripcion: 'Crear una nueva imagen corporativa',
        estadoId: estado1.id,
        role: 'USER',
      },
      {
        nombre: 'Configurar servidor',
        descripcion: 'Establecer entorno de producción',
        estadoId: estado2.id,
        role: 'ADMIN',
      },
    ],
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
