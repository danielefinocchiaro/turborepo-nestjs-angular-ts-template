import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class UtilsService {
	private API_URL = "http://localhost:3333/api";

	constructor(private http: HttpClient) {
		// This service can now make HTTP requests via `this.http`.
	}

	getUsers(): Observable<{ id: string; name: string }[]> {
		return this.http.get<{ id: string; name: string }[]>(
			`${this.API_URL}/users`,
		);
	}
}
