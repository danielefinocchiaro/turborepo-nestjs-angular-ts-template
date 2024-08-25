import { Injectable } from "@nestjs/common";
import type { User } from "prisma";
// biome-ignore lint/style/useImportType: This is a bug in the ESLint plugin for Nx
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UsersService {
	constructor(private prisma: PrismaService) {}

	create(createUserDto: User) {
		return "This action adds a new user";
	}

	findAll() {
		return this.prisma.user.findMany();
	}

	findOne(id: number) {
		return `This action returns a #${id} user`;
	}

	update(id: number, updateUserDto: Partial<User>) {
		return `This action updates a #${id} user`;
	}

	remove(id: number) {
		return `This action removes a #${id} user`;
	}
}
