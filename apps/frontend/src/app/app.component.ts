import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { UtilsService } from "./services/utils.service";
import { Observable } from "rxjs";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "starfish";
	users = "";

	constructor(private userService: UtilsService) {}

	ngOnInit() {
		this.userService.getUsers().subscribe((data) => {
			this.users = JSON.stringify(data);
		});
	}
}
