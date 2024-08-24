import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { Logger } from "@nestjs/common";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const globalPrefix = "api";
	app.setGlobalPrefix(globalPrefix);
	app.enableCors();

	const port = process.env.PORT || 3333;

	const config = new DocumentBuilder()
		.setTitle("Median")
		.setDescription("The Median API description")
		.setVersion("0.1")
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup("api", app, document);

	await app.listen(port, () => {
		Logger.log(`Listening at http://localhost:${port}/${globalPrefix}`);
	});
}
bootstrap();
