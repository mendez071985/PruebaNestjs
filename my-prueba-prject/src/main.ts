import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Prueba')
    .setDescription('The Prueba AAPI description')
    .setVersion('0.1')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header',
      name: 'Authorization',
      description: 'Enter your Bearer Token'
    })
    .addSecurityRequirements('bearer')
    .build();
    
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('openapi', app, document)

    const jwtAuthGuard = app.get(JwtAuthGuard)
    app.useGlobalGuards(jwtAuthGuard);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
