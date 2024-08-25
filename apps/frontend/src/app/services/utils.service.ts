import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import type { User } from "prisma";

@Injectable({
	providedIn: "root",
})
export class UtilsService {
	private API_URL = "http://localhost:3333/api";

	constructor(private http: HttpClient) {
		// This service can now make HTTP requests via `this.http`.
	}

	getUsers(): Observable<User[]> {
		return this.http.get<User[]>(`${this.API_URL}/users`);
	}
}
