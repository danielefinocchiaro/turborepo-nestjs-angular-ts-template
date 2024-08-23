import { Controller, Get, Res } from "@nestjs/common";
import type { AppService } from "./app.service";

@Controller("/api")
export class AppController {
	@Get()
	getHello() {
		return "Hello World!";
	}
}
