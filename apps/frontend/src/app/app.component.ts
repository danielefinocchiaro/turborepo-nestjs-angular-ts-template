import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent {
	title = "frontend";
}
